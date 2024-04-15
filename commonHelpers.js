import{a as u,S as h,i as p}from"./assets/vendor-f736e62a.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const y="21174821-fd3fd6848262c16aee96184b8";u.defaults.baseURL="https://pixabay.com/";let i=1,c="";async function L(t){c===t?i+=1:i=1,console.log(i);const e=await u.get("api/",{params:{key:`${y}`,q:`${t}`,image_type:"photo",orientations:"horizontal",safesearch:!0,page:i,per_page:15}});return c=t,e.data}const b={gallery:document.querySelector(".gallery"),descrLoading:document.querySelector(".main-p"),iconLoading:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".more-btn")},q=new h(".gallery-link"),{gallery:w,descrLoading:S,iconLoading:v,loadMoreBtn:d}=b;function M({webformatURL:t,largeImageURL:e,tags:o,likes:n,views:s,comments:r,downloads:a}){return`<li class="gallery-item">
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
                <p class="stats-p">${s}</p>
            </li>
            <li class="stats-item">
                <h3 class="stats-header">Comments</h3>
                <p class="stats-p">${r}</p>
            </li>
            <li class="stats-item">
                <h3 class="stats-header">Downloads</h3>
                <p class="stats-p">${a}</p>
            </li>
        </ul>
</li>`}function $(t){return t.join("")}function l(){S.classList.toggle("dis-active"),v.classList.toggle("dis-active")}function B(){d.classList.add("dis-active")}function E(){d.classList.remove("dis-active")}function O(t){w.insertAdjacentHTML("beforeend",t)}function x(){document.querySelectorAll(".gallery-link").forEach(e=>{e.SimpleLightbox})}async function A(t){return await t.then(({hits:e})=>{if(e.length===0)throw new Error;return E(),l(),e}).then(e=>e.map(M)).then($).then(O).then(x).then(()=>{q.refresh()}).catch(()=>{const e={message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"white",messageSize:"16",position:"topRight",messageLineHeight:"88",class:"ipa"};l(),p.error(e)})}async function P(t){B(),l(),await A(t)}const R={form:document.querySelector(".main-form"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".more-btn")},{form:m,gallery:f,loadMoreBtn:C}=R;m.addEventListener("submit",D);function D(t){t.preventDefault(),f.innerHTML="";const e=t.target.elements.request.value.trim();e&&(g(e),C.addEventListener("click",H))}function H(){g(m.elements.request.value),T()}function g(t){let e;try{e=L(t)}catch(o){console.log(o)}P(e)}async function T(){let t=await f.firstChild.getBoundingClientRect(),{height:e}=t,o={top:e*2,left:0,behavior:"smooth"};window.scrollBy(o)}
//# sourceMappingURL=commonHelpers.js.map
