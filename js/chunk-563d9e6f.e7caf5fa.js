(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-563d9e6f"],{"172d":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("Navbar"),s("div",{staticClass:"wide-container"},[s("Spinner",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}]}),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading,expression:"!isLoading"}],staticClass:"main"},[s("UserProfile",{attrs:{"current-user":e.currentUser,"initial-user":e.user},on:{refresh:e.refresh}}),0===e.tweets.length?s("div",{staticClass:"empty"},[e._v("使用者沒有任何喜歡的推文")]):e._e(),e._l(e.tweets,(function(t){return s("UserLikeItems",{key:t.id,attrs:{"initial-tweet":t},on:{"toggle-tweet-reply":e.toggleTweetReply,refresh:e.refresh}})})),s("UserEditModal",{attrs:{"current-user":e.currentUser},on:{refresh:e.refresh}}),s("TweetLikeReplyModal",{attrs:{"current-user":e.currentUser,"tweet-item":e.tweetItem},on:{refresh:e.refresh}}),s("TweetModal",{attrs:{"current-user":e.currentUser},on:{refresh:e.refresh}})],2),s("PopularUsersCard",{on:{refresh:e.refresh}})],1)],1)},r=[],i=s("1da1"),n=s("5530"),o=(s("7db0"),s("d3b7"),s("4de4"),s("b0c0"),s("96cf"),s("2f62")),c=s("eae4"),d=s("4cce"),l=s("d178"),u=s("9f73"),w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tweets"},[a("div",{staticClass:"tweet"},[a("div",{staticClass:"tweet-icon"},[a("img",{staticClass:"tweet-icon-photo",attrs:{src:e._f("emptyImage")(e.tweet.User?e.tweet.User.avatar:""),alt:"user-icon"}})]),a("div",{staticClass:"tweet-body"},[a("div",{staticClass:"tweet-body-head"},[a("router-link",{staticClass:"tweet-body-head-name",attrs:{to:{name:"user-tweet",params:{id:e.tweet.User.id}}}},[e._v(e._s(e.tweet.User.name))]),a("div",{staticClass:"tweet-body-head-account"},[e._v("@"+e._s(e.tweet.User.account))]),a("span",[e._v(" · ")]),a("div",{staticClass:"tweet-body-head-time"},[e._v(" "+e._s(e._f("fromNow")(e.tweet.createdAt))+" ")])],1),a("router-link",{staticClass:"tweet-body-content",attrs:{to:{name:"tweet",params:{id:e.tweet.id}}}},[e._v(e._s(e.tweet.description))]),a("div",{staticClass:"tweet-body-foot"},[a("div",{staticClass:"tweet-body-foot-comment"},[a("img",{staticClass:"tweet-body-foot-comment-icon",attrs:{src:s("35ed"),alt:"tweet-comment","data-bs-toggle":"modal","data-bs-target":"#tweet-reply-modal"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.toggleTweetReply(e.tweet.id)}}}),a("span",{staticClass:"tweet-body-foot-comment-count"},[e._v(e._s(e.tweet.replyCount))])]),a("div",{staticClass:"tweet-body-foot-liked"},[e.tweet.isLike?a("img",{staticClass:"tweet-body-foot-liked-icon",attrs:{src:s("f790"),alt:"tweet-isLiked-icon"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.deleteLiked(e.tweet.id)}}}):a("img",{staticClass:"tweet-body-foot-liked-icon",attrs:{src:s("0e53"),alt:"tweet-liKed-icon"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.addLiked(e.tweet.id)}}}),a("span",{staticClass:"tweet-body-foot-liked-count"},[e._v(e._s(e.tweet.likeCount))])])])],1)])])},m=[],p=(s("a4d3"),s("e01a"),s("2708")),f=s("6783"),h={name:"UserLikeItems",mixins:[p["b"],p["a"]],props:{initialTweet:{type:Object,required:!0}},watch:{initialTweet:function(){this.fetchTweet()}},data:function(){return{tweet:{id:0,User:[],isLike:!1,replyCount:0,likeCount:0,createdAt:"",description:""}}},created:function(){this.fetchTweet()},methods:{fetchTweet:function(){var e=this.initialTweet,t=e.Tweet,s=e.isLike,a=t.id,r=t.Likes,i=t.Replies,n=t.User,o=t.createdAt,c=t.description;this.tweet={id:a,User:n,isLike:s,replyCount:i.length,likeCount:r.length,createdAt:o,description:c}},toggleTweetReply:function(e){this.$emit("toggle-tweet-reply",e)},addLiked:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,f["a"].addLike({tweetId:e});case 3:if(a=s.sent,"success"===a.data.status){s.next=6;break}throw new Error;case 6:t.$emit("refresh",e),s.next=12;break;case 9:s.prev=9,s.t0=s["catch"](0),console.log(s.t0);case 12:t.$emit("add-liked",e);case 13:case"end":return s.stop()}}),s,null,[[0,9]])})))()},deleteLiked:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,f["a"].deleteLike({tweetId:e});case 3:if(a=s.sent,"success"===a.data.status){s.next=6;break}throw new Error;case 6:t.$emit("refresh",e),s.next=12;break;case 9:s.prev=9,s.t0=s["catch"](0),console.log(s.t0);case 12:case"end":return s.stop()}}),s,null,[[0,9]])})))()}}},v=h,b=(s("ccb7"),s("2877")),y=Object(b["a"])(v,w,m,!1,null,"e80929a6",null),g=y.exports,k=s("eb69"),C=s("4287"),I=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"modal fade",attrs:{id:"tweet-reply-modal","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[e._m(0),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"modal-body-post"},[s("div",{staticClass:"modal-body-post-head"},[s("img",{staticClass:"modal-body-post-head-icon",attrs:{src:e._f("emptyImage")(e.tweetItem.Tweet.User?e.tweetItem.Tweet.User.avatar:""),alt:""}}),s("div",{staticClass:"modal-body-post-head-connect"})]),s("div",{staticClass:"modal-body-post-body"},[s("div",{staticClass:"modal-body-post-body-head"},[s("div",{staticClass:"modal-body-post-body-head-name"},[e._v(" "+e._s(e.tweetItem.Tweet.User?e.tweetItem.Tweet.User.name:"")+" ")]),s("div",{staticClass:"modal-body-post-body-head-account"},[e._v(" @"+e._s(e.tweetItem.Tweet.User?e.tweetItem.Tweet.User.account:"")+" ")]),s("span",[e._v(" · ")]),s("div",{staticClass:"modal-body-post-body-head-time"},[e._v(" "+e._s(e._f("fromNow")(e.tweetItem.createdAt))+" ")])]),s("div",{staticClass:"modal-body-post-body-content"},[e._v(" "+e._s(e.tweetItem.Tweet.description)+" ")]),s("div",{staticClass:"modal-body-post-body-foot"},[s("div",{staticClass:"modal-body-post-body-foot-reply"},[e._v(" 回覆給 "),s("span",{staticClass:"modal-body-post-body-foot-account"},[e._v("@"+e._s(e.tweetItem.Tweet.User?e.tweetItem.Tweet.User.account:""))])])])])]),s("div",{staticClass:"modal-body-tweet"},[s("img",{staticClass:"modal-body-tweet-icon",attrs:{src:e._f("emptyImage")(e.currentUser.avatar),alt:""}}),s("form",{staticClass:"modal-body-tweet-form",attrs:{action:""},on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.createNewReply(e.tweetItem.TweetId)}}},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newReply,expression:"newReply"}],attrs:{name:"tweet",id:"tweet",cols:"30",rows:"10",placeholder:"推你的回覆"},domProps:{value:e.newReply},on:{input:function(t){t.target.composing||(e.newReply=t.target.value)}}}),s("div",{staticClass:"addReply-form"},[s("p",{directives:[{name:"show",rawName:"v-show",value:e.newReply.length>140,expression:"newReply.length > 140"}],staticClass:"addReply-limit"},[e._v(" 字數不可超過140字 ")]),s("p",{directives:[{name:"show",rawName:"v-show",value:e.checkEmptyInput,expression:"checkEmptyInput"}],staticClass:"addReply-empty"},[e._v(" 內容不可空白 ")]),s("button",{staticClass:"btn-tweet",attrs:{"data-bs-dismiss":e.submitOK,disabled:e.newReply.length>140||e.isProcessing}},[e._v(" 推文 ")])])])])])])])])},_=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal-header"},[a("img",{staticClass:"modal-close",attrs:{src:s("3c1b"),alt:"","data-bs-dismiss":"modal","aria-label":"Close"}})])}],U=(s("498a"),{name:"TweetLikeReplyModal",mixins:[p["b"],p["a"]],props:{tweetItem:{type:Object,required:!0}},watch:{tweetItem:function(e){this.tweet=Object(n["a"])(Object(n["a"])({},this.tweetItem),e)}},data:function(){return{tweet:{},newReply:"",checkEmptyInput:!1,isProcessing:!1}},computed:Object(n["a"])(Object(n["a"])({},Object(o["b"])(["currentUser","isAuthenticated"])),{},{submitOK:function(){return this.newReply?"modal":""}}),methods:{createNewReply:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var a,r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(s.prev=0,t.newReply.trim()){s.next=4;break}return t.checkEmptyInput=!0,s.abrupt("return");case 4:return t.isProcessing=!0,s.next=7,f["a"].reply({tweetId:e,comment:t.newReply});case 7:if(a=s.sent,r=a.data,"success"===r.status){s.next=11;break}throw new Error(r.message);case 11:t.$emit("refresh"),c["b"].fire({title:"已成功回復推文"}),t.newReply="",t.checkEmptyInput=!1,t.isProcessing=!1,s.next=23;break;case 18:s.prev=18,s.t0=s["catch"](0),console.log(s.t0),t.isProcessing=!1,c["a"].fire({title:"無法回復推文-".concat(s.t0.message)});case 23:case"end":return s.stop()}}),s,null,[[0,18]])})))()}},mounted:function(){var e=this;document.addEventListener("click",(function(t){(t.target.matches(".modal")||t.target.matches(".modal-close"))&&(e.newReply="")}))}}),R=U,L=(s("88c8"),Object(b["a"])(R,I,_,!1,null,"5fbc31b2",null)),x=L.exports,T=s("2375"),O=s("5a23"),j={name:"UserLike",components:{Navbar:l["a"],UserProfile:u["a"],UserLikeItems:g,UserEditModal:k["a"],TweetModal:C["a"],TweetLikeReplyModal:x,Spinner:T["a"],PopularUsersCard:O["a"]},data:function(){return{user:{},tweetItem:{},tweets:[],isLoading:!0}},computed:Object(n["a"])({},Object(o["b"])(["currentUser","isAuthenticated"])),created:function(){var e=this.$route.params.id;this.fetchUser({userId:e}),this.fetchLike({userId:e})},beforeRouteUpdate:function(e,t,s){var a=e.params.id;this.fetchUser({userId:a}),this.fetchLike({userId:a}),s()},methods:{fetchLike:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var a,r,i,n;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return a=e.userId,s.prev=1,s.next=4,d["a"].getUserLikes({userId:a});case 4:if(r=s.sent,i=r.data,n=r.status,200===n){s.next=8;break}throw new Error;case 8:t.tweets=i,t.tweetItem=t.tweets[0],t.isLoading=!1,s.next=17;break;case 13:s.prev=13,s.t0=s["catch"](1),console.log(s.t0),c["a"].fire({title:"無法取得使用者推文資訊"});case 17:case"end":return s.stop()}}),s,null,[[1,13]])})))()},fetchUser:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var a,r,i,n;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return a=e.userId,s.prev=1,s.next=4,d["a"].getUser({userId:a});case 4:if(r=s.sent,i=r.data,n=r.status,200===n){s.next=8;break}throw new Error;case 8:t.user=i,t.isLoading=!1,s.next=15;break;case 12:s.prev=12,s.t0=s["catch"](1),console.log(s.t0);case 15:case"end":return s.stop()}}),s,null,[[1,12]])})))()},toggleTweetReply:function(e){this.tweetItem=this.tweets.find((function(t){return t.TweetId===e}))},deleteLiked:function(e){this.tweets=this.tweets.filter((function(t){return t.TweetId!==e}))},userUpdate:function(e){var t=e.name,s=e.introduction,a=e.avatar,r=e.cover;this.user.name=t,this.user.introduction=s,this.user.avatar=a,this.user.cover=r},refresh:function(){var e=this.$route.params.id;this.fetchUser({userId:e}),this.fetchLike({userId:e})}}},E=j,P=(s("2073"),Object(b["a"])(E,a,r,!1,null,"e6e59d7a",null));t["default"]=P.exports},2073:function(e,t,s){"use strict";s("7c1a")},"7c1a":function(e,t,s){},"7ea5":function(e,t,s){},"88c8":function(e,t,s){"use strict";s("7ea5")},ccb7:function(e,t,s){"use strict";s("ead6")},ead6:function(e,t,s){}}]);
//# sourceMappingURL=chunk-563d9e6f.e7caf5fa.js.map