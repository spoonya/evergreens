/* eslint-disable no-unused-vars */
import 'core-js/es6/promise';
import 'regenerator-runtime/runtime';

import * as sliders from './sliders';
import initImagesCompare from './compare';
import {
  validateFormBiologist,
  validateFormCatalog,
  validateFormCatalogModal,
  validateFormCostCare,
  validateFormCostProduct,
  validateFormCostCommercial,
  validateFormQuestions
} from './forms';
import controlTabs from './tabs';
import lazyLoadObserver from './lazyload';
import { controlUpload } from './sliders/quiz';
import controlModal from './modal';

lazyLoadObserver.observe();

validateFormCatalog();
validateFormBiologist();
validateFormCostCare();
validateFormQuestions();
validateFormCatalogModal();
validateFormCostCommercial();
validateFormCostProduct();

controlTabs();
controlModal();
controlUpload();

initImagesCompare();
