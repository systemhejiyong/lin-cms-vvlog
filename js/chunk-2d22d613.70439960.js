(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d22d613"],{f6f3:function(n,e,t){"use strict";t.r(e);var r=t("a34a"),a=t.n(r),u=t("dfd8");function c(n,e,t,r,a,u,c){try{var o=n[u](c),s=o.value}catch(n){return void t(n)}o.done?e(s):Promise.resolve(s).then(r,a)}function o(n){return function(){var e=this,t=arguments;return new Promise((function(r,a){var u=n.apply(e,t);function o(n){c(u,r,a,o,s,"next",n)}function s(n){c(u,r,a,o,s,"throw",n)}o(void 0)}))}}function s(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var i=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,r,c,i,p,f,l;return e=n,(t=[{key:"addChannel",value:(l=o(a.a.mark((function n(e){var t;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(u.post)("v1/channel",e);case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)}))),function(n){return l.apply(this,arguments)})},{key:"getChannel",value:(f=o(a.a.mark((function n(e){var t;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(u.get)("v1/channel/".concat(e));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)}))),function(n){return f.apply(this,arguments)})},{key:"editChannel",value:(p=o(a.a.mark((function n(e,t){var r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(u.put)("v1/channel/".concat(e),t);case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)}))),function(n,e){return p.apply(this,arguments)})},{key:"deleteChannel",value:(i=o(a.a.mark((function n(e){var t;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(u._delete)("v1/channel/".concat(e));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)}))),function(n){return i.apply(this,arguments)})},{key:"getChannels",value:(c=o(a.a.mark((function n(e){var t;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(u.get)("v1/channel",e);case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)}))),function(n){return c.apply(this,arguments)})}])&&s(e.prototype,t),r&&s(e,r),n}();e.default=new i}}]);