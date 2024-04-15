import fetchImg from './js/pixabay-api';
import addHTML from './js/render-functions';

const refs = {
  form: document.querySelector('.main-form'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.more-btn'),
};
const { form, gallery, loadMoreBtn } = refs;
form.addEventListener('submit', fetchFirstRequest);

function fetchFirstRequest(e) {
  e.preventDefault();
  gallery.innerHTML = '';
  const inputValue = e.target.elements.request.value.trim();
  if (!inputValue) {
    return;
  }

  createElements(inputValue);
  loadMoreBtn.addEventListener('click', fetchMoreRequest);
}

function fetchMoreRequest() {
  createElements(form.elements.request.value);
  smothing();
}

function createElements(inputValue) {
  let cardArray;
  try {
    cardArray = fetchImg(inputValue);
  } catch (error) {
    console.log(error);
  }
  addHTML(cardArray);
}

async function smothing() {
  let domRect = await gallery.firstChild.getBoundingClientRect();
  let { height } = domRect;
  let options = {
    top: height * 2,
    left: 0,
    behavior: `smooth`,
  };
  window.scrollBy(options);
}
