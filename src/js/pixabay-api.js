import axios from 'axios';

const myApiKey = `21174821-fd3fd6848262c16aee96184b8`;
axios.defaults.baseURL = `https://pixabay.com/`;
let pageGlobal = 1;
let requestGlobal = '';
async function fetchImg(request) {
  if (requestGlobal === request) {
    pageGlobal += 1;
  } else {
    pageGlobal = 1;
  }
  // pageGlobal = requestGlobal === request ? +1 : 1; 
  console.log(pageGlobal);
  const response = await axios.get(`api/`, {
    params: {
      key: `${myApiKey}`,
      q: `${request}`,
      image_type: `photo`,
      orientations: `horizontal`,
      safesearch: true,
      page: pageGlobal,
      per_page: 15,
    },
  });
  requestGlobal = request;
  return response.data;
}

export default fetchImg;
