import{a as u,i as c,S as L}from"./assets/vendor-e7786203.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const b="21174821-fd3fd6848262c16aee96184b8";u.defaults.baseURL="https://pixabay.com/";let n=0,d="",m=15,f=null,q=document.querySelector("more-btn"),S=document.querySelector(".loader-container");function v(e){f=Math.ceil(e/m)}async function M(e){d===e?n+=1:n=1;const t=await u.get("api/",{params:{key:`${b}`,q:`${e}`,image_type:"photo",orientations:"horizontal",safesearch:!0,page:n,per_page:m}});if(v(t.data.totalHits),t.data.totalHits===0){const r={message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"white",messageSize:"16",position:"topRight",messageLineHeight:"88",class:"ipa"};c.error(r)}return n>f&&t.data.totalHits!==0&&(c.error({position:"topRight",message:"We're sorry, there are no more posts to load"}),S.classList.add("dis-active"),q.disactive),d=e,t.data}const $={gallery:document.querySelector(".gallery"),descrLoading:document.querySelector(".main-p"),iconLoading:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".more-btn")},w=new L(".gallery-link"),{gallery:B,descrLoading:E,iconLoading:H,loadMoreBtn:g}=$;function O({webformatURL:e,largeImageURL:t,tags:r,likes:i,views:s,comments:o,downloads:a}){return`<li class="gallery-item">
 <a class="gallery-link" href="${t}">  

    <img src="${e}" alt="${r}" class="image">
    </img>
  </a>
        <ul class="stats-list">
            <li class="stats-item">
                <h3 class="stats-header">Likes</h3>
                <p class="stats-p">${i}</p>
            </li>
            <li class="stats-item">
                <h3 class="stats-header">Views</h3>
                <p class="stats-p">${s}</p>
            </li>
            <li class="stats-item">
                <h3 class="stats-header">Comments</h3>
                <p class="stats-p">${o}</p>
            </li>
            <li class="stats-item">
                <h3 class="stats-header">Downloads</h3>
                <p class="stats-p">${a}</p>
            </li>
        </ul>
</li>`}function P(e){return e.join("")}function l(){E.classList.toggle("dis-active"),H.classList.toggle("dis-active")}function R(){g.classList.add("dis-active")}function x(){g.classList.remove("dis-active")}function A(e){B.insertAdjacentHTML("beforeend",e)}function C(){document.querySelectorAll(".gallery-link").forEach(t=>{t.SimpleLightbox})}async function k(e){return await e.then(({hits:t})=>(x(),l(),t)).then(t=>t.map(O)).then(P).then(A).then(C).then(()=>{w.refresh()}).catch(()=>{l()})}async function D(e){R(),l(),await k(e)}const T={form:document.querySelector(".main-form"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".more-btn")},{form:h,gallery:p,loadMoreBtn:j}=T;h.addEventListener("submit",z);function z(e){e.preventDefault(),p.innerHTML="";const t=e.target.elements.request.value.trim();t&&(y(t),j.addEventListener("click",F))}function F(){try{y(h.elements.request.value)}catch{}N()}function y(e){let t;try{t=M(e),D(t)}catch(r){console.log(r)}}async function N(){let e=await p.firstChild.getBoundingClientRect(),{height:t}=e,r={top:t*2,left:0,behavior:"smooth"};window.scrollBy(r)}
//# sourceMappingURL=commonHelpers.js.map
