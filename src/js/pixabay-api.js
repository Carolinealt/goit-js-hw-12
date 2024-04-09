const searchParams = new URLSearchParams({
    key: `21174821-fd3fd6848262c16aee96184b8`,
    q: '',
    image_type: `photo`,
    orientations: `horizontal`,
    safesearch: true,
  });
  
  function createUrl(request) {
    searchParams.set(`q`, `${request}`);
    return `https://pixabay.com/api/?${searchParams}`;
  }
  
  function fetchImg(request) {
    return fetch(`${createUrl(request)}`)
      .then(r => {
        return r.json();
      })
      .catch(e => console.log(e));
  }
  
  export default fetchImg;