!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequired7c6=a);var n=a("1WSnx"),o=document.querySelector(".feedback-form"),l="feedback-form-state",i=o.elements.email,s=o.elements.message;o.addEventListener("submit",(function(e){e.preventDefault(),console.log({email:i.value,message:s.value}),o.reset(),localStorage.removeItem(l)}));o.addEventListener("input",(0,n.throttle)((function(e){var t={email:i.value,message:s.value};localStorage.setItem(l,JSON.stringify(t))}),500));var u=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}(l);u&&(i.value=u.email,s.value=u.message)}();
//# sourceMappingURL=03-feedback.fb50888c.js.map
