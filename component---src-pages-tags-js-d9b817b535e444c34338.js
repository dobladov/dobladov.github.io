(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([[159],{6413:function(t,e,r){"use strict";var n=r(7294);function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var o=(0,n.forwardRef)((function(t,e){var r=t.color,o=void 0===r?"currentColor":r,s=t.size,i=void 0===s?24:s,u=l(t,["color","size"]);return n.createElement("svg",a({ref:e,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),n.createElement("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}),n.createElement("line",{x1:"7",y1:"7",x2:"7.01",y2:"7"}))}));o.displayName="Tag",e.Z=o},2041:function(t,e,r){"use strict";var n=r(7294),a=r(5444),l=r(9846);var o={name:"140gpg4",styles:"li{display:inline-block;}"},s=function(t){var e=t.tags,r=t.className;return(0,l.tZ)("ul",{css:o,className:"unstyledList"+(r?" "+r:"")},e.sort((function(t,e){return t.totalCount<e.totalCount})).map((function(t,r){var o=t.tag,s=t.totalCount;return(0,l.tZ)("li",{key:o},"#",(0,l.tZ)(a.Link,{rel:"tag",to:"/tags/"+o},o," (",s,")"),r<e.length-1&&(0,l.tZ)(n.Fragment,null,",  "))})))};s.defaultProps={className:void 0},e.Z=s},1973:function(t,e,r){"use strict";r.r(e);r(7294);var n=r(6413),a=r(6179),l=r(5595),o=r(2041),s=r(9846);e.default=function(t){var e=t.data.allMdx.group;return(0,s.tZ)(l.Z,null,(0,s.tZ)(a.Z,{title:"Blog tags",description:"All tags"}),(0,s.tZ)("section",{className:"double"},(0,s.tZ)("h1",{className:"title"},(0,s.tZ)(n.Z,{width:"50",height:"50","aria-hidden":"true"}),"Blog tags (",e.length,")"),(0,s.tZ)(o.Z,{className:"content",tags:e})))}}}]);
//# sourceMappingURL=component---src-pages-tags-js-d9b817b535e444c34338.js.map