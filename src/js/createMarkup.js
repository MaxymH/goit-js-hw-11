import { gallery } from "./nav";


const createGallery = (e) => {
    const markup = e.map(arr => {
    const {webformatURL, tags, likes, views, comments, downloads } = arr
      return  `<div class="photo-card">
    <img src="${webformatURL}" alt="${tags}" class="img"  loading="lazy" />
    <div class="info">
    <p class="info-item">
    <b>Likes ${likes}</b>
    </p>
    <p class="info-item">
    <b>Views: ${views}</b>
    </p>
    <p class="info-item">
    <b>Comments: ${comments}</b>
    </p>
    <p class="info-item">
    <b>Downloads: ${downloads}</b>
    </p>
    </div>
    </div>`;
    })
        .join('')
    addEm(markup)
    
}

const addEm = (markup = "") => {
  gallery.insertAdjacentHTML('beforeend', markup)
}

export {createGallery}