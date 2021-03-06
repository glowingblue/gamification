import avatar from 'flarum/helpers/avatar';
import Page from 'flarum/components/Page';
import IndexPage from 'flarum/components/IndexPage';
import Button from 'flarum/components/Button';
import ItemList from 'flarum/utils/ItemList';
import LogInModal from 'flarum/components/LogInModal';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import listItems from 'flarum/helpers/listItems';
import username from 'flarum/helpers/username';
import icon from 'flarum/helpers/icon';
import setting from '../helpers/setting';

export default class RankingsPage extends Page {
    init() {
        super.init();

        if (!app.session.user || app.session.user.data.attributes.canViewRankingPage !== true) {
            m.route('/');
        }

        this.loading = true;
        this.users = [];
        this.refresh();

        this.fields = ['pointsPerDiscussion', 'pointsPerComment', 'pointsPerUpvote', 'pointsForNewLevel'];

        this.values = {};
        this.settingsPrefix = 'fof-gamification';
        this.fields.forEach((key) => (this.values[key] = m.prop(app.forum.attribute(this.addPrefix(key)))));
    }

    view() {
        let loading;

        if (this.loading) {
            loading = LoadingIndicator.component();
        } else if (this.users.length < 25) {
            loading = Button.component({
                children: app.translator.trans('core.forum.discussion_list.load_more_button'),
                className: 'Button',
                onclick: this.loadMore.bind(this),
            });
        }

        return (
            <div className="TagsPage RankingsPage">
                {IndexPage.prototype.hero()}
                <div className="container">
                    <nav className="RankingPage-nav IndexPage-nav sideNav" config={IndexPage.prototype.affixSidebar}>
                        <ul>{listItems(IndexPage.prototype.sidebarItems().toArray())}</ul>
                    </nav>
                    <div className="RankingPage sideNavOffset">
                        <table class="rankings">
                            <tr>
                                <th className="rankings-mobile">{app.translator.trans('fof-gamification.forum.ranking.rank')}</th>
                                <th>{app.translator.trans('fof-gamification.forum.ranking.name')}</th>
                                <th>{app.translator.trans('fof-gamification.forum.ranking.level')}</th>
                            </tr>
                            {this.users.map((user, i) => {
                                ++i;
                                return [
                                    <tr className={'ranking-' + i}>
                                        {i < 4 ? (
                                            setting('customRankingImages', true) ? (
                                                <img
                                                    className="rankings-mobile rankings-image"
                                                    src={app.forum.attribute('baseUrl') + app.forum.attribute(`fof-gamification.topimage${i}Url`)}
                                                />
                                            ) : (
                                                <td className={'rankings-mobile rankings-' + i}>{icon('fas fa-trophy')}</td>
                                            )
                                        ) : (
                                            <td className="rankings-4 rankings-mobile">{this.addOrdinalSuffix(i)}</td>
                                        )}
                                        <td>
                                            <div className="PostUser">
                                                <h3 className="rankings-info">
                                                    <a href={app.route.user(user)} config={m.route}>
                                                        {i < 4 ? avatar(user, { className: 'info-avatar rankings-' + i + '-avatar' }) : ''}{' '}
                                                        {username(user)}
                                                    </a>
                                                </h3>
                                            </div>
                                        </td>
                                        {i < 4 ? (
                                            <td className={'rankings-' + i}>{user.expLevel}</td>
                                        ) : (
                                            <td className="rankings-4">{user.expLevel}</td>
                                        )}
                                    </tr>,
                                ];
                            })}
                        </table>
                        <div className="rankings-loadmore"> {loading}</div>
                        <hr />
                        <p className="rankings-explain">
                            {app.translator.trans('fof-gamification.forum.ranking.explain_formula')}
                            <br />
                            <ul>
                                <li>
                                    {app.translator.trans('fof-gamification.forum.ranking.explain_discussion', {
                                        points: this.values.pointsPerDiscussion(),
                                    })}
                                </li>
                                <li>
                                    {app.translator.trans('fof-gamification.forum.ranking.explain_comments', {
                                        points: this.values.pointsPerComment(),
                                    })}
                                </li>
                                <li>
                                    {app.translator.trans('fof-gamification.forum.ranking.explain_upvotes', {
                                        points: this.values.pointsPerUpvote(),
                                    })}
                                </li>
                            </ul>
                            {app.translator.trans('fof-gamification.forum.ranking.explain_level', { points: this.values.pointsForNewLevel() })}
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    refresh(clear = true) {
        if (clear) {
            this.loading = true;
            this.users = [];
        }

        return this.loadResults().then(
            (results) => {
                this.users = [];
                this.parseResults(results);
            },
            () => {
                this.loading = false;
                m.redraw();
            }
        );
    }

    addOrdinalSuffix(i) {
        if (app.data.locale === 'en') {
            const j = i % 10;
            const k = i % 100;

            if (j === 1 && k !== 11) {
                return i + 'st';
            } else if (j === 2 && k !== 12) {
                return i + 'nd';
            } else if (j === 3 && k !== 13) {
                return i + 'rd';
            }
            return i + 'th';
        } else {
            return i;
        }
    }

    stickyParams() {
        return {
            sort: m.route.param('sort'),
            q: m.route.param('q'),
        };
    }

    actionItems() {
        const items = new ItemList();

        items.add(
            'refresh',
            Button.component({
                title: app.translator.trans('core.forum.index.refresh_tooltip'),
                icon: 'fas fa-refresh',
                className: 'Button Button--icon',
                onclick: () => {
                    app.cache.discussionList.refresh();
                    if (app.session.user) {
                        app.store.find('users', app.session.user.id());
                        m.redraw();
                    }
                },
            })
        );

        return items;
    }

    newDiscussion() {
        const deferred = m.deferred();

        if (app.session.user) {
            this.composeNewDiscussion(deferred);
        } else {
            app.modal.show(
                new LogInModal({
                    onlogin: this.composeNewDiscussion.bind(this, deferred),
                })
            );
        }

        return deferred.promise;
    }

    composeNewDiscussion(deferred) {
        const component = new DiscussionComposer({ user: app.session.user });

        app.composer.load(component);
        app.composer.show();

        deferred.resolve(component);

        return deferred.promise;
    }

    loadResults(offset) {
        const params = {};
        params.page = {
            offset: offset,
            limit: '10',
        };

        return app.store.find('rankings', params);
    }

    loadMore() {
        this.loading = true;

        this.loadResults(this.users.length).then(this.parseResults.bind(this));
    }

    parseResults(results) {
        [].push.apply(this.users, results);

        this.loading = false;

        this.users.forEach((user) => {
            let expComments = (user.commentCount() - user.discussionCount()) * this.values.pointsPerComment(),
                expDiscussions = user.discussionCount() * this.values.pointsPerDiscussion(),
                expLikes = user.points() * this.values.pointsPerUpvote();

            let expTotal = expComments + expDiscussions + expLikes,
                expLevel = Math.floor(expTotal / this.values.pointsForNewLevel());
            user.expLevel = expLevel;
        });

        m.lazyRedraw();

        return results;
    }

    /**
     * @returns string
     */
    addPrefix(key) {
        return this.settingsPrefix + '.' + key;
    }
}
