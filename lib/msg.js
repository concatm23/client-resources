/* Webpack & Concatenate browser pack tool
 * Source Path:resource-app\lib\msg.js
 * Target: node */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var s in n)("object"==typeof exports?exports:e)[s]=n[s]}}(global,(function(){return e={269:function(e){window._msb_messagelistener=[],e.exports={tellUser:function(e,t){void 0!==t&&t||(t=4),function(e,t){var n,s=document.createElement("div");s.style.position="fixed",s.style.width=10*e.length+"px",s.style.height="24px",s.style.top="5px",s.innerHTML="<b>"+e+"</b>",s.style["background-color"]="white",s.style.border="2px dotted "+[,"#32cd32","#f0e68c","#ff0000","#00bfff"][t],s.style["border-radius"]="10px",s.style["font-size"]="0.8em",s.style["text-align"]="center",s.style.opacity=.8,s.style.right="2px",s.style.color="rgb(0,0,0)",s.className="msgBox",setTimeout((function(){var e;document.body.removeChild(s),e=func_id,window._msb_messagelistener.splice(e,1)}),1e4);for(var o=0;o<_msb_messagelistener.length;o++)_msb_messagelistener[o]();if(_msb_messagelistener.length)setTimeout((function(){document.body.appendChild(s);var e=setInterval((function(){s.style.top=parseInt(s.style.top)+1+"px"}),40);setTimeout((function(){clearInterval(e)}),1e3)}),1080);else{document.body.appendChild(s);var r=setInterval((function(){s.style.top=parseInt(s.style.top)+1+"px"}),40);setTimeout((function(){clearInterval(r)}),1e3)}func_id=(n=function(){var e=setInterval((function(){s.style.top=parseInt(s.style.top)+1+"px"}),25);setTimeout((function(){clearInterval(e)}),1e3)},window._msb_messagelistener.push(n),window._msb_messagelistener.length-1)}(e=translation.translate(e),t)},MSG_SUCCESS:1,MSG_WARN:2,MSG_ERROR:3,MSG_INFO:4}}},t={},function n(s){var o=t[s];if(void 0!==o)return o.exports;var r=t[s]={exports:{}};return e[s](r,r.exports,n),r.exports}(269);var e,t}));