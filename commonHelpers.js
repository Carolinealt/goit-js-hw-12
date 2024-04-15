import{a as u,i as g,S as p}from"./assets/vendor-f736e62a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();const h="21174821-fd3fd6848262c16aee96184b8";u.defaults.baseURL="https://pixabay.com/";let i=1,c="";async function y(e){c===e?i+=1:i=1,console.log(i);const t=await u.get("api/",{params:{key:`${h}`,q:`${e}`,image_type:"photo",orientations:"horizontal",safesearch:!0,page:i,per_page:8}});return c=e,t.data}const L={gallery:document.querySelector(".gallery"),descrLoading:document.querySelector(".main-p"),iconLoading:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".more-btn")},{gallery:b,descrLoading:S,iconLoading:q,loadMoreBtn:d}=L;function w({webformatURL:e,largeImageURL:t,tags:a,likes:n,views:s,comments:r,downloads:o}){return`<li class="gallery-item">
 <a class="gallery-link" href="${t}">  

    <img src="${e}" alt="${a}" class="image">
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
                <p class="stats-p">${o}</p>
            </li>
        </ul>
</li>`}function $(e){return e.join("")}function l(){S.classList.toggle("dis-active"),q.classList.toggle("dis-active")}function m(){d.classList.add("dis-active")}function f(){d.classList.remove("dis-active")}function v(e){b.insertAdjacentHTML("beforeend",e)}function M(){const e=new p(".gallery-link");document.querySelectorAll(".gallery-link").forEach(a=>{a.SimpleLightbox}),e.refresh()}async function E(e){return await e.then(({hits:t})=>{if(t.length===0)throw new Error;return m(),l(),t}).then(t=>t.map(w)).then($).then(v).then(M).then(f).catch(()=>{const t={message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"white",messageSize:"16",position:"topRight",messageLineHeight:"88",class:"ipa"};l(),g.error(t)})}async function O(e){m(),l(),await E(e),f()}const x={form:document.querySelector(".main-form"),gallery:document.querySelector(".gallery")},{form:A,gallery:P}=x;A.addEventListener("submit",B);function B(e){e.preventDefault();const t=e.target.elements.request.value.trim();t&&D(t)}function D(e){P.innerHTML="";let t;try{t=y(e)}catch(a){console.log(a)}O(t)}
//# sourceMappingURL=commonHelpers.js.map
