module.exports=function(t){var o={};function n(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=o,n.d=function(t,o,e){n.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,o){if(1&o&&(t=n(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var s in t)n.d(e,s,function(o){return t[o]}.bind(null,s));return e},n.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(o,"a",o),o},n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},n.p="",n(n.s=41)}([function(t,o){t.exports=flarum.core.compat.app},function(t,o){t.exports=flarum.core.compat.extend},function(t,o){t.exports=flarum.core.compat.Model},function(t,o,n){"use strict";function e(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o}n.d(o,"a",function(){return e})},function(t,o){t.exports=flarum.core.compat["components/Button"]},function(t,o){t.exports=flarum.core.compat["components/IndexPage"]},function(t,o){},function(t,o,n){"use strict";n.d(o,"a",function(){return i});var e=n(3),s=n(2),a=n.n(s),r=n(8),i=function(t){function o(){return t.apply(this,arguments)||this}return Object(e.a)(o,t),o}(n.n(r)()(a.a,{points:a.a.attribute("points"),name:a.a.attribute("name"),color:a.a.attribute("color")}))},function(t,o){t.exports=flarum.core.compat["utils/mixin"]},function(t,o){t.exports=flarum.core.compat["components/Page"]},function(t,o){t.exports=flarum.core.compat["components/LogInModal"]},function(t,o){t.exports=flarum.core.compat["helpers/avatar"]},function(t,o){t.exports=flarum.core.compat["helpers/username"]},,function(t,o){t.exports=flarum.core.compat["components/PostUser"]},function(t,o){t.exports=flarum.core.compat["utils/ItemList"]},function(t,o){t.exports=flarum.core.compat["models/Discussion"]},,function(t,o){t.exports=flarum.core.compat["models/Post"]},function(t,o){t.exports=flarum.core.compat["models/User"]},function(t,o){t.exports=flarum.core.compat["components/UserCard"]},function(t,o){t.exports=flarum.core.compat["components/DiscussionList"]},function(t,o){t.exports=flarum.core.compat["components/CommentPost"]},,function(t,o,n){"use strict";var e=n(1),s=n(0),a=n.n(s),r=n(16),i=n.n(r),u=n(2),p=n.n(u),c=n(18),f=n.n(c),l=n(14),d=n.n(l),h=n(19),v=n.n(h),b=n(20),g=n.n(b);function x(t,o){void 0===o&&(o={}),o.style=o.style||{},o.className="rankLabel "+(o.className||"");var n=t.color();return o.style.backgroundColor=o.style.color=n,o.className+=" colored",m("span",o,m("span",{className:"rankLabel-text"},t.name()))}var y=function(){i.a.prototype.canVote=p.a.attribute("canVote"),i.a.prototype.canSeeVotes=p.a.attribute("canSeeVotes"),i.a.prototype.votes=p.a.attribute("votes"),v.a.prototype.points=p.a.attribute("points"),v.a.prototype.ranks=p.a.hasMany("ranks"),f.a.prototype.upvotes=p.a.hasMany("upvotes"),f.a.prototype.downvotes=p.a.hasMany("downvotes");var t=function(t){return function(o){return o&&o.attrs&&o.attrs.className&&o.attrs.className===t}};Object(e.extend)(g.a.prototype,"infoItems",function(t,o){var n="";0==n&&(n="0"),n=app.forum.attribute("PointsPlaceholder")?app.forum.attribute("PointsPlaceholder").replace("{points}",this.props.user.data.attributes.Points):app.translator.trans("fof-gamification.forum.user.points",{points:this.props.user.data.attributes.Points})}),Object(e.extend)(g.a.prototype,"view",function(o){var n=this.props.user,e=function o(n,e){var s=[];if(n&&n.children){var a=n.children.find(t(e));void 0!==a&&s.push.apply(s,a),n.children.forEach(function(t){s.push.apply(s,o(t,e))})}return s}(o,"UserCard-profile")[0];if(e){var s=e.children.find(t("UserCard-badges"));return n.ranks()&&(void 0===s||""===s?e.children.splice(1,0,m("ul",{className:"UserCard-badges badges"},n.ranks().reverse().map(function(t,o){if(!(o>=app.forum.attribute("ranksAmt")&&null!==app.forum.attribute("ranksAmt")))return m("li",{className:"User-Rank"},x(t))}))):s.children.push(n.ranks().reverse().map(function(t,o){if(!(o>=app.forum.attribute("ranksAmt")&&null!==app.forum.attribute("ranksAmt")))return m("li",{className:"User-Rank"},x(t))}))),o}}),Object(e.extend)(d.a.prototype,"view",function(t){var o,n=this.props.post.user();return n?(t.children.find((o="h3",function(t){return t&&t.tag&&t.tag===o})).children.push(n.ranks().reverse().map(function(t,o){if(!(o>=app.forum.attribute("ranksAmt")&&null!==app.forum.attribute("ranksAmt")))return m("span",{className:"Post-Rank"},x(t))})),t):t})},k=n(5),P=n.n(k),w=n(15),N=n.n(w),O=n(21),j=n.n(O),C=n(26),U=n.n(C),_=n(4),L=n.n(_),I=n(27),M=n.n(I),V=function(){P.a.prototype.viewItems=function(){var t=this,o=new N.a,n=app.cache.discussionList.sortMap(),e={};for(var s in n)e[s]=app.translator.trans("core.forum.index_sort."+s+"_button");var a=e[this.params().sort]||Object.keys(n).map(function(t){return e[t]})[0];return/^.*?\/hot/.test(m.route())&&(a=app.translator.trans("core.forum.index_sort.hot_button")),o.add("sort",U.a.component({buttonClassName:"Button",label:a,children:Object.keys(e).map(function(o){var s=e[o],a=(t.params().sort||Object.keys(n)[0])===o;return/^.*?\/hot/.test(m.route())&&"hot"===o&&(a=!0),/^.*?\/hot/.test(m.route())&&"latest"===o&&(a=!1,m.redraw()),L.a.component({children:s,icon:!a||"fas fa-check",onclick:t.changeSort.bind(t,o),active:a})})})),o},Object(e.extend)(P.a.prototype,"navItems",function(t){t.add("rankings",M.a.component({href:app.route("rankings"),children:app.translator.trans("fof-gamification.forum.nav.name"),icon:"fas fa-trophy"}),80)}),P.a.prototype.changeSort=function(t){var o=this.params();"hot"===t?(m.route("/"),m.route(m.route()+"hot")):(t===Object.keys(app.cache.discussionList.sortMap())[0]?delete o.sort:o.sort=t,"hot"===o.filter&&delete o.filter,m.route(app.route("index",o)))},Object(e.extend)(j.a.prototype,"sortMap",function(t){t.hot="hot"}),Object(e.extend)(j.a.prototype,"requestParams",function(t){"hot"===this.props.params.filter&&(t.filter.q=" is:hot")})},D=n(10),R=n.n(D),S=n(22),A=n.n(S),F=n(28),B=n.n(F),T=n(3),q=n(29),E=n.n(q),z=n(11),G=n.n(z),H=n(12),J=n.n(H),K=function(t){function o(){return t.apply(this,arguments)||this}Object(T.a)(o,t);var n=o.prototype;return n.className=function(){return"VotesModal Modal--small"},n.title=function(){return app.translator.trans("fof-gamification.forum.modal.title")},n.content=function(){return m("div",{className:"Modal-body"},m("ul",{className:"VotesModal-list"},m("legend",null,app.translator.trans("fof-gamification.forum.modal.upvotes_label")),this.props.post.upvotes().map(function(t){return m("li",null,m("a",{href:app.route.user(t),config:m.route},G()(t)," ",J()(t)))}),m("legend",null,app.translator.trans("fof-gamification.forum.modal.downvotes_label")),this.props.post.downvotes().map(function(t){return m("li",null,m("a",{href:app.route.user(t),config:m.route},G()(t)," ",J()(t)))})))},o}(E.a),Q=n(7),W=n(9),X=n.n(W),Y=n(30),Z=n.n(Y),tt=n(31),ot=n.n(tt),nt=function(t){function o(){return t.apply(this,arguments)||this}Object(T.a)(o,t);var n=o.prototype;return n.init=function(){var o=this;t.prototype.init.call(this),app.session.user&&!0===app.session.user.data.attributes.canViewRankingPage||m.route("/"),this.loading=!0,this.users=[],this.refresh(),this.fields=["pointsPerDiscussion","pointsPerComment","pointsPerUpvote","pointsForNewLevel"],this.values={},this.settingsPrefix="fof-gamification",this.fields.forEach(function(t){return o.values[t]=m.prop(app.forum.attribute(o.addPrefix(t)))})},n.view=function(){var t,o=this;return this.loading?t=Z.a.component():this.users.length<25&&(t=L.a.component({children:app.translator.trans("core.forum.discussion_list.load_more_button"),className:"Button",onclick:this.loadMore.bind(this)})),m("div",{className:"TagsPage RankingsPage"},P.a.prototype.hero(),m("div",{className:"container"},m("nav",{className:"RankingPage-nav IndexPage-nav sideNav",config:P.a.prototype.affixSidebar},m("ul",null,ot()(P.a.prototype.sidebarItems().toArray()))),m("div",{className:"RankingPage sideNavOffset"},m("table",{class:"rankings"},m("tr",null,m("th",{className:"rankings-mobile"},app.translator.trans("fof-gamification.forum.ranking.rank")),m("th",null,app.translator.trans("fof-gamification.forum.ranking.name")),m("th",null,app.translator.trans("fof-gamification.forum.ranking.level"))),this.users.map(function(t,n){return++n,[m("tr",{className:"ranking-"+n},n<4?"1"==app.forum.attribute("CustomRankingImages")?m("img",{className:"rankings-mobile rankings-image",src:app.forum.attribute("baseUrl")+app.forum.attribute("topimage"+n+"Url")}):m("td",{className:"rankings-mobile rankings-"+n},m("i",{className:"icon fas fa-trophy"})):m("td",{className:"rankings-4 rankings-mobile"},o.addOrdinalSuffix(n)),m("td",null,m("div",{className:"PostUser"},m("h3",{className:"rankings-info"},m("a",{href:app.route.user(t),config:m.route},n<4?G()(t,{className:"info-avatar rankings-"+n+"-avatar"}):""," ",J()(t))))),n<4?m("td",{className:"rankings-"+n},t.expLevel):m("td",{className:"rankings-4"},t.expLevel))]})),m("div",{className:"rankings-loadmore"}," ",t),m("hr",null),m("p",{className:"rankings-explain"},app.translator.trans("fof-gamification.forum.ranking.explain_formula"),m("br",null),m("ul",null,m("li",null,app.translator.trans("fof-gamification.forum.ranking.explain_discussion",{points:this.values.pointsPerDiscussion()})),m("li",null,app.translator.trans("fof-gamification.forum.ranking.explain_comments",{points:this.values.pointsPerComment()})),m("li",null,app.translator.trans("fof-gamification.forum.ranking.explain_upvotes",{points:this.values.pointsPerUpvote()}))),app.translator.trans("fof-gamification.forum.ranking.explain_level",{points:this.values.pointsForNewLevel()})))))},n.refresh=function(t){var o=this;return void 0===t&&(t=!0),t&&(this.loading=!0,this.users=[]),this.loadResults().then(function(t){o.users=[],o.parseResults(t)},function(){o.loading=!1,m.redraw()})},n.addOrdinalSuffix=function(t){if("en"==app.forum.attribute("DefaultLocale")){var o=t%10,n=t%100;return 1==o&&11!=n?t+"st":2==o&&12!=n?t+"nd":3==o&&13!=n?t+"rd":t+"th"}return t},n.stickyParams=function(){return{sort:m.route.param("sort"),q:m.route.param("q")}},n.actionItems=function(){var t=new N.a;return t.add("refresh",L.a.component({title:app.translator.trans("core.forum.index.refresh_tooltip"),icon:"fas fa-refresh",className:"Button Button--icon",onclick:function(){app.cache.discussionList.refresh(),app.session.user&&(app.store.find("users",app.session.user.id()),m.redraw())}})),t},n.newDiscussion=function(){var t=m.deferred();return app.session.user?this.composeNewDiscussion(t):app.modal.show(new R.a({onlogin:this.composeNewDiscussion.bind(this,t)})),t.promise},n.composeNewDiscussion=function(t){var o=new DiscussionComposer({user:app.session.user});return app.composer.load(o),app.composer.show(),t.resolve(o),t.promise},n.loadResults=function(t){var o={};return o.page={offset:t,limit:"10"},app.store.find("rankings",o)},n.loadMore=function(){this.loading=!0,this.loadResults(this.users.length).then(this.parseResults.bind(this))},n.parseResults=function(t){var o=this;return[].push.apply(this.users,t),this.loading=!1,this.users.forEach(function(t){var n=(t.commentCount()-t.discussionCount())*o.values.pointsPerComment()+t.discussionCount()*o.values.pointsPerDiscussion()+t.data.attributes.Points*o.values.pointsPerUpvote(),e=Math.floor(n/o.values.pointsForNewLevel());t.expLevel=e}),m.lazyRedraw(),t},n.addPrefix=function(t){return this.settingsPrefix+"."+t},o}(X.a),et=n(32),st=function(t){function o(){return t.apply(this,arguments)||this}Object(T.a)(o,t);var n=o.prototype;return n.icon=function(){return"Up"===this.props.notification.content()?"fas fa-thumbs-up":"fas fa-thumbs-down"},n.href=function(){return app.route.post(this.props.notification.subject())},n.content=function(){var t=this.props.notification.fromUser();return"Up"===this.props.notification.content()?app.translator.trans("fof-gamification.forum.notification.upvote",{user:t}):app.translator.trans("fof-gamification.forum.notification.downvote",{user:t})},n.excerpt=function(){return this.props.notification.subject().contentPlain()},o}(n.n(et).a),at=n(33),rt=n.n(at),it=n(34),ut=n.n(it),pt=n(35),ct=n.n(pt),ft=function(){Object(e.extend)(rt.a.prototype,"infoItems",function(t){app.forum.attribute("showVotesOnDiscussionPage")&&($(".DiscussionListItem-info").find(".item-tags").addClass("gamification"),t.add("discussion-votes",m("span",{className:"DiscussionListItem-votes",title:app.translator.trans("fof-gamification.forum.votes")},ct()("far fa-thumbs-up"),ut()(this.props.discussion.votes())),10))})},lt=n(36),mt=function(t){function o(){return t.apply(this,arguments)||this}Object(T.a)(o,t);var n=o.prototype;return n.init=function(){var t=this;this.fields=["pointsPerDiscussion","pointsPerComment","pointsPerUpvote","pointsForNewLevel"],this.values={},this.settingsPrefix="fof-gamification",this.fields.forEach(function(o){return t.values[o]=m.prop(a.a.forum.attribute(t.addPrefix(o)))})},n.config=function(){this.$().tooltip({container:"body"})},n.view=function(){var t=this.props.post.user(),o=a.a.translator.trans("fof-gamification.forum.ranking.level"),n=(t.commentCount()-t.discussionCount())*this.values.pointsPerComment()+t.discussionCount()*this.values.pointsPerDiscussion()+t.data.attributes.Points*this.values.pointsPerUpvote(),e=Math.floor(n/this.values.pointsForNewLevel()),s=100/this.values.pointsForNewLevel()*(n-e*this.values.pointsForNewLevel());return t.expLevel=e,m("div",{class:"PostUser-level",title:n+" "+a.a.translator.trans("fof-gamification.forum.ranking.expText")},m("span",{class:"PostUser-text"},m("span",{class:"PostUser-levelText"},o)," ",m("span",{class:"PostUser-levelPoints"},e)),m("div",{class:"PostUser-bar PostUser-bar--empty"}),m("div",{class:"PostUser-bar",style:"width: "+s+"%;"}))},n.addPrefix=function(t){return this.settingsPrefix+"."+t},o}(n.n(lt).a);a.a.initializers.add("fof-gamification",function(t){t.store.models.ranks=Q.a,t.notificationComponents.vote=st,t.routes.rankings={path:"/rankings",component:nt.component()},Object(e.extend)(A.a.prototype,"config",function(t,o,n){var s=this;o||a.a.pusher&&a.a.pusher.then(function(t){t.main.bind("newVote",function(t){var o=parseInt(t.userId);if(o!=a.a.session.user.id()){if(m.startComputation(),s.postId()==t.postId){var n=s.upvotedata(),e=s.downvotedata();switch(t.before){case"up":n=s.removeVote(n,o);break;case"down":e=s.removeVote(e,o)}switch(t.after){case"up":n.unshift({type:"users",id:o});break;case"down":e.unshift({type:"users",id:o});break;case"none":e=s.removeVote(e,o),n=s.removeVote(n,o)}s.downvotedata(e),s.upvotedata(n),m.redraw.strategy("all")}m.endComputation()}}),Object(e.extend)(n,"onunload",function(){return t.main.unbind("newVote")})})}),Object(e.extend)(B.a,"moderationControls",function(t,o){o.discussion().canSeeVotes()&&t.add("viewVotes",[m(L.a,{icon:"fas fa-thumbs-up",onclick:function(){a.a.modal.show(new K({post:o}))}},a.a.translator.trans("fof-gamification.forum.mod_item"))])}),Object(e.extend)(A.a.prototype,"actionItems",function(t){var o=this.props.post;this.postId=m.prop(o.data.id),this.downvotedata=m.prop(o.data.relationships.downvotes.data),this.upvotedata=m.prop(o.data.relationships.upvotes.data);var n=a.a.session.user&&o.upvotes().some(function(t){return t===a.a.session.user}),e=a.a.session.user&&o.downvotes().some(function(t){return t===a.a.session.user});a.a.session.user||(e=!1,n=!1);var s=a.a.forum.attribute("IconName");null!==s&&""!==s||(s="thumbs"),this.removeVote=function(t,o){return t.some(function(n,e){n.id==o&&t.splice(e,1)}),t},t.add("upvote",L.a.component({icon:"fas fa-"+s+"-up",className:"Post-vote Post-upvote",style:!1!==n?"color:"+a.a.forum.data.attributes.themePrimaryColor:"color:",disabled:!o.discussion().canVote(),onclick:function(){if(a.a.session.user){if(o.discussion().canVote()){var t=o.data.relationships.upvotes.data,s=o.data.relationships.downvotes.data;n=!n,e=!1,o.save([n,e,"vote"]),t.some(function(o,n){if(o.id===a.a.session.user.id())return t.splice(n,1),!0}),s.some(function(t,o){if(t.id===a.a.session.user.id())return s.splice(o,1),!0}),n&&t.unshift({type:"users",id:a.a.session.user.id()})}}else a.a.modal.show(new R.a)}}),3),t.add("points",m("label",{className:"Post-points"},this.upvotedata().length-this.downvotedata().length),2),t.add("downvote",L.a.component({icon:"fas fa-"+s+"-down",className:"Post-vote Post-downvote",style:!1!==e?"color:"+a.a.forum.data.attributes.themePrimaryColor:"",disabled:!o.discussion().canVote(),onclick:function(){if(a.a.session.user){if(o.discussion().canVote()){var t=o.data.relationships.upvotes.data,s=o.data.relationships.downvotes.data;e=!e,n=!1,o.save([n,e,"vote"]),t.some(function(o,n){if(o.id===a.a.session.user.id())return t.splice(n,1),!0}),s.some(function(t,o){if(t.id===a.a.session.user.id())return s.splice(o,1),!0}),e&&s.unshift({type:"users",id:a.a.session.user.id()})}}else a.a.modal.show(new R.a)}}),1)}),V(),y(),ft(),Object(e.extend)(d.a.prototype,"view",function(t){t.children.push(mt.component(this.props))})})},,function(t,o){t.exports=flarum.core.compat["components/Dropdown"]},function(t,o){t.exports=flarum.core.compat["components/LinkButton"]},function(t,o){t.exports=flarum.core.compat["utils/PostControls"]},function(t,o){t.exports=flarum.core.compat["components/Modal"]},function(t,o){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,o){t.exports=flarum.core.compat["helpers/listItems"]},function(t,o){t.exports=flarum.core.compat["components/Notification"]},function(t,o){t.exports=flarum.core.compat["components/DiscussionListItem"]},function(t,o){t.exports=flarum.core.compat["utils/abbreviateNumber"]},function(t,o){t.exports=flarum.core.compat["helpers/icon"]},function(t,o){t.exports=flarum.core.compat.Component},,,,,function(t,o,n){"use strict";n.r(o);var e=n(6);for(var s in e)"default"!==s&&function(t){n.d(o,t,function(){return e[t]})}(s);n(24)}]);
//# sourceMappingURL=forum.js.map