import{a as u,i as c,S as L}from"./assets/vendor-e7786203.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const b="21174821-fd3fd6848262c16aee96184b8";u.defaults.baseURL="https://pixabay.com/";let n=0,d="",m=15,f=null,q=document.querySelector(".more-btn"),S=document.querySelector(".loader-container");function v(t){f=Math.ceil(t/m)}async function M(t){d===t?n+=1:n=1;const e=await u.get("api/",{params:{key:`${b}`,q:`${t}`,image_type:"photo",orientations:"horizontal",safesearch:!0,page:n,per_page:m}});if(q.classList.add("dis-active"),v(e.data.totalHits),e.data.totalHits===0){const r={message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"white",messageSize:"16",position:"topRight",messageLineHeight:"88",class:"ipa"};c.error(r)}return n>f&&e.data.totalHits!==0&&(c.error({position:"topRight",message:"We're sorry, there are no more posts to load"}),S.classList.add("dis-active")),d=t,e.data}const $={gallery:document.querySelector(".gallery"),descrLoading:document.querySelector(".main-p"),iconLoading:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".more-btn")},w=new L(".gallery-link"),{gallery:B,descrLoading:E,iconLoading:H,loadMoreBtn:g}=$;function O({webformatURL:t,largeImageURL:e,tags:r,likes:i,views:s,comments:o,downloads:a}){return`<li class="gallery-item">
 <a class="gallery-link" href="${e}">  

    <img src="${t}" alt="${r}" class="image">
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
</li>`}function P(t){return t.join("")}function l(){E.classList.toggle("dis-active"),H.classList.toggle("dis-active")}function R(){g.classList.add("dis-active")}function x(){g.classList.remove("dis-active")}function A(t){B.insertAdjacentHTML("beforeend",t)}function C(){document.querySelectorAll(".gallery-link").forEach(e=>{e.SimpleLightbox})}async function k(t){return await t.then(({hits:e})=>e.length===15?(l(),x(),e):(l(),e)).then(e=>e.map(O)).then(P).then(A).then(C).then(()=>{w.refresh()}).catch(()=>{l()})}async function D(t){R(),l(),await k(t)}const T={form:document.querySelector(".main-form"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".more-btn")},{form:h,gallery:p,loadMoreBtn:j}=T;h.addEventListener("submit",z);function z(t){t.preventDefault(),p.innerHTML="";const e=t.target.elements.request.value.trim();e&&(y(e),j.addEventListener("click",F))}function F(){try{y(h.elements.request.value)}catch{}N()}function y(t){let e;try{e=M(t),D(e)}catch(r){console.log(r)}}async function N(){let t=await p.firstChild.getBoundingClientRect(),{height:e}=t,r={top:e*2,left:0,behavior:"smooth"};window.scrollBy(r)}
//# sourceMappingURL=commonHelpers.js.map
