import './sass/main.scss';
import { form , loadMore} from './js/nav';
import { Notify } from 'notiflix';
import { getEm, startPage } from './js/fetch';
import { createGallery} from './js/createMarkup';
import { gallery, input } from "./js/nav";

let page = 1
const onSubmit = (e) => {
    e.preventDefault();
    gallery.innerHTML = ''
    const inputValue = e.target.searchQuery.value.trim()
    if (!inputValue) {
        return Notify.warning('Тут пусто!');
    }
    

    getEm(inputValue)
        .then(({ data }) => {
        if (data.totalHits === 0) {
            Notify.warning('Нічого не знайдено')
        } else {
            Notify.success('Ось що ми змогли знайти')
            createGallery(data.hits)
        }
        if (data.totalHits > startPage) {
            page = 2;
            loadMore.classList.remove('visually-hidden');
        }
        })
    .catch(error => {
        Notify.failure('Халепа');
    });
    
}



function onLoadMore() {
    const value = input.value.trim();
    

  getEm(value, page)
      .then(({ data }) => {
        Notify.info(`Сторінка ${page}`)
      const numberOfPage = Math.ceil(data.totalHits / startPage);
      if (numberOfPage > page) {
        page += 1;
      } else if (numberOfPage >= page) {
          page = 1;
          loadMore.classList.add('visually-hidden')
        Notify.failure('Кінець!');
      }
      createGallery(data.hits);
    })
      .catch((error) => {
          console.log(error);
      });
}


form.addEventListener('submit', onSubmit)
loadMore.addEventListener('click', onLoadMore)
