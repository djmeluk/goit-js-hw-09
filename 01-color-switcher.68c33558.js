const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),d=document.querySelector("body");e.addEventListener("click",r),t.addEventListener("click",(function(){clearTimeout(o),r&&(e.disabled=!1);return t.disabled=!0}));let o=null;function r(){return d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,o=setTimeout(r,1e3),r&&(e.disabled=!0),t.disabled=!1}
//# sourceMappingURL=01-color-switcher.68c33558.js.map