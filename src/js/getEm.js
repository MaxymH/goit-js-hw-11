import { countriesList, country } from './nav'

const countriesListCreate = arr => {
    const markup = arr.map(({ name, flags }) => {
        return `<li class="list__item">
        <img src="${flags.svg}" alt="${name.official} flag" class="flag">
        <p class="name_official">${name.official}</p>
        </li>`
    })
        .join('');
    addEm(markup, '')
}

const countriesInfoCreate = arr => {
    const markup = arr.map(({ name, flags, languages, population, capital }) => {
        return `<div class="country">
        <img src="${flags.svg}" alt="${name.official}" class="flag country_flag">
        <h2 class="country_name">${name.official}</h2>
      </div>
      <ul class="country_list">
        <li class="country_item">Capital: ${capital}</li>
        <li class="country_item"> Language: ${Object.values(languages)}</li>
        <li class="country_item">Population: ${population}</li>
      </ul>
    </div>`
    })
        .join('');
    addEm('', markup)
}


const addEm = (listM, divM) => {
    countriesList.innerHTML = listM
    country.innerHTML = divM
}

export { countriesListCreate, countriesInfoCreate, addEm};