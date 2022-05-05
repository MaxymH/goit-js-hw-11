const axios = require('axios').default;
const startPage = 40;

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
const search =
'?key=27185994-5d510187811c2a776b569e1b6&image_type=photo&orientation=horizontal&safesearch=true';
async function getEm(query, page = 1) {
try {
    return await axios.get(`/${search}&per_page=${startPage}&page=${page}&q=${query}`);
} catch (error) {
    console.error(error);
}
}

export { getEm, startPage };
