
import { renderPhotos } from './photos.js';
import {onFormSubmit, hideUploadOverlay } from './form.js';
import './photo-scale.js';
import './photo-effects.js';
import {getData} from './api.js';
import {turnFilterOn, filterPhotos, onFilterClick} from './filter-photos.js';
import {showGetAlert} from './utils.js';


const onGetImageSuccess = (data) => {
  turnFilterOn(data);
  renderPhotos(filterPhotos());
  onFilterClick(renderPhotos);
};

getData(onGetImageSuccess, showGetAlert);

onFormSubmit(hideUploadOverlay);
