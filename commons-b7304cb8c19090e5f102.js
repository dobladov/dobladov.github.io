(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([[351],{523:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var l,c,s,u;if(Array.isArray(e)){if((l=e.length)!=a.length)return!1;for(c=l;0!=c--;)if(!i(e[c],a[c]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!a.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!i(c.value[1],a.get(c.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((l=e.length)!=a.length)return!1;for(c=l;0!=c--;)if(e[c]!==a[c])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((l=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(c=l;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,s[c]))return!1;if(t&&e instanceof Element)return!1;for(c=l;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!e.$$typeof)&&!i(e[s[c]],a[s[c]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},1803:function(e,t,r){"use strict";var n=r(7294);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=(0,n.forwardRef)((function(e,t){var r=e.color,a=void 0===r?"currentColor":r,l=e.size,c=void 0===l?24:l,s=i(e,["color","size"]);return n.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),n.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),n.createElement("polyline",{points:"22,6 12,13 2,6"}))}));a.displayName="Mail",t.Z=a},5186:function(e,t,r){"use strict";r.d(t,{q:function(){return ye}});var n,o,i,a,l=r(5697),c=r.n(l),s=r(6124),u=r.n(s),f=r(523),p=r.n(f),d=r(7294),h=r(4756),y=r.n(h),m="bodyAttributes",g="htmlAttributes",v="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(b).map((function(e){return b[e]})),"charset"),O="cssText",k="href",x="http-equiv",T="innerHTML",E="itemprop",j="name",C="property",S="rel",A="src",P="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",Z="defer",I="encodeSpecialCharacters",N="onChangeClientState",z="titleTemplate",B=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),R=[b.NOSCRIPT,b.SCRIPT,b.STYLE],_="data-react-helmet",D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},W=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},U=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},F=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Y=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=J(e,b.TITLE),r=J(e,z);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=J(e,M);return t||n||void 0},V=function(e){return J(e,N)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return q({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[b.BASE]})).map((function(e){return e[b.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},$=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var l=i[a],c=l.toLowerCase();-1===t.indexOf(c)||r===S&&"canonical"===e[r].toLowerCase()||c===S&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(l)||l!==T&&l!==O&&l!==E||(r=l)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var l=i[a],c=y()({},n[l],o[l]);n[l]=c}return e}),[]).reverse()},J=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},X=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:r.g.requestAnimationFrame||X,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,p=e.titleAttributes;ce(b.BODY,n),ce(b.HTML,o),le(f,p);var d={baseTag:se(b.BASE,r),linkTags:se(b.LINK,i),metaTags:se(b.META,a),noscriptTags:se(b.NOSCRIPT,l),scriptTags:se(b.SCRIPT,s),styleTags:se(b.STYLE,u)},h={},y={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(h[e]=r),n.length&&(y[e]=d[e].oldTags)})),t&&t(),c(e,h,y)},ae=function(e){return Array.isArray(e)?e.join(""):e},le=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ce(b.TITLE,t)},ce=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(_),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),l=0;l<a.length;l++){var c=a[l],s=t[c]||"";r.getAttribute(c)!==s&&r.setAttribute(c,s),-1===o.indexOf(c)&&o.push(c);var u=i.indexOf(c);-1!==u&&i.splice(u,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute(_):r.getAttribute(_)!==a.join(",")&&r.setAttribute(_,a.join(","))}},se=function(e,t){var r=document.head||document.querySelector(b.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===T)r.innerHTML=t.innerHTML;else if(n===O)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[n]?"":t[n];r.setAttribute(n,l)}r.setAttribute(_,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[L[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case b.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[_]=!0,o=fe(r,n),[d.createElement(b.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=ue(r),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+Y(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Y(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case m:case g:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[_]=!0,n);return Object.keys(t).forEach((function(e){var r=L[e]||e;if(r===T||r===O){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),d.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===T||e===O)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+Y(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},de=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,l=e.noscriptTags,c=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,p=e.titleAttributes;return{base:pe(b.BASE,t,n),bodyAttributes:pe(m,r,n),htmlAttributes:pe(g,o,n),link:pe(b.LINK,i,n),meta:pe(b.META,a,n),noscript:pe(b.NOSCRIPT,l,n),script:pe(b.SCRIPT,c,n),style:pe(b.STYLE,s,n),title:pe(b.TITLE,{title:f,titleAttributes:p},n)}},he=u()((function(e){return{baseTag:Q([k,P],e),bodyAttributes:G(m,e),defer:J(e,Z),encode:J(e,I),htmlAttributes:G(g,e),linkTags:$(b.LINK,[S,k],e),metaTags:$(b.META,[j,w,x,C,E],e),noscriptTags:$(b.NOSCRIPT,[T],e),onChangeClientState:V(e),scriptTags:$(b.SCRIPT,[A,T],e),styleTags:$(b.STYLE,[O],e),title:K(e),titleAttributes:G(v,e)}}),(function(e){oe&&re(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),de)((function(){return null})),ye=(o=he,a=i=function(e){function t(){return H(this,t),F(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:t};case b.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return q({},n,((t={})[r.type]=[].concat(n[r.type]||[],[q({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case b.TITLE:return q({},o,((t={})[n.type]=a,t.titleAttributes=q({},i),t));case b.BODY:return q({},o,{bodyAttributes:q({},i)});case b.HTML:return q({},o,{htmlAttributes:q({},i)})}return q({},o,((r={})[n.type]=q({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=q({},t);return Object.keys(e).forEach((function(t){var n;r=q({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return d.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[B[r]||r]=e[r],t}),t)}(U(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=U(e,["children"]),n=q({},r);return t&&(n=this.mapChildrenToProps(t,n)),d.createElement(o,n)},W(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(d.Component),i.propTypes={base:c().object,bodyAttributes:c().object,children:c().oneOfType([c().arrayOf(c().node),c().node]),defaultTitle:c().string,defer:c().bool,encodeSpecialCharacters:c().bool,htmlAttributes:c().object,link:c().arrayOf(c().object),meta:c().arrayOf(c().object),noscript:c().arrayOf(c().object),onChangeClientState:c().func,script:c().arrayOf(c().object),style:c().arrayOf(c().object),title:c().string,titleAttributes:c().object,titleTemplate:c().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);ye.renderStatic=ye.rewind},6124:function(e,t,r){"use strict";var n,o=r(7294),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function u(){c=e(s.map((function(e){return e.props}))),f.canUseDOM?t(c):r&&(c=r(c))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(f,"canUseDOM",l),f}}},5595:function(e,t,r){"use strict";r.d(t,{Z:function(){return V}});var n=r(7294),o=r(5186),i=r(5444),a=r(9846),l=function(){var e=JSON.parse(localStorage.getItem("darkMode"));return!0===e||null===e&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches},c=r.p+"static/cartographer-b61fd20e5623c2eab10588ce5a4a6f85.png",s=r.p+"static/white-waves-1d00fb570b17d36be47a855dbe86eb24.png";function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=(0,n.forwardRef)((function(e,t){var r=e.color,o=void 0===r?"currentColor":r,i=e.size,a=void 0===i?24:i,l=f(e,["color","size"]);return n.createElement("svg",u({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.createElement("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}))}));p.displayName="Twitter";var d=p;function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=(0,n.forwardRef)((function(e,t){var r=e.color,o=void 0===r?"currentColor":r,i=e.size,a=void 0===i?24:i,l=y(e,["color","size"]);return n.createElement("svg",h({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.createElement("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}))}));m.displayName="GitHub";var g=m;function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var w=(0,n.forwardRef)((function(e,t){var r=e.color,o=void 0===r?"currentColor":r,i=e.size,a=void 0===i?24:i,l=b(e,["color","size"]);return n.createElement("svg",v({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.createElement("polygon",{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"}),n.createElement("line",{x1:"12",y1:"22",x2:"12",y2:"15.5"}),n.createElement("polyline",{points:"22 8.5 12 15.5 2 8.5"}),n.createElement("polyline",{points:"2 15.5 12 8.5 22 15.5"}),n.createElement("line",{x1:"12",y1:"2",x2:"12",y2:"8.5"}))}));w.displayName="Codepen";var O=w,k=r(1803);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function T(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var E=(0,n.forwardRef)((function(e,t){var r=e.color,o=void 0===r?"currentColor":r,i=e.size,a=void 0===i?24:i,l=T(e,["color","size"]);return n.createElement("svg",x({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.createElement("path",{d:"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"}))}));E.displayName="Key";var j=E;function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var A=(0,n.forwardRef)((function(e,t){var r=e.color,o=void 0===r?"currentColor":r,i=e.size,a=void 0===i?24:i,l=S(e,["color","size"]);return n.createElement("svg",C({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.createElement("path",{d:"M4 11a9 9 0 0 1 9 9"}),n.createElement("path",{d:"M4 4a16 16 0 0 1 16 16"}),n.createElement("circle",{cx:"5",cy:"19",r:"1"}))}));A.displayName="Rss";var P=A;function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var Z=(0,n.forwardRef)((function(e,t){var r=e.color,o=void 0===r?"currentColor":r,i=e.size,a=void 0===i?24:i,l=M(e,["color","size"]);return n.createElement("svg",L({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.createElement("circle",{cx:"12",cy:"12",r:"5"}),n.createElement("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),n.createElement("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),n.createElement("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),n.createElement("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),n.createElement("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),n.createElement("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),n.createElement("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),n.createElement("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"}))}));Z.displayName="Sun";var I=Z;function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function z(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var B=(0,n.forwardRef)((function(e,t){var r=e.color,o=void 0===r?"currentColor":r,i=e.size,a=void 0===i?24:i,l=z(e,["color","size"]);return n.createElement("svg",N({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.createElement("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}))}));B.displayName="Moon";var R=B,_=r(6630),D=r.n(_),H=r(9134),W=r.n(H);var q={name:"at121d",styles:"padding:20px 40px;font-family:'Text Me One',sans-serif;align-items:center;h1{flex:1;margin:0;display:flex;align-items:center;a{color:var(--text);}}.mainNav{ul{list-style-type:none;display:flex;flex-wrap:wrap;font-size:1.2rem;padding:0;align-items:center;svg{top:6px;position:relative;}.darkModeBtn{border:none;background-color:transparent;color:var(--text);&:hover{color:var(--contrast);}}a{font-weight:bold;padding:10px;position:relative;&.active{color:var(--contrast);text-decoration:none;}}li{margin-bottom:10px;}li:first-child a{padding-left:0;}}}@media (min-width: 900px){display:flex;.mainNav ul{li:first-child a{padding-left:10px;}}}"},U=function(e){var t=e.siteTitle,r=(0,n.useState)(!1),o=r[0],c=r[1];return(0,n.useEffect)((function(){c(l())}),[]),(0,a.tZ)("header",{css:q},(0,a.tZ)("h1",{style:{margin:0}},(0,a.tZ)(i.Link,{to:"/",title:"Home",style:{textDecoration:"none"}},t)),(0,a.tZ)("nav",{className:"mainNav"},(0,a.tZ)("ul",{role:"navigation"},(0,a.tZ)("li",null,(0,a.tZ)(i.Link,{activeClassName:"active",title:"Blog Articles",to:"/blog"},"Articles")),(0,a.tZ)("li",null,(0,a.tZ)(i.Link,{activeClassName:"active",title:"Personal Projects",to:"/projects"},"Projects")),(0,a.tZ)("li",null,(0,a.tZ)("a",{title:"Twitter @odysseycodes",target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/odysseycodes"},(0,a.tZ)(d,null))),(0,a.tZ)("li",null,(0,a.tZ)("a",{title:"My repositories on GitHub",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/dobladov"},(0,a.tZ)(g,null))),(0,a.tZ)("li",null,(0,a.tZ)("a",{title:"Mostly layouts and concepts at CodePen",target:"_blank",rel:"noopener noreferrer",href:"https://codepen.io/dobladov"},(0,a.tZ)(O,null))),(0,a.tZ)("li",null,(0,a.tZ)("a",{title:"Data visualizations at ObservableHQ",target:"_blank",rel:"noopener noreferrer",href:"https://observablehq.com/@dobladov"},(0,a.tZ)(D(),null))),(0,a.tZ)("li",null,(0,a.tZ)("a",{title:"Helping other developers in Stack Overflow",target:"_blank",rel:"noopener noreferrer",href:"https://stackoverflow.com/users/2498992/daniel-doblado"},(0,a.tZ)(W(),null))),(0,a.tZ)("li",null,(0,a.tZ)("a",{title:"E-Mail danieldoblado@gmail.com",href:"mailto:danieldoblado@gmail.com"},(0,a.tZ)(k.Z,null))),(0,a.tZ)("li",null,(0,a.tZ)("a",{title:"PGP public key: B16C 9712 C6A2 468C ABA4  99BB 9652 C300 6A47 AC0B",href:"/public.pgp"},(0,a.tZ)(j,null))),(0,a.tZ)("li",null,(0,a.tZ)("a",{title:"Follow my blog articles",href:"/rss.xml"},(0,a.tZ)(P,null))),(0,a.tZ)("li",{className:"noScript"},(0,a.tZ)("button",{"aria-label":"Toggle dark theme",className:"darkModeBtn",title:o?"Use light theme":"Use dark theme",onClick:function(){o?document.body.classList.remove("dark"):document.body.classList.add("dark"),localStorage.setItem("darkMode",!o),c(!o)}},o?(0,a.tZ)(I,null):(0,a.tZ)(R,null))))))};U.defaultProps={siteTitle:""};var F=U;var Y=(0,a.iv)(':root{--main-bg:hsl(0, 0%, 96%);--main-bg-contrast:hsl(0, 0%, 94%);--text:hsl(0, 0%, 24%);--contrast:hsl(154, 45%, 48%);--important:hsl(5, 83%, 64%);--subtle:hsl(0, 0%, 40.8%);}::selection{background-color:var(--contrast);color:white;}html{box-sizing:border-box;}*,*:before,*:after{box-sizing:inherit;}body{background-color:var(--main-bg);color:var(--text);font-size:calc(14px + 0.25vw);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;line-height:1.6;font-weight:300;background-image:url(',s,");background-attachment:fixed;&.dark{--main-bg:hsl(0, 0%, 4%);--main-bg-contrast:hsl(0, 0%, 7%);--text:hsl(0, 0%, 100%);background-image:url(",c,');}}a{font-weight:400;color:var(--text);text-decoration-color:var(--contrast);text-decoration-thickness:4px;text-decoration-skip-ink:none;&:hover{color:var(--contrast);}}.unstyledList{margin:0;padding:0;list-style-type:none;}blockquote{position:relative;font-style:italic;font-size:1.6rem;&::before{content:"";display:block;position:absolute;width:3px;height:100%;background-color:var(--contrast);left:-15px;top:0;}}.hljs{border-radius:5px;font-size:calc(14px + 0.25vw);}.title{font-size:5em;line-height:5.3rem;font-weight:200;margin-top:0;font-family:\'Text Me One\',sans-serif;grid-area:title;margin:0;display:flex;align-items:center;margin-bottom:20px;svg{margin-right:20px;}}.double{display:grid;grid-template-areas:"title title" "article side";grid-template-columns:minmax(200px, 2.5fr) minmax(auto, 1fr);grid-row-gap:20px;grid-column-gap:60px;.content{max-width:1000px;grid-area:article;font-size:1.4rem;}aside{grid-area:side;.noLinksDecoration a{text-decoration:none;}}}pre{word-wrap:break-word;}@media (max-width: 900px){.double{display:block;.title{word-wrap:break-word;font-size:3rem;line-height:3.4rem;}}aside{margin-top:50px;}}',""),K={name:"ixamo1",styles:"main{padding:10px 40px;}@media (min-width: 900px){main{padding:40px 80px;}}"},V=function(e){var t=e.children,r=e.className,s=e.wrapperStyle,u=(0,i.useStaticQuery)("3649515864");return(0,n.useEffect)((function(){l()&&document.body.classList.add("dark")}),[]),(0,a.tZ)("div",{className:r},(0,a.tZ)(a.xB,{styles:Y}),(0,a.tZ)(F,{siteTitle:u.site.siteMetadata.title}),(0,a.tZ)("div",{css:[K,s,"",""]},(0,a.tZ)("noscript",null,(0,a.tZ)("style",null,"\n              .noScript {\n                display: none;\n              }\n\n              @media (prefers-color-scheme: dark) {\n                body {\n                  --main-bg: hsl(0, 0%, 1%);\n                  --main-bg-contrast: hsl(0, 0%, 6%);\n                  --text: hsl(0, 0%, 100%);\n                  background-image: url("+c+");\n                }\n              }\n            ")),(0,a.tZ)("main",null,t),(0,a.tZ)(o.q,null,(0,a.tZ)("link",{href:"https://fonts.googleapis.com/css?family=Text+Me+One&display=swap",rel:"stylesheet"}))))}},6179:function(e,t,r){"use strict";r(7294);var n=r(5186),o=r(5444),i=r(9846);function a(e){var t=e.description,r=e.lang,a=e.meta,l=e.title,c=(0,o.useStaticQuery)("63159454").site,s=t||c.siteMetadata.description;return(0,i.tZ)(n.q,{htmlAttributes:{lang:r},title:l,titleTemplate:"%s - "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:l},{property:"author",content:c.siteMetadata.author},{property:"generator",content:"Gatsby"},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:s}].concat(a)})}a.defaultProps={lang:"en",meta:[],description:""},t.Z=a},6630:function(e,t,r){var n=r(7294);function o(e){return n.createElement("svg",e,n.createElement("path",{d:"M12.345 18.922c-.962 0-1.795-.21-2.5-.628a4.242 4.242 0 01-1.62-1.707 9 9 0 01-.826-2.284 12.287 12.287 0 01-.262-2.602c0-.692.045-1.354.137-1.985a9.16 9.16 0 01.501-1.925 6.14 6.14 0 01.94-1.695 4.264 4.264 0 011.507-1.168c.621-.3 1.328-.449 2.123-.449.961 0 1.794.21 2.5.628a4.24 4.24 0 011.62 1.707 8.97 8.97 0 01.825 2.284c.175.804.262 1.672.262 2.603a13.914 13.914 0 01-.136 1.984 8.857 8.857 0 01-.512 1.925 6.5 6.5 0 01-.942 1.696c-.375.479-.875.868-1.494 1.167-.621.3-1.329.449-2.123.449zm1.838-5.31a2.66 2.66 0 00.765-1.911c0-.744-.249-1.382-.746-1.912-.499-.53-1.117-.796-1.857-.796-.741 0-1.36.265-1.859.796a2.696 2.696 0 00-.744 1.912c0 .744.249 1.381.746 1.91.498.532 1.117.797 1.857.797.741 0 1.353-.265 1.838-.796zm-1.838 8.92c5.751 0 10.415-4.85 10.415-10.831C22.76 5.718 18.096.869 12.345.869 6.593.869 1.93 5.719 1.93 11.701c0 5.982 4.663 10.831 10.415 10.831z",stroke:"none",fill:"currentColor",strokeWidth:"0"}))}o.defaultProps={width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.exports=o,o.default=o},9134:function(e,t,r){var n=r(7294);function o(e){return n.createElement("svg",e,[n.createElement("style",{id:"style828",key:0}),n.createElement("path",{d:"M15 17.464H7.32",id:"path821",fill:"none",strokeWidth:"2.5",strokeMiterlimit:"4",strokeDasharray:"none",key:1}),n.createElement("path",{d:"M15.173 14.858L7.65 13.31",id:"path823",fill:"none",strokeWidth:"2.5",strokeMiterlimit:"4",strokeDasharray:"none",key:2}),n.createElement("path",{d:"M16.007 12.319L8.975 9.234",id:"path825",fill:"none",fillOpacity:"1",strokeWidth:"2.5",strokeMiterlimit:"4",strokeDasharray:"none",key:3}),n.createElement("path",{d:"M17.485 10.06L11.45 5.31",id:"path827",fill:"none",strokeWidth:"2.5",strokeMiterlimit:"4",strokeDasharray:"none",key:4}),n.createElement("path",{d:"M19.475 8.35l-4.693-6.078",id:"path829",fill:"none",strokeWidth:"2.5",strokeMiterlimit:"4",strokeDasharray:"none",key:5}),n.createElement("path",{d:"M3.539 14.69v6.255h15.35v-6.052",id:"path819",fill:"none",strokeWidth:"2.5",strokeMiterlimit:"4",strokeDasharray:"none",key:6}),n.createElement("style",{id:"style888",key:7})])}o.defaultProps={width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",version:"1.1",id:"svg12"},e.exports=o,o.default=o}}]);
//# sourceMappingURL=commons-b7304cb8c19090e5f102.js.map