/*! For license information please see 797d8b0afe348a07415ffbdf0b3dd85f5717edd3-3b49b189d2270e05e963.js.LICENSE.txt */
(self.webpackChunkintercambios_transorganicos=self.webpackChunkintercambios_transorganicos||[]).push([[130],{5900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var u in n)r.call(n,u)&&n[u]&&e.push(u);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},931:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return Re}});var o=n(181);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(e,t)||(0,o.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a=n(3366);function u(e,t){if(null==e)return{};var n,r,o=(0,a.Z)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=n(7294);var s=function(e){var t=(0,c.useRef)(e);return(0,c.useEffect)((function(){t.current=e}),[e]),t};function l(e){var t=s(e);return(0,c.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}var f=function(e,t){var n=(0,c.useRef)(!0);(0,c.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)};function d(e){var t,n,r=(t=e,(n=(0,c.useRef)(t)).current=t,n);(0,c.useEffect)((function(){return function(){return r.current()}}),[])}var p=Math.pow(2,31)-1;function v(e,t,n){var r=n-Date.now();e.current=r<=p?setTimeout(t,r):setTimeout((function(){return v(e,t,n)}),p)}function b(){var e=function(){var e=(0,c.useRef)(!0),t=(0,c.useRef)((function(){return e.current}));return(0,c.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}(),t=(0,c.useRef)();return d((function(){return clearTimeout(t.current)})),(0,c.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(r,o){void 0===o&&(o=0),e()&&(n(),o<=p?t.current=setTimeout(r,o):v(t,r,Date.now()+o))},clear:n}}),[])}var h=function(e){var t=(0,c.useRef)(e);return(0,c.useEffect)((function(){t.current=e}),[e]),t};var m=void 0!==n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product;"undefined"!=typeof document||m?c.useLayoutEffect:c.useEffect,new WeakMap;var y=n(5893),x=["as","disabled"];function E(e){var t=e.tagName,n=e.disabled,r=e.href,o=e.target,i=e.rel,a=e.onClick,u=e.tabIndex,c=void 0===u?0:u,s=e.type;t||(t=null!=r||null!=o||null!=i?"a":"button");var l={tagName:t};if("button"===t)return[{type:s||"button",disabled:n},l];var f=function(e){(n||"a"===t&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),n?e.stopPropagation():null==a||a(e)};return[{role:"button",disabled:void 0,tabIndex:n?void 0:c,href:"a"===t&&n?void 0:r,target:"a"===t?o:void 0,"aria-disabled":n||void 0,rel:"a"===t?i:void 0,onClick:f,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),f(e))}},l]}var g=c.forwardRef((function(e,t){var n=e.as,r=e.disabled,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,x),a=i(E(Object.assign({tagName:n,disabled:r},o)),2),u=a[0],c=a[1].tagName;return(0,y.jsx)(c,Object.assign({},o,u,{ref:t}))}));g.displayName="Button";var O=["onKeyDown"];var j=c.forwardRef((function(e,t){var n,r=e.onKeyDown,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,O),a=i(E(Object.assign({tagName:"a"},o)),1)[0],u=function(e){var t=h(e);return(0,c.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}((function(e){a.onKeyDown(e),null==r||r(e)}));return((n=o.href)&&"#"!==n.trim()||o.role)&&"button"!==o.role?(0,y.jsx)("a",Object.assign({ref:t},o,{onKeyDown:r})):(0,y.jsx)("a",Object.assign({ref:t},o,a,{onKeyDown:u}))}));j.displayName="Anchor";var w=j,C=n(5900),S=n.n(C),k=n(7462);n(1143);function P(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function N(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function D(e,t){return Object.keys(t).reduce((function(n,r){var o,i=n,u=i[P(r)],s=i[r],l=(0,a.Z)(i,[P(r),r].map(N)),f=t[r],d=function(e,t,n){var r=(0,c.useRef)(void 0!==e),o=(0,c.useState)(t),i=o[0],a=o[1],u=void 0!==e,s=r.current;return r.current=u,!u&&s&&i!==t&&a(t),[u?e:i,(0,c.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];n&&n.apply(void 0,[e].concat(r)),a(e)}),[n])]}(s,u,e[f]),p=d[0],v=d[1];return(0,k.Z)({},l,((o={})[r]=p,o[f]=v,o))}),e)}n(3639);var R=/-(.)/g;var T=c.createContext({prefixes:{}});T.Consumer,T.Provider;function L(e,t){var n=(0,c.useContext)(T).prefixes;return e||n[t]||t}var I=["className","bsPrefix","as"];function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z=function(e){return e[0].toUpperCase()+(t=e,t.replace(R,(function(e,t){return t.toUpperCase()}))).slice(1);var t};var _=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.displayName,r=void 0===n?Z(e):n,o=t.Component,i=t.defaultProps,a=c.forwardRef((function(t,n){var r=t.className,i=t.bsPrefix,a=t.as,c=void 0===a?o||"div":a,s=u(t,I),l=L(i,e);return(0,y.jsx)(c,A({ref:n,className:S()(r,l)},s))}));return a.defaultProps=i,a.displayName=r,a}("carousel-caption"),K=["as","bsPrefix","className"];function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var V=c.forwardRef((function(e,t){var n=e.as,r=void 0===n?"div":n,o=e.bsPrefix,i=e.className,a=u(e,K),c=S()(i,L(o,"carousel-item"));return(0,y.jsx)(r,X(X({ref:t},a),{},{className:c}))}));V.displayName="CarouselItem";var F=V;function H(e,t){var n=0;return c.Children.map(e,(function(e){return c.isValidElement(e)?t(e,n++):e}))}function G(e){var t=function(e){return e&&e.ownerDocument||document}(e);return t&&t.defaultView||window}var W=/([A-Z])/g;var Y=/^ms-/;function $(e){return function(e){return e.replace(W,"-$1").toLowerCase()}(e).replace(Y,"-ms-")}var B=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var q=function(e,t){var n="",r="";if("string"==typeof t)return e.style.getPropertyValue($(t))||function(e,t){return G(e).getComputedStyle(e,t)}(e).getPropertyValue($(t));Object.keys(t).forEach((function(o){var i=t[o];i||0===i?!function(e){return!(!e||!B.test(e))}(o)?n+=$(o)+": "+i+";":r+=o+"("+i+") ":e.style.removeProperty($(o))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n},z=!("undefined"==typeof window||!window.document||!window.document.createElement),J=!1,Q=!1;try{var ee={get passive(){return J=!0},get once(){return Q=J=!0}};z&&(window.addEventListener("test",ee,ee),window.removeEventListener("test",ee,!0))}catch(Te){}var te=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!Q){var o=r.once,i=r.capture,a=n;!Q&&o&&(a=n.__once||function e(r){this.removeEventListener(t,e,i),n.call(this,r)},n.__once=a),e.addEventListener(t,a,J?r:i)}e.addEventListener(t,n,r)};var ne=function(e,t,n,r){var o=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)};var re=function(e,t,n,r){return te(e,t,n,r),function(){ne(e,t,n,r)}};function oe(e,t,n){void 0===n&&(n=5);var r=!1,o=setTimeout((function(){r||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(t,n,r),e.dispatchEvent(o)}}(e,"transitionend",!0)}),t+n),i=re(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(o),i()}}function ie(e,t,n,r){var o,i;null==n&&(o=q(e,"transitionDuration")||"",i=-1===o.indexOf("ms")?1e3:1,n=parseFloat(o)*i||0);var a=oe(e,n,r),u=re(e,"transitionend",t);return function(){a(),u()}}function ae(e,t){var n=q(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function ue(e,t){var n=ae(e,"transitionDuration"),r=ae(e,"transitionDelay"),o=ie(e,(function(n){n.target===e&&(o(),t(n))}),n+r)}var ce=n(1721),se=n(3935),le=!1,fe=c.createContext(null),de="unmounted",pe="exited",ve="entering",be="entered",he="exiting",me=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var o,i=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?i?(o=pe,r.appearStatus=ve):o=be:o=t.unmountOnExit||t.mountOnEnter?de:pe,r.state={status:o},r.nextCallback=null,r}(0,ce.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===de?{status:pe}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==ve&&n!==be&&(t=ve):n!==ve&&n!==be||(t=he)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===ve?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===pe&&this.setState({status:de})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,o=this.props.nodeRef?[r]:[se.findDOMNode(this),r],i=o[0],a=o[1],u=this.getTimeouts(),c=r?u.appear:u.enter;!e&&!n||le?this.safeSetState({status:be},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,a),this.safeSetState({status:ve},(function(){t.props.onEntering(i,a),t.onTransitionEnd(c,(function(){t.safeSetState({status:be},(function(){t.props.onEntered(i,a)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:se.findDOMNode(this);t&&!le?(this.props.onExit(r),this.safeSetState({status:he},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:pe},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:pe},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:se.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=o[0],a=o[1];this.props.addEndListener(i,a)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===de)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,(0,a.Z)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return c.createElement(fe.Provider,{value:null},"function"==typeof n?n(e,r):c.cloneElement(c.Children.only(n),r))},t}(c.Component);function ye(){}me.contextType=fe,me.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ye,onEntering:ye,onEntered:ye,onExit:ye,onExiting:ye,onExited:ye},me.UNMOUNTED=de,me.EXITED=pe,me.ENTERING=ve,me.ENTERED=be,me.EXITING=he;var xe=me,Ee=function(e){return e&&"function"!=typeof e?function(t){e.current=t}:e};var ge=function(e,t){return(0,c.useMemo)((function(){return function(e,t){var n=Ee(e),r=Ee(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])};var Oe=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children","childRef"];function je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?je(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):je(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ce=c.forwardRef((function(e,t){var n=e.onEnter,r=e.onEntering,o=e.onEntered,i=e.onExit,a=e.onExiting,s=e.onExited,l=e.addEndListener,f=e.children,d=e.childRef,p=u(e,Oe),v=(0,c.useRef)(null),b=ge(v,d),h=function(e){var t;b((t=e)&&"setState"in t?se.findDOMNode(t):null!=t?t:null)},m=function(e){return function(t){e&&v.current&&e(v.current,t)}},x=(0,c.useCallback)(m(n),[n]),E=(0,c.useCallback)(m(r),[r]),g=(0,c.useCallback)(m(o),[o]),O=(0,c.useCallback)(m(i),[i]),j=(0,c.useCallback)(m(a),[a]),w=(0,c.useCallback)(m(s),[s]),C=(0,c.useCallback)(m(l),[l]);return(0,y.jsx)(xe,we(we({ref:t},p),{},{onEnter:x,onEntered:g,onEntering:E,onExit:O,onExited:w,onExiting:j,addEndListener:C,nodeRef:v,children:"function"==typeof f?function(e,t){return f(e,we(we({},t),{},{ref:h}))}:c.cloneElement(f,{ref:h})}))})),Se=["as","bsPrefix","slide","fade","controls","indicators","indicatorLabels","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","variant","className","children"];function ke(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ke(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ke(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ne={slide:!0,fade:!1,controls:!0,indicators:!0,indicatorLabels:[],defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:(0,y.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:(0,y.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var De=c.forwardRef((function(e,t){var n=D(e,{activeIndex:"onSelect"}),r=n.as,o=void 0===r?"div":r,a=n.bsPrefix,d=n.slide,p=n.fade,v=n.controls,h=n.indicators,m=n.indicatorLabels,x=n.activeIndex,E=n.onSelect,g=n.onSlide,O=n.onSlid,j=n.interval,C=n.keyboard,k=n.onKeyDown,P=n.pause,N=n.onMouseOver,R=n.onMouseOut,I=n.wrap,M=n.touch,A=n.onTouchStart,Z=n.onTouchMove,_=n.onTouchEnd,K=n.prevIcon,U=n.prevLabel,X=n.nextIcon,V=n.nextLabel,F=n.variant,G=n.className,W=n.children,Y=u(n,Se),$=L(a,"carousel"),B="rtl"===(0,c.useContext)(T).dir,q=(0,c.useRef)(null),z=i((0,c.useState)("next"),2),J=z[0],Q=z[1],ee=i((0,c.useState)(!1),2),te=ee[0],ne=ee[1],re=i((0,c.useState)(!1),2),oe=re[0],ie=re[1],ae=i((0,c.useState)(x||0),2),ce=ae[0],se=ae[1];oe||x===ce||(q.current?Q(q.current):Q((x||0)>ce?"next":"prev"),d&&ie(!0),se(x||0)),(0,c.useEffect)((function(){q.current&&(q.current=null)}));var le,fe=0;!function(e,t){var n=0;c.Children.forEach(e,(function(e){c.isValidElement(e)&&t(e,n++)}))}(W,(function(e,t){++fe,t===x&&(le=e.props.interval)}));var de=s(le),pe=(0,c.useCallback)((function(e){if(!oe){var t=ce-1;if(t<0){if(!I)return;t=fe-1}q.current="prev",null==E||E(t,e)}}),[oe,ce,E,I,fe]),ve=l((function(e){if(!oe){var t=ce+1;if(t>=fe){if(!I)return;t=0}q.current="next",null==E||E(t,e)}})),be=(0,c.useRef)();(0,c.useImperativeHandle)(t,(function(){return{element:be.current,prev:pe,next:ve}}));var he=l((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(be.current)&&(B?pe():ve())})),me="next"===J?"start":"end";f((function(){d||(null==g||g(ce,me),null==O||O(ce,me))}),[ce]);var ye="".concat($,"-item-").concat(J),xe="".concat($,"-item-").concat(me),Ee=(0,c.useCallback)((function(e){!function(e){e.offsetHeight}(e),null==g||g(ce,me)}),[g,ce,me]),ge=(0,c.useCallback)((function(){ie(!1),null==O||O(ce,me)}),[O,ce,me]),Oe=(0,c.useCallback)((function(e){if(C&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void(B?ve(e):pe(e));case"ArrowRight":return e.preventDefault(),void(B?pe(e):ve(e))}null==k||k(e)}),[C,k,pe,ve,B]),je=(0,c.useCallback)((function(e){"hover"===P&&ne(!0),null==N||N(e)}),[P,N]),we=(0,c.useCallback)((function(e){ne(!1),null==R||R(e)}),[R]),ke=(0,c.useRef)(0),Ne=(0,c.useRef)(0),De=b(),Re=(0,c.useCallback)((function(e){ke.current=e.touches[0].clientX,Ne.current=0,"hover"===P&&ne(!0),null==A||A(e)}),[P,A]),Te=(0,c.useCallback)((function(e){e.touches&&e.touches.length>1?Ne.current=0:Ne.current=e.touches[0].clientX-ke.current,null==Z||Z(e)}),[Z]),Le=(0,c.useCallback)((function(e){if(M){var t=Ne.current;Math.abs(t)>40&&(t>0?pe(e):ve(e))}"hover"===P&&De.set((function(){ne(!1)}),j||void 0),null==_||_(e)}),[M,P,pe,ve,De,j,_]),Ie=null!=j&&!te&&!oe,Me=(0,c.useRef)();(0,c.useEffect)((function(){var e,t;if(Ie){var n=B?pe:ve;return Me.current=window.setInterval(document.visibilityState?he:n,null!=(e=null!=(t=de.current)?t:j)?e:void 0),function(){null!==Me.current&&clearInterval(Me.current)}}}),[Ie,pe,ve,de,j,he,B]);var Ae=(0,c.useMemo)((function(){return h&&Array.from({length:fe},(function(e,t){return function(e){null==E||E(t,e)}}))}),[h,fe,E]);return(0,y.jsxs)(o,Pe(Pe({ref:be},Y),{},{onKeyDown:Oe,onMouseOver:je,onMouseOut:we,onTouchStart:Re,onTouchMove:Te,onTouchEnd:Le,className:S()(G,$,d&&"slide",p&&"".concat($,"-fade"),F&&"".concat($,"-").concat(F)),children:[h&&(0,y.jsx)("div",{className:"".concat($,"-indicators"),children:H(W,(function(e,t){return(0,y.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=m&&m.length?m[t]:"Slide ".concat(t+1),className:t===ce?"active":void 0,onClick:Ae?Ae[t]:void 0,"aria-current":t===ce},t)}))}),(0,y.jsx)("div",{className:"".concat($,"-inner"),children:H(W,(function(e,t){var n=t===ce;return d?(0,y.jsx)(Ce,{in:n,onEnter:n?Ee:void 0,onEntered:n?ge:void 0,addEndListener:ue,children:function(t,r){return c.cloneElement(e,Pe(Pe({},r),{},{className:S()(e.props.className,n&&"entered"!==t&&ye,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&xe)}))}}):c.cloneElement(e,{className:S()(e.props.className,n&&"active")})}))}),v&&(0,y.jsxs)(y.Fragment,{children:[(I||0!==x)&&(0,y.jsxs)(w,{className:"".concat($,"-control-prev"),onClick:pe,children:[K,U&&(0,y.jsx)("span",{className:"visually-hidden",children:U})]}),(I||x!==fe-1)&&(0,y.jsxs)(w,{className:"".concat($,"-control-next"),onClick:ve,children:[X,V&&(0,y.jsx)("span",{className:"visually-hidden",children:V})]})]})]}))}));De.displayName="Carousel",De.defaultProps=Ne;var Re=Object.assign(De,{Caption:_,Item:F})},7462:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},3366:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=797d8b0afe348a07415ffbdf0b3dd85f5717edd3-3b49b189d2270e05e963.js.map