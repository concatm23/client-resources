/* Webpack & Concatenate browser pack tool
 * Source Path:resource-app\script\chat.operation.js
 * Target: node */
/*! For license information please see 3w945pztbi1.js.LICENSE.txt */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(global,(function(){return e={408:function(e){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}var r,n=this;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){"use strict";o=function(){return e};var e={},r=Object.prototype,n=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),s=new E(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return{value:void 0,done:!0}}for(r.method=a,r.arg=o;;){var s=r.delegate;if(s){var i=b(s,r);if(i){if(i===p)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=d(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,s),o}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p={};function f(){}function h(){}function m(){}var g={};u(g,s,(function(){return this}));var v=Object.getPrototypeOf,w=v&&v(v(G([])));w&&w!==r&&n.call(w,s)&&(g=w);var k=m.prototype=f.prototype=Object.create(g);function y(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,r){function a(o,s,i,c){var u=d(e[o],e,s);if("throw"!==u.type){var l=u.arg,p=l.value;return p&&"object"==t(p)&&n.call(p,"__await")?r.resolve(p.__await).then((function(e){a("next",e,i,c)}),(function(e){a("throw",e,i,c)})):r.resolve(p).then((function(e){l.value=e,i(l)}),(function(e){return a("throw",e,i,c)}))}c(u.arg)}var o;this._invoke=function(e,t){function n(){return new r((function(r,n){a(e,t,r,n)}))}return o=o?o.then(n,n):n()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return p;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=d(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,p;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function G(e){if(e){var t=e[s];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:T}}function T(){return{value:void 0,done:!0}}return h.prototype=m,u(k,"constructor",m),u(m,"constructor",h),h.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},y(x.prototype),u(x.prototype,i,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var s=new x(l(t,r,n,a),o);return e.isGeneratorFunction(r)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},y(k),u(k,c,"Generator"),u(k,s,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=G,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return s.type="throw",s.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=e,s.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;S(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:G(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},e}function s(e,t,r,n,a,o,s){try{var i=e[o](s),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){s(o,n,a,i,c,"next",e)}function c(e){s(o,n,a,i,c,"throw",e)}i(void 0)}))}}var c=location.search.substring(1),u=(fRequire("../script/message.js"),fRequire("../lib/prompt.js"));sdk.once("ui-back-page",(function(){parent.document.querySelector(".group-frame").style.display="none"}));var l=fRequire("../lib/msg.js"),d=fRequire("../script/groups.syncMessage.js");i(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=JSON,e.next=3,sdk.fs.read("usr");case 3:return e.t1=e.sent,sessionStorage.username=e.t0.parse.call(e.t0,e.t1).username,e.t2=JSON,e.next=8,sdk.fs.read("usr");case 8:e.t3=e.sent,sessionStorage.user_token=e.t2.parse.call(e.t2,e.t3).token;case 10:case"end":return e.stop()}}),e)})))(),sdk.on("send-msg",function(){var e=i(o().mark((function e(t){var r,a,s,i,u,d,f,h,g,v,w,k,x=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=x.length>1&&void 0!==x[1]&&x[1],a=function(){return sessionStorage["sync-msg-"+c]="finished"},(s=new sdk.common.logger("Message Send/Thread")).info("Content=",t,"isAnonymous=",r),!(t.length<5)){e.next=8;break}return s.info("min limit"),a(),e.abrupt("return",l.tellUser("@{chat.message_min_limit}",l.MSG_WARN));case 8:if(!(t.length>1e3)){e.next=13;break}return s.info("max limit"),a(),e.abrupt("return",l.tellUser("@{chat.message_max_limit}",l.MSG_WARN));case 13:return i=(new Date).getTime()+"[tmp]",u=sessionStorage.username,d=sessionStorage.uid,e.next=19,sdk.getClientIp();case 19:return f=e.sent.ip,r&&(u="anonymous_user",d=2,f="0.0.0.0"),s.info("Temp cursor",i),window.chat_msg_lists.push({index:window.chat_msg_lists.length,cursor:i,uid:d,username:u,status:p.MSG_SENDING,timestamp:(new Date).getTime(),ip:f,content:t,location:"Unknown"}),D(),h=window.chat_msg_lists.length-1,e.t0=requestIdleCallback,e.t1=m,e.t2=n,e.next=31,sdk.getClientIp();case 31:return e.t3=e.sent.ip,e.t4={ip:e.t3},e.t5=window.chat_msg_lists,e.t6=h,e.t7=e.t1.bind.call(e.t1,e.t2,e.t4,e.t5,e.t6),(0,e.t0)(e.t7),requestIdleCallback(y.bind(n,sessionStorage.uid,h)),g=sdk.local.do("msg.insert",{group_id:c,cType:0,content:t,username:u,uid:d,status:p.MSG_SENDING,cursor:i,ts:(new Date).getTime(),ip:f,is_received:0}),e.next=41,sdk.remote.do("msg.send",{msg:t,anonymous:r,token:sessionStorage.user_token,group_id:c,ip:f});case 41:return e.next=43,e.sent.json();case 43:if(v=e.sent,s.info("Server response",v),"success"!==v.status){e.next=58;break}return w=v.data.msg_id,e.next=49,g;case 49:return e.next=51,sdk.local.do("msg.update",{group_id:c,location:i,cursor:w,timestamp:parseInt(w),status:p.MSG_SENDED});case 51:return window.chat_msg_lists[h].status=p.MSG_SENDED,window.chat_msg_lists[h].cursor=w,e.next=55,sdk.chatWs.send(c,{cType:0,cursor:w,sender:u,sender_uid:d,msg:t,ip:f});case 55:a(),e.next=59;break;case 58:if("failure"===v.status){try{k=JSON.parse(v.data.source_return).data}catch(e){k=v.data.source_return}a(),"You have no permission to send message."===k?l.tellUser("@{chat.no_permission_to_send_message}",l.MSG_ERROR):"You are not in the group."===k?l.tellUser("@{chat.not_in_group}",l.MSG_ERROR):"You have no permission to send anonymous message."===k?l.tellUser("@{chat.no_permission_to_send_anonymous_message}"):sdk.throwFatalError("Server responded with error\n"+k)}case 59:case 60:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var p={MSG_SENDING:1,MSG_SENDED:2,MSG_RECEIVED:4,MSG_OTHER_SENDED:8,MSG_OTHER_DELETED:16,MSG_EXPIRED:32,MSG_SEND_ERROR:64};Array.prototype.unique=function(){return Array.from(new Set(this))},sdk.on("invite-member",i(o().mark((function e(){var t,r,n,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(translation.translate("@{chat.input_uid_or_username}"));case 2:if(null!==(t=e.sent)&&""!==t){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,sdk.remote.do("usr.getinfo",{uid:t});case 7:return e.next=9,e.sent.json();case 9:if("success"!==(r=e.sent).status){e.next=26;break}return n=r.data.uid,e.next=14,sdk.remote.do("group.invite",{token:sessionStorage.user_token,groupID:c,inviteUser:n});case 14:return e.next=16,e.sent.json();case 16:if("success"!==(a=e.sent).status){e.next=23;break}return e.next=20,sdk.chatWs.send(c,{cType:0,cursor:(new Date).getTime(),sender:"concatenate",sender_uid:0,msg:"".concat(sessionStorage.username," invited ").concat(r.data.username," to join the group."),ip:"0.0.0.0"});case 20:setTimeout(i(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(c);case 2:location.reload();case 3:case"end":return e.stop()}}),e)}))),2e3),e.next=24;break;case 23:alert(JSON.parse(a.data.source_return).data);case 24:e.next=27;break;case 26:alert(r.data);case 27:case"end":return e.stop()}}),e)})))),sdk.on("kick-member",i(o().mark((function e(){var t,r,n,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(translation.translate("@{chat.input_uid_or_username}"));case 2:if(null!==(t=e.sent)&&""!==t){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,sdk.remote.do("usr.getinfo",{uid:t});case 7:return e.next=9,e.sent.json();case 9:if("success"!==(r=e.sent).status){e.next=26;break}return n=r.data.uid,e.next=14,sdk.remote.do("group.kick",{token:sessionStorage.user_token,groupID:c,kickUser:n});case 14:return e.next=16,e.sent.json();case 16:if("success"!==(a=e.sent).status){e.next=23;break}return e.next=20,sdk.chatWs.send(c,{cType:0,cursor:(new Date).getTime(),sender:"concatenate",sender_uid:0,msg:"".concat(sessionStorage.username," kicked ").concat(r.data.username),ip:"0.0.0.0"});case 20:setTimeout(i(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(c);case 2:location.reload();case 3:case"end":return e.stop()}}),e)}))),2e3),e.next=24;break;case 23:alert(JSON.parse(a.data.source_return).data);case 24:e.next=27;break;case 26:alert(r.data);case 27:case"end":return e.stop()}}),e)})))),sdk.on("edit-alias",i(o().mark((function e(){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(translation.translate("@{chat.input_alias}"));case 2:if(null!==(t=e.sent)){e.next=5;break}return e.abrupt("return");case 5:if(!(t.length>20)){e.next=7;break}return e.abrupt("return",l.tellUser("@{groups.alias_at_most_20}"));case 7:if(!(t.length<2)){e.next=9;break}return e.abrupt("return",l.tellUser("@{groups.alias_at_least_2}"));case 9:return e.next=11,sdk.remote.do("group.update",{type:"alias",value:t,groupID:c,token:sessionStorage.user_token});case 11:return e.t0=JSON,e.next=14,sdk.local.do("webcache.get",{key:"group-"+c});case 14:return e.next=16,e.sent.text();case 16:if(e.t1=e.sent,e.t1){e.next=19;break}e.t1="{}";case 19:return e.t2=e.t1,(r=e.t0.parse.call(e.t0,e.t2)).name=t,e.next=24,sdk.local.do("webcache.set",{key:"group-"+c,value:JSON.stringify(r)});case 24:return sessionStorage.setItem("group-alias-"+c,t),e.next=27,sdk.chatWs.send(c,{cType:0,cursor:(new Date).getTime(),sender:"concatenate",sender_uid:0,msg:"".concat(sessionStorage.username,' edited alias to "').concat(t,'"'),ip:"0.0.0.0"});case 27:setTimeout(i(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(c);case 2:location.reload();case 3:case"end":return e.stop()}}),e)}))),2e3);case 28:case"end":return e.stop()}}),e)})))),sdk.chatWs.connect(),sdk.on("msg-"+c,function(){var e=i(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=window.chat_msg_lists.length,window.chat_msg_lists.push({index:r,cursor:t.cursor,uid:t.sender_uid,username:t.sender,status:p.MSG_OTHER_SENDED&p.MSG_RECEIVED,timestamp:parseInt(t.cursor)||(new Date).getTime(),content:t.msg,ip:t.ip,location:"Unknown"}),requestIdleCallback(m.bind(n,window.chat_msg_lists[window.chat_msg_lists.length-1],window.chat_msg_lists,r)),requestIdleCallback(y.bind(n,t.sender_uid,r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var f=function(e){return new Promise((function(t,r){return setTimeout(t,e)}))},h=new Set,m=function(){var e=i(o().mark((function e(t,r,n){var a,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a=new sdk.common.logger("Update IP/Client")).info("Get info for",t.ip),"0.0.0.0"!==t.ip){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,sdk.local.do("webcache.get",{key:"ip/"+t.ip});case 6:return e.next=8,e.sent.text();case 8:if("error"!==(s=e.sent)){e.next=11;break}return e.abrupt("return");case 11:if(!s){e.next=14;break}return r[n].location=s,e.abrupt("return");case 14:case 15:if(!h.has("ip-"+t.ip)){e.next=20;break}return e.next=18,f(200);case 18:e.next=15;break;case 20:return h.add("ip-"+t.ip),e.next=24,sdk.remote.do("ip.get",{ip:t.ip});case 24:return e.next=26,e.sent.json();case 26:s=e.sent,a.info("Get remote ip info from server",s),s="success"===s.status&&s.data&&void 0!==s.data.country?[s.data.city,s.data.state,s.data.country].filter(Boolean).unique().join(", "):"error",r[n].location=s,sdk.local.do("webcache.set",{key:"ip/"+t.ip,value:s,expires_at:(new Date).getTime()+0xf70f0f0e18}),h.delete("ip-"+t.ip);case 32:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),g=fRequire("../lib/dataurl2blob.js"),v={},w=function(){document.querySelectorAll(".message-avatar").forEach((function(e,t){e.src.includes("unknown.png")&&requestIdleCallback(y.bind(n,~~e.getAttribute("data-sender"),t))}))},k=function e(t){var r=new sdk.common.logger("Get avatar link");return new Promise(function(){var n=i(o().mark((function n(a,s){var c,u,l,d,p,m,w;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!v[t]){n.next=4;break}return r.info(v[t],"for user",t),a(v[t]),n.abrupt("return");case 4:return n.next=7,sdk.local.do("webcache.get",{key:"avatar-cache-user-"+t});case 7:return n.next=9,n.sent.text();case 9:if("error"===(c=n.sent)&&a(""),""!==c){n.next=47;break}case 12:if(!h.has("request-avatar-"+t)){n.next=17;break}return n.next=15,f(2e3);case 15:n.next=12;break;case 17:return h.add("request-avatar-"+t),n.next=21,fetch("https://download-concatenate.deta.dev/user-avatar/".concat(t));case 21:if(!(u=n.sent).ok){n.next=31;break}return n.next=25,u.blob();case 25:l=n.sent,(d=new FileReader).readAsDataURL(l),d.onload=i(o().mark((function r(){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,sdk.local.do("webcache.set",{key:"avatar-cache-user-"+t,value:d.result,expires_at:(new Date).getTime()+12096e5});case 2:return h.delete("request-avatar-"+t),r.t0=a,r.next=6,e(t);case 6:r.t1=r.sent,(0,r.t0)(r.t1);case 8:case"end":return r.stop()}}),r)}))),n.next=44;break;case 31:return n.next=33,sdk.local.do("webcache.get",{key:"avatar-cache-group-1"});case 33:return n.next=35,n.sent.text();case 35:return p=n.sent,n.next=38,sdk.local.do("webcache.set",{key:"avatar-cache-user-"+t,value:p||"error",expires_at:(new Date).getTime()+2592e5});case 38:return h.delete("request-avatar-"+t),n.t0=a,n.next=42,e(t);case 42:n.t1=n.sent,(0,n.t0)(n.t1);case 44:n.next=55;break;case 47:return m=g(c),w=window.URL.createObjectURL(m),v[t]=w,n.t2=a,n.next=53,e(t);case 53:n.t3=n.sent,(0,n.t2)(n.t3);case 55:case 56:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}())},y=function(){var e=i(o().mark((function e(t,r){var n,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new sdk.common.logger("Chat Operation/Thread")).info("Loading avatar for user "+t),e.next=4,k(t);case 4:if(a=e.sent){e.next=7;break}return e.abrupt("return");case 7:n.info("Generating avatar blob url ",a,"for user",t),document.querySelectorAll(".message-avatar")[r].src=a;case 9:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),x=function(){var e=i(o().mark((function e(){var t,r,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!1,e.next=3,sdk.local.do("webcache.get",{key:"group-"+c});case 3:return e.next=5,e.sent.json();case 5:r=e.sent,(n=j(r))===T&&(t=!0),n===G&&r.permission.admin.allowAnonymous&&(t=!0),n===E&&r.permission.default.allowAnonymous&&(t=!0),window.inputAreaVue.state.isBannedAnonymous=!t,console.log("%c Note for hackers","background-color: black; color: #00ff00;"),console.log("%c If you want use debugger to hack some permissions, I suggest you giving up.","background-color: black; color: #00ff00;"),console.log("%c We have permissions detect in server, and in client it's only convenient for user.","background-color: black; color: #00ff00;");case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=i(o().mark((function e(){var t,r,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!1,e.next=3,sdk.local.do("webcache.get",{key:"group-"+c});case 3:return e.next=5,e.sent.json();case 5:r=e.sent,(n=j(r))===T&&(t=!0),n===G&&r.permission.admin.invite&&(t=!0),n===E&&r.permission.default.invite&&(t=!0),window.inputAreaVue.state.isCouldInviteMember=t;case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=i(o().mark((function e(){var t,r,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!1,e.next=3,sdk.local.do("webcache.get",{key:"group-"+c});case 3:return e.next=5,e.sent.json();case 5:r=e.sent,(n=j(r))===T&&(t=!0),n===G&&r.permission.admin.kick&&(t=!0),n===E&&r.permission.default.kick&&(t=!0),window.inputAreaVue.state.isCouldKickMember=t;case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=i(o().mark((function e(){var t,r,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!1,e.next=3,sdk.local.do("webcache.get",{key:"group-"+c});case 3:return e.next=5,e.sent.json();case 5:r=e.sent,(n=j(r))===T&&(t=!0),n===G&&r.permission.admin.editGroupAlias&&(t=!0),n===E&&r.permission.default.editGroupAlias&&(t=!0),window.inputAreaVue.state.isCouldEditAlias=t;case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=1,G=2,T=4;function j(e){var t=~~sessionStorage.uid;return t===e.permission.manager?T:e.permission.admins.includes(t)?G:E}var D=function(){document.querySelector(".end-sentinel").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})};e.exports=(a(r={getAllMessages:function(){return new Promise((function(e,t){sdk.local.do("msg.query",{group_id:c,timestamp:0}).then((function(e){return e.json()})).then((function(t){return e(t)}))}))},convertDatabaseRecordToRenderView:function(e){return new Promise((function(t,r){var a=[];e.forEach((function(e,t){a.push({index:t,cursor:e.cursor,uid:e.uid,username:e.username,status:e.status,timestamp:e.timestamp,ip:e.ip,content:e.content,location:"Unknown"}),requestIdleCallback(m.bind(n,e,a,t))})),window.chat_msg_lists=a,t(a)}))},loadAvatars:w,detectAllowAnonymous:x,detectAllowInviteMember:b,detectAllowKickMember:_,detectAllowEditAlias:S,updateIp:m,getMyPermission:j},"loadAvatars",w),a(r,"loadAvatar",y),a(r,"getAvatarLink",k),a(r,"scrollToBottom",D),a(r,"MSG_STATUS_ENUM",p),r)}},t={},function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}(408);var e,t}));