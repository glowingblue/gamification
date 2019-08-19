import Component from 'flarum/Component';
import app from 'flarum/app';

export default class LevelBar extends Component {
    config() {
        this.$().tooltip({ container: 'body' });
    }

    view() {
        const user = this.props.post.user();
        const pointsText = app.translator.trans(
            'fof-gamification.forum.ranking.level'
        );

        let expComments = (user.commentCount() - user.discussionCount()) * 21,
            expDiscussions = user.discussionCount() * 33,
            expLikes = user.data.attributes.Points * 11;

        let expTotal = expComments + expDiscussions + expLikes,
            expLevel = Math.floor(expTotal / 135),
            expPercent = (100 / 135) * (expTotal - expLevel * 135);

        return (
            <div
                class='PostUser-level'
                title={`${expTotal} ${app.translator.trans(
                    'fof-gamification.forum.ranking.expText'
                )}`}
            >
                <span class='PostUser-text'>
                    <span class='PostUser-levelText'>{pointsText}</span>
                    &nbsp;
                    <span class='PostUser-levelPoints'>{expLevel}</span>
                </span>
                <div class='PostUser-bar PostUser-bar--empty'></div>
                <div class='PostUser-bar' style={'width: ' + expPercent + '%;'}></div>
            </div>
        );
    }
}
