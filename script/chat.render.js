/* Webpack & Concatenate browser pack tool
 * Source Path:resource-app\script\chat.render.js
 * Target: node */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var s in n)("object"==typeof exports?exports:e)[s]=n[s]}}(global,(function(){return e={612:function(e){var t=location.search.substring(1),n=new sdk.common.logger("Chat/Render Thread"),s=sessionStorage.getItem("sync-msg-"+t)||"null";e.exports={renderTitle:function(){var e=new Vue({el:".title",data:{data:{title:sessionStorage.getItem("group-alias-"+t),status:""}},methods:{back_page:function(){sdk.publish("ui-back-page")},refresh:function(){var e=this;this.refresh=!1,this.$nextTick((function(){e.refresh=!0}))},updateStatus:function(){var e,i=sessionStorage.getItem("sync-msg-"+t)||"null",o=null!==(e={null:"@{chat.syncing_chat_history_waiting_queue}",pending:"@{chat.syncing_chat_history}",sending:"@{chat.sending_message}",finished:""}[i])&&void 0!==e?e:"Unknown Status";this.data.status=o,"pending"!==s&&"null"!==s||"finished"!==i||(n.info(s,i,"reload the page"),location.reload()),document.querySelector(".group-status").innerText=translation.translate(o)}},mounted:function(){var e=this;window.refreshTitle=this.refresh,requestAnimationFrame((function t(){setTimeout(e.updateStatus,0),requestAnimationFrame(t)}))}});window.titleVue=e,translation.translateElement(".title"),document.querySelector(".back-icon").addEventListener("click",(function(){sdk.publish("ui-back-page")}))},renderInputArea:function(){window.inputAreaVue=new Vue({el:".operations",data:{content:"",state:{isSyncingMessage:"finished"!==sessionStorage["sync-msg-"+t],isBannedAnonymous:!0,isChattingAnonymous:!1,isCouldInviteMember:!1,isCouldKickMember:!1,isCouldEditAlias:!1}},methods:{clear_content:function(){this.content=""},send_msg:function(){sessionStorage["sync-msg-"+t]="sending",sdk.publish("send-msg",this.content,this.state.isChattingAnonymous),this.clear_content()},delete_msg:function(){console.log("Delete message")},refreshSyncingState:function(){this.state.isSyncingMessage="finished"!==sessionStorage["sync-msg-"+t]},invite_member:function(){sdk.publish("invite-member")},kick_member:function(){sdk.publish("kick-member")},edit_alias:function(){sdk.publish("edit-alias")}},mounted:function(){var e=this;setInterval((function(){e.refreshSyncingState()}),50)}})},renderMessage:function(e){window.messageAreaVue=new Vue({el:".messages",data:{show_msgs:e},methods:{download_avatar:function(e){var t=document.createElement("a");t.href=e.target.src,t.download=translation.translate("@{dict.avatar}"),t.click()}}}),sdk.publish("chat-page-loaded")}}}},t={},function n(s){var i=t[s];if(void 0!==i)return i.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,n),o.exports}(612);var e,t}));