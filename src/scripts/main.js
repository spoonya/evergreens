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
  validateFormQuestions,
  validateFormQuiz1,
  validateFormQuiz2
} from './forms';
import controlTabs from './tabs';
import lazyLoadObserver from './lazyload';
import controlModal from './modal';
import controlFilters from './filters';

lazyLoadObserver.observe();

validateFormCatalog();
validateFormBiologist();
validateFormCostCare();
validateFormQuestions();
validateFormCatalogModal();
validateFormCostCommercial();
validateFormCostProduct();
validateFormQuiz1();
validateFormQuiz2();

controlTabs();
controlModal();
controlFilters();

initImagesCompare();
