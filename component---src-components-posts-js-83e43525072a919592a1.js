(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"0mN4":function(e,t,r){"use strict";r("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,r){"use strict";r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("EK0E"),r("INYr"),r("0mN4");var n=r("5NKs");t.__esModule=!0,t.default=void 0;var a,i=n(r("v06X")),o=n(r("XEEL")),s=n(r("uDP2")),l=n(r("j8BX")),c=n(r("q1tI")),d=n(r("17x9")),u=function(e){var t=(0,l.default)({},e),r=t.resolutions,n=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=j([].concat(t.fluid))),t.fixed&&(t.fixed=j([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed;return g(t||r).src},g=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},m=Object.create({}),h=function(e){var t=u(e),r=p(t);return m[r]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,O=new WeakMap;function w(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},n&&c.default.createElement("source",{type:"image/webp",media:a,srcSet:n,sizes:i}),c.default.createElement("source",{media:a,srcSet:r,sizes:i}))}))}function j(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function x(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function S(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function E(e,t){var r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?n:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var k=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(O.has(e.target)){var t=O.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),O.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),O.set(e,t)),function(){r.unobserve(e),O.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?E(e,!0):"")+E(e)})).join("")+"<img "+c+o+s+r+n+t+i+a+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=c.default.forwardRef((function(e,t){var r=e.src,n=e.imageVariants,a=e.generateSources,i=e.spreadProps,o=e.ariaHidden,s=c.default.createElement(L,(0,l.default)({ref:t,src:r},i,{ariaHidden:o}));return n.length>1?c.default.createElement("picture",null,a(n),s):s})),L=c.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,a=e.src,i=e.style,o=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,l.default)({"aria-hidden":p,sizes:r,srcSet:n,src:a},g,{onLoad:o,onError:d,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));L.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var P=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=y&&h(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!b&&v&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||y&&(b||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=c.default.createRef(),r.placeholderRef=t.placeholderRef||c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=u(e),r=p(t),m[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=u(this.props),t=e.title,r=e.alt,n=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,O=e.itemProp,j=e.loading,E=e.draggable,k=!1===this.state.fadeIn||this.state.imgLoaded,P=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,l.default)({opacity:k?1:0,transition:P?"opacity "+y+"ms":"none"},s),N="boolean"==typeof b?"lightgray":b,C={transitionDelay:y+"ms"},V=(0,l.default)((0,l.default)((0,l.default)({opacity:this.state.imgLoaded?0:1},P&&C),s),f),F={title:t,alt:this.state.isVisible?"":r,style:V,className:p,itemProp:O};if(m){var T=m,W=g(m);return c.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:W.maxWidth?W.maxWidth+"px":null,maxHeight:W.maxHeight?W.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},c.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),N&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},P&&C)}),W.base64&&c.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:F,imageVariants:T,generateSources:S}),W.tracedSVG&&c.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:F,imageVariants:T,generateSources:x}),this.state.isVisible&&c.default.createElement("picture",null,w(T),c.default.createElement(L,{alt:r,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:O,loading:j,draggable:E})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)((0,l.default)({alt:r,title:t,loading:j},W),{},{imageVariants:T}))}}))}if(h){var q=h,M=g(h),G=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},i);return"inherit"===i.display&&delete G.display,c.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},N&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:N,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},P&&C)}),M.base64&&c.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:F,imageVariants:q,generateSources:S}),M.tracedSVG&&c.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:F,imageVariants:q,generateSources:x}),this.state.isVisible&&c.default.createElement("picture",null,w(q),c.default.createElement(L,{alt:r,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:O,loading:j,draggable:E})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)((0,l.default)({alt:r,title:t,loading:j},M),{},{imageVariants:q}))}}))}return null},t}(c.default.Component);P.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),N=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});P.propTypes={resolutions:z,sizes:N,fixed:d.default.oneOfType([z,d.default.arrayOf(z)]),fluid:d.default.oneOfType([N,d.default.arrayOf(N)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var C=P;t.default=C},"A2+M":function(e,t,r){var n=r("X8hv");e.exports={MDXRenderer:n}},I5cv:function(e,t,r){var n=r("XKFU"),a=r("Kuth"),i=r("2OiF"),o=r("y3w9"),s=r("0/R4"),l=r("eeVq"),c=r("8MEG"),d=(r("dyZX").Reflect||{}).construct,u=l((function(){function e(){}return!(d((function(){}),[],e)instanceof e)})),f=!l((function(){d((function(){}))}));n(n.S+n.F*(u||f),"Reflect",{construct:function(e,t){i(e),o(t);var r=arguments.length<3?e:i(arguments[2]);if(f&&!u)return d(e,t,r);if(e==r){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var n=[null];return n.push.apply(n,t),new(c.apply(e,n))}var l=r.prototype,p=a(s(l)?l:Object.prototype),g=Function.apply.call(e,p,t);return s(g)?g:p}})},INYr:function(e,t,r){"use strict";var n=r("XKFU"),a=r("CkkT")(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),n(n.P+n.F*o,"Array",{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),r("nGyu")(i)},OGtf:function(e,t,r){var n=r("XKFU"),a=r("eeVq"),i=r("vhPU"),o=/"/g,s=function(e,t,r,n){var a=String(i(e)),s="<"+t;return""!==r&&(s+=" "+r+'="'+String(n).replace(o,"&quot;")+'"'),s+">"+a+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(s),n(n.P+n.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},WKty:function(e,t,r){"use strict";r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("V+eJ"),r("ioFf"),r("91GP");var n=r("q1tI"),a=r.n(n);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,s=e.size,l=void 0===s?24:s,c=o(e,["color","size"]);return a.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),a.a.createElement("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}),a.a.createElement("line",{x1:"7",y1:"7",x2:"7.01",y2:"7"}))}));s.displayName="Tag",t.a=s},X8hv:function(e,t,r){function n(e,t,r){return(n=a()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var a=new(Function.bind.apply(e,n));return r&&i(a,r.prototype),a}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r("jm62"),r("yt8O"),r("RW0V"),r("rGqo"),r("rE2o"),r("ioFf"),r("XfO3"),r("HEwt"),r("f3/d"),r("a1Th"),r("Btvt"),r("I5cv"),r("I5cv"),r("f3/d"),r("a1Th"),r("XfO3"),r("HEwt"),r("rE2o"),r("jm62"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V");var u=r("q1tI"),f=r("7ljp"),p=f.useMDXComponents,g=f.mdx,m=r("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,r=e.components,a=e.children,i=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["scope","components","children"]),s=p(r),l=m(t),d=u.useMemo((function(){if(!a)return null;var e=c({React:u,mdx:g},l),t=Object.keys(e),r=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+a])).apply(void 0,[{}].concat(o(r)))}),[a,t]);return u.createElement(d,c({components:s},i))}},tUrg:function(e,t,r){"use strict";r("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},xw5c:function(e,t,r){"use strict";r.r(t),r.d(t,"pageQuery",(function(){return P}));r("tUrg");var n=r("q1tI"),a=r.n(n),i=r("Wbzz"),o=r("qKvR"),s=r("A2+M");r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("V+eJ"),r("ioFf"),r("91GP");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,i=e.size,o=void 0===i?24:i,s=c(e,["color","size"]);return a.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),a.a.createElement("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),a.a.createElement("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),a.a.createElement("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),a.a.createElement("line",{x1:"3",y1:"10",x2:"21",y2:"10"}))}));d.displayName="Calendar";var u=d;function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var g=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,i=e.size,o=void 0===i?24:i,s=p(e,["color","size"]);return a.a.createElement("svg",f({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),a.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),a.a.createElement("polyline",{points:"12 6 12 12 16 14"}))}));g.displayName="Clock";var m=g,h=r("WKty"),b=r("Bl7J"),y=r("vrFN");function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var w=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,i=e.size,o=void 0===i?24:i,s=O(e,["color","size"]);return a.a.createElement("svg",v({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),a.a.createElement("polyline",{points:"17 11 12 6 7 11"}),a.a.createElement("polyline",{points:"17 18 12 13 7 18"}))}));w.displayName="ChevronsUp";var j=w,x={name:"5biiem",styles:"position:fixed;bottom:20px;right:20px;background-color:var(--main-bg);border-radius:50%;border:1px solid var(--main-bg-contrast);"},S={name:"kvrzot",styles:"position:fixed;top:0;left:0;height:4px;background-color:var(--contrast);"},E=function(e){var t=Object(n.useState)(!0),r=t[0],i=t[1],s=Object(n.useState)(0),l=s[0],c=s[1];return Object(n.useEffect)((function(){window.addEventListener("scroll",(function(e){var t=window.scrollY;i(t>100);var r=t/window.scrollMaxY*100+"%";c(r)})),i(!1)}),[]),r?Object(o.c)(a.a.Fragment,null,Object(o.c)("a",{href:"#",title:"Go Up","aria-hidden":"true"},Object(o.c)(j,{css:x,width:"60px",height:"60px"})),Object(o.c)("div",{css:S,className:"progress",style:{width:l}})):null},k=r("9eSz"),R=r.n(k),I=new Intl.DateTimeFormat("en",{month:"long"}),L={name:"d8gndv",styles:".tags{display:inline-block;li{display:inline-block;}}.date{font-size:1.5rem;display:flex;align-items:center;}.toc{position:sticky;top:100px;ul{padding-left:20px;}}.contains-task-list{list-style-type:none;padding:0;}table{border-spacing:0;border-collapse:collapse;text-align:left;th,td{padding:6px;border-bottom:.05rem solid var(--text);}th{border-bottom:.05rem solid var(--text);}}p{text-align:justify;}.date,.timeToRead,.tagsContainer{display:flex;align-items:center;margin-bottom:10px;.icon{margin-right:10px;}}.hook{margin-top:0;font-weight:400;text-align:left;font-size:1.5rem;line-height:2rem;margin-bottom:60px;}.extra{margin-top:40px;font-size:.9rem;display:flex;justify-content:space-between;}h2,h3,h4,h5,h6{a.anchor.before{stroke:var(--text);position:absolute;left:-40px;padding-left:10px;padding-right:20px;opacity:0;&:focus{opacity:1;}}&:hover a.anchor.before{opacity:1;}}"},P="2700553517";t.default=function(e){var t,r,n=e.data,l=n.site.siteMetadata.repositoryUrl,c=n.mdx,d=new Date(c.fields.date),f=c.frontmatter.featuredImage&&c.frontmatter.featuredImage.childImageSharp&&c.frontmatter.featuredImage.childImageSharp.fluid||null;return Object(o.c)(b.a,null,Object(o.c)(y.a,{title:c.frontmatter.title,description:c.excerpt}),Object(o.c)("section",{css:L,className:"double"},Object(o.c)("h1",{className:"title"},c.frontmatter.title),Object(o.c)("article",{className:"content"},c.frontmatter.hook&&Object(o.c)("p",{className:"hook"},c.frontmatter.hook),f&&Object(o.c)(R.a,{fluid:f,alt:"Featured image for "+c.frontmatter.title}),Object(o.c)(s.MDXRenderer,null,c.body),Object(o.c)("div",{className:"extra"},Object(o.c)("a",{rel:"license",href:"https://creativecommons.org/licenses/by-sa/4.0/"},"CC BY-SA 4.0"),Object(o.c)("span",null,"Did I make a mistake? Please consider ",Object(o.c)("a",{href:""+l+(t=c.fileAbsolutePath,r=t.indexOf("content"),t.slice(r))}," sending a pull request"),"."))),Object(o.c)("aside",null,Object(o.c)("div",{className:"date"},Object(o.c)(u,{"aria-hidden":"true",className:"icon"}),d.getDate()+" "+I.format(d)+" "+d.getFullYear()),Object(o.c)("div",{className:"timeToRead"},Object(o.c)(m,{"aria-hidden":"true",className:"icon"}),"Time to read: ",c.timeToRead," minutes"),c.frontmatter.tags&&Object(o.c)("div",{className:"tagsContainer"},Object(o.c)(h.a,{"aria-hidden":"true",className:"icon"}),Object(o.c)("ul",{className:"tags unstyledList"},c.frontmatter.tags.map((function(e,t){return Object(o.c)("li",{key:e},Object(o.c)("span",{"aria-hidden":"true"},"#"),Object(o.c)(i.Link,{to:"/tags/"+e},e),t<c.frontmatter.tags.length-1&&Object(o.c)(a.a.Fragment,null,",  "))})))),c.tableOfContents.items&&Object(o.c)("div",{className:"toc noLinksDecoration"},function e(t){return Object(o.c)("ul",{role:"feed"},t.map((function(t){return Object(o.c)("li",{key:t.link},Object(o.c)("a",{rel:"toc",href:t.url},t.title),t.items&&e(t.items))})))}(c.tableOfContents.items)))),Object(o.c)(E,null))}}}]);
//# sourceMappingURL=component---src-components-posts-js-83e43525072a919592a1.js.map