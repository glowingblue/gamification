import Component from "flarum/Component";
import app from "flarum/app";

export default class LevelBar extends Component {
    init() {
        this.fields = [
            "pointsPerDiscussion",
            "pointsPerComment",
            "pointsPerUpvote",
            "pointsForNewLevel"
        ];

        this.values = {};
        this.settingsPrefix = "fof-gamification";
        this.fields.forEach(
            key =>
                (this.values[key] = m.prop(
                    app.forum.attribute(this.addPrefix(key))
                ))
        );
    }

    config() {
        this.$().tooltip({ container: "body" });
    }

    isMod(user) {
        const modId = [
            { id: 1, name: 1 },
            { id: 2, name: 4 },
            { id: 3, name: 8 }
        ];
        return !!modId.filter(function(u) {
            const groups = user.data.relationships.groups.data;
            return !!groups.filter(function(group) {
                return group.id == u.name;
            }).length;
        }).length;
    }

    view() {
        const user = this.props.post.user();
        const pointsText = app.translator.trans(
            "fof-gamification.forum.ranking.level"
        );

        let expComments =
                (user.commentCount() - user.discussionCount()) *
                this.values.pointsPerComment(),
            expDiscussions =
                user.discussionCount() * this.values.pointsPerDiscussion(),
            expLikes =
                user.data.attributes.Points * this.values.pointsPerUpvote();

        let expTotal = expComments + expDiscussions + expLikes,
            expLevel = Math.floor(expTotal / this.values.pointsForNewLevel()),
            expPercent =
                (100 / this.values.pointsForNewLevel()) *
                (expTotal - expLevel * this.values.pointsForNewLevel());
        user.expLevel = expLevel;

        const isMod = this.isMod(user);

        return isMod ? <div></div> : (
            <div
                class="PostUser-level"
                title={`${expTotal} ${app.translator.trans(
                    "fof-gamification.forum.ranking.expText"
                )}`}
            >
                <span class="PostUser-text">
                    <span class="PostUser-levelText">{pointsText}</span>
                    &nbsp;
                    <span class="PostUser-levelPoints">{expLevel}</span>
                </span>
                <div class="PostUser-bar PostUser-bar--empty"></div>
                <div
                    class="PostUser-bar"
                    style={"width: " + expPercent + "%;"}
                ></div>
            </div>
        );
    }

    /**
     * @returns string
     */
    addPrefix(key) {
        return this.settingsPrefix + "." + key;
    }
}
