import axios from 'axios';

// async function fetchImages(query, page) {
//   const key = '19126465-26bd87e2bd73b1dc294301845';
//   axios.defaults.baseURL = `https://pixabay.com/api`;
// const url = `/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;

//   // console.dir(axios);
//   const response = await axios.get(url);
//   const data = await response.data;
//   const pics = await data.hits;

//   return pics;
// }

// export default fetchImages;

const apiService = async (query, page) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=19126465-26bd87e2bd73b1dc294301845&image_type=photo&orientation=horizontal&per_page=12`,
  );

  return data.hits;
};

export default apiService;
