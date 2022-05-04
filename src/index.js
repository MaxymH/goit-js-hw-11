import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';
import { input } from './js/nav';
import { fetchCountries } from './js/fetchCountries.js'
import { countriesListCreate, countriesInfoCreate , addEm} from './js/getEm';


const DEBOUNCE_DELAY = 500;


// fetch(
//     `https://restcountries.com/v3.1/name/peru?fields=name,capital,population,flags,languages`,
// ).then(response => {
//     console.log(response);
//     if (!response.ok) {
//         throw new Error(response.status);
//     }
// }
// )





const df = (e) => {
    if (e.target.value.trim().length === 0) {
        addEm('','')
        return
    }
    fetchCountries(e.target.value.trim())
        .then(arr => {
        if (arr.length >= 10) {
        return Notify.warning('Можна детальніше?');
        }
        if (arr.length > 2 && arr.length < 10) {
        Notify.info('Можна ще більш детальніше?');
        return countriesListCreate(arr)
        }
        if (arr.length === 1) {
        Notify.success('Успіх');
        return countriesInfoCreate(arr)
        }
        })    
            .catch(error => {
            Notify.warning('Халепа! Такої країни не існує');
            });
}




input.addEventListener('input', debounce(df, DEBOUNCE_DELAY))


