import axios from 'axios';
import iziToast from 'izitoast';

const myApiKey = `21174821-fd3fd6848262c16aee96184b8`;
axios.defaults.baseURL = `https://pixabay.com/`;
let pageGlobal = 0;
let requestGlobal = '';
let limit = 15;
let totalPages = null;
let loadMoreBtn = document.querySelector('more-btn');
let loader = document.querySelector(`.loader-container`);
function checkContentQuantity(num) {
  totalPages = Math.ceil(num / limit);
}
async function fetchImg(request) {
  if (requestGlobal === request) {
    pageGlobal += 1;
  } else {
    pageGlobal = 1;
  }
  // pageGlobal = requestGlobal === request ? +1 : 1;
  const response = await axios.get(`api/`, {
    params: {
      key: `${myApiKey}`,
      q: `${request}`,
      image_type: `photo`,
      orientations: `horizontal`,
      safesearch: true,
      page: pageGlobal,
      per_page: limit,
    },
  });

  checkContentQuantity(response.data.totalHits);
  if (response.data.totalHits === 0) {
    const options = {
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      backgroundColor: `#EF4040`,
      messageColor: 'white',
      messageSize: `16`,
      position: 'topRight',
      messageLineHeight: `88`,
      class: `ipa`,
    };
    iziToast.error(options);
  }
  if (pageGlobal > totalPages && response.data.totalHits !== 0) {
    iziToast.error({
      position: 'topRight',
      message: "We're sorry, there are no more posts to load",
    });
    loader.classList.add(`dis-active`);
    loadMoreBtn.disactive;
  }
  requestGlobal = request;
  return response.data;
}

export default fetchImg;
