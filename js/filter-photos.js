import {renderPhotos} from './photos.js';
import {debounce} from './utils.js';

const PHOTO_AMOUNT = 10;

const filtersContainer = document.querySelector('.img-filters');
const filtersElement = filtersContainer.querySelector('.img-filters__form');

let photos = [];
let currentFilter = '';

const PHOTO_FILTERS = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

// функция сортировки по кол-ву комментариев
const getDiscussedPhoto = (photoA, photoB) => photoB.comments.length - photoA.comments.length;

const randomSort = () => 0.5 - Math.random();

const turnFilterOn = (loadedPhotos) => {
  filtersContainer.classList.remove('img-filters--inactive');
  photos = [...loadedPhotos];
  currentFilter = PHOTO_FILTERS.DEFAULT;
};


const filterPhotos = () => {
  switch (currentFilter) {
    case PHOTO_FILTERS.RANDOM:
      return [...photos].sort(randomSort).slice(0, PHOTO_AMOUNT);
    case PHOTO_FILTERS.DISCUSSED:
      return [...photos].sort(getDiscussedPhoto);
    default:
      return [...photos];
  }
};

const onFilterClick = (cb) => {
  const debouncedCallback = debounce(cb);

  filtersElement.addEventListener('click', (evt) => {
    if(!evt.target.classList.contains('img-filters__button')) {
      return;
    }
    const clickedButton = evt.target;
    if(clickedButton.id === currentFilter) {
      return;
    }

    filtersElement.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    clickedButton.classList.add('img-filters__button--active');
    currentFilter = clickedButton.id;
    debouncedCallback(filterPhotos());
  });
};


export { getDiscussedPhoto, turnFilterOn, filterPhotos, onFilterClick};

