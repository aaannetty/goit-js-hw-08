function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var i,o,r,a,u,f,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,r=o;return i=o=void 0,l=t,a=e.apply(r,n)}function j(e){return l=e,u=setTimeout(w,t),c?b(e):a}function h(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=r}function w(){var e=v();if(h(e))return S(e);u=setTimeout(w,function(e){var n=t-(e-f);return s?m(n,r-(e-l)):n}(e))}function S(e){return u=void 0,g&&i?b(e):(i=o=void 0,a)}function T(){var e=v(),n=h(e);if(i=arguments,o=this,f=e,n){if(void 0===u)return j(f);if(s)return u=setTimeout(w,t),b(f)}return void 0===u&&(u=setTimeout(w,t)),a}return t=y(t)||0,p(n)&&(c=!!n.leading,r=(s="maxWait"in n)?d(y(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==u&&clearTimeout(u),l=0,i=f=o=u=void 0},T.flush=function(){return void 0===u?a:S(v())},T}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:i,maxWait:t,trailing:o})};const b=document.querySelector(".feedback-form"),j=document.querySelector('input[name="email"]'),h=document.querySelector('textarea[name="message"]'),w=e(t)((()=>{localStorage.setItem("email",j.value),localStorage.setItem("message",h.value)}),500);j.addEventListener("input",w),h.addEventListener("input",w),function(){const e=localStorage.getItem("email"),t=localStorage.getItem("message");e&&(j.value=e),t&&(h.value=t)}(),console.log({email:j.value,message:h.value}),b.reset();
//# sourceMappingURL=03-feedback.5025308a.js.map
