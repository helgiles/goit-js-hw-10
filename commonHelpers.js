/* empty css                      */import{f as p,i as y}from"./assets/vendor-3029c4a4.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const u=document.querySelector("#datetime-picker"),a=document.querySelector("button[data-start]"),h=document.querySelector("[data-days]"),g=document.querySelector("[data-hours]"),b=document.querySelector("[data-minutes]"),S=document.querySelector("[data-seconds]");a.disabled=!0;let d=null,l=null;const L=1e3,M={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0].getTime()<Date.now()?y.error({position:"topRight",message:"Please choose a date in the future"}):(a.disabled=!1,l=t[0])}};p(u,M);a.addEventListener("click",()=>{D.start()});function c(t){return String(t).padStart(2,"0")}function q(t){const o=c(Math.floor(t/864e5)),s=c(Math.floor(t%864e5/36e5)),f=c(Math.floor(t%864e5%36e5/6e4)),m=c(Math.floor(t%864e5%36e5%6e4/1e3));return{days:o,hours:s,minutes:f,seconds:m}}function v({days:t,hours:n,minutes:i,seconds:r}){h.textContent=`${t}`,g.textContent=`${n}`,b.textContent=`${i}`,S.textContent=`${r}`}const D={start(){d=setInterval(()=>{const t=Date.now(),n=l-t;v(q(n)),a.disabled=!0,u.disabled=!0,n<=1e3&&this.stop()},L)},stop(){a.disabled=!0,u.disabled=!1,clearInterval(d)}};
//# sourceMappingURL=commonHelpers.js.map
