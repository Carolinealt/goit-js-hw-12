import{i as l,S as u}from"./assets/vendor-0fc460d7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const c=new URLSearchParams({key:"21174821-fd3fd6848262c16aee96184b8",q:"",image_type:"photo",orientations:"horizontal",safesearch:!0});function d(t){return c.set("q",`${t}`),`https://pixabay.com/api/?${c}`}function f(t){return fetch(`${d(t)}`).then(e=>e.json()).catch(e=>console.log(e))}const m={gallery:document.querySelector(".gallery"),descrLoading:document.querySelector(".main-p"),iconLoading:document.querySelector(".loader")},{gallery:g,descrLoading:h,iconLoading:p}=m;function y({webformatURL:t,largeImageURL:e,tags:o,likes:n,views:r,comments:s,downloads:a}){return`<li class="gallery-item">
 <a class="gallery-link" href="${e}">  

    <img src="${t}" alt="${o}" class="image">
    </img>
  </a>
        <ul class="stats-list">
            <li class="stats-item">
                <h3 class="stats-header">Likes</h3>
                <p class="stats-p">${n}</p>
            </li>
            <li class="stats-item">
                <h3 class="stats-header">Views</h3>
                <p class="stats-p">${r}</p>
            </li>
            <li class="stats-item">
                <h3 class="stats-header">Comments</h3>
                <p class="stats-p">${s}</p>
            </li>
            <li class="stats-item">
                <h3 class="stats-header">Downloads</h3>
                <p class="stats-p">${a}</p>
            </li>
        </ul>
</li>`}function L(t){return t.join("")}function i(){h.classList.toggle("dis-active"),p.classList.toggle("dis-active")}function S(t){g.insertAdjacentHTML("beforeend",t)}function q(){const t=new u(".gallery-link");document.querySelectorAll(".gallery-link").forEach(o=>{o.SimpleLightbox}),t.refresh()}function $(t){return t.then(({hits:e})=>{if(e.length===0)throw new Error;return i(),e}).then(e=>e.map(y)).then(L).then(S).then(q).catch(()=>{const e={message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"white",messageSize:"16",position:"topRight",messageLineHeight:"88",class:"ipa"};i(),l.error(e)})}function b(t){i(),$(t)}const w={form:document.querySelector(".main-form"),gallery:document.querySelector(".gallery")},{form:P,gallery:v}=w;P.addEventListener("submit",E);function E(t){t.preventDefault();const e=t.target.elements.request.value.trim();e&&O(e)}function O(t){v.innerHTML="";let e=f(t);b(e)}
//# sourceMappingURL=commonHelpers.js.map
