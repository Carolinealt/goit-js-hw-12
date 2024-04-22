import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  gallery: document.querySelector('.gallery'),
  descrLoading: document.querySelector('.main-p'),
  iconLoading: document.querySelector('.loader'),
  loadMoreBtn: document.querySelector('.more-btn'),
};
const box = new SimpleLightbox('.gallery-link');

const { gallery, descrLoading, iconLoading, loadMoreBtn } = refs;

function createMarkupElement({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<li class="gallery-item">
 <a class="gallery-link" href="${largeImageURL}">  

    <img src="${webformatURL}" alt="${tags}" class="image">
    </img>
  </a>
        <ul class="stats-list">
            <li class="stats-item">
                <h3 class="stats-header">Likes</h3>
                <p class="stats-p">${likes}</p>
            </li>
            <li class="stats-item">
                <h3 class="stats-header">Views</h3>
                <p class="stats-p">${views}</p>
            </li>
            <li class="stats-item">
                <h3 class="stats-header">Comments</h3>
                <p class="stats-p">${comments}</p>
            </li>
            <li class="stats-item">
                <h3 class="stats-header">Downloads</h3>
                <p class="stats-p">${downloads}</p>
            </li>
        </ul>
</li>`;
}

function joinArr(arr) {
  return arr.join('');
}

function toggleDescr() {
  descrLoading.classList.toggle('dis-active');
  iconLoading.classList.toggle('dis-active');
}

function hideLoadBtn() {
  loadMoreBtn.classList.add(`dis-active`);
}

function showLoadBtn() {
  loadMoreBtn.classList.remove(`dis-active`);
}

function addDOM(str) {
  gallery.insertAdjacentHTML('beforeend', str);
}

function addLightBox() {
  const a = document.querySelectorAll('.gallery-link');
  a.forEach(element => {
    element.SimpleLightbox;
  });
}

async function getPromise(prom) {
  return await prom
    .then(({ hits }) => {
      if (hits.length === 15) {
        toggleDescr();
        showLoadBtn();
        return hits;
      }
      toggleDescr();
      return hits;
    })
    .then(hits => {
      return hits.map(createMarkupElement);
    })
    .then(joinArr)
    .then(addDOM)
    .then(addLightBox)
    .then(() => {
      box.refresh();
    })
    .catch(() => {
      toggleDescr();
    });
}

async function addHTML(prom) {
  hideLoadBtn();
  toggleDescr();

  await getPromise(prom);
}

export default addHTML;
