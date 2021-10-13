/* eslint-disable no-unused-vars */
import 'core-js/es6/promise';
import 'regenerator-runtime/runtime';

import * as sliders from './sliders';
import viewer from './compare';
import { validateFormCatalog } from './forms';
import controlTabs from './tabs';
import lazyLoadObserver from './lazyload';
import controlFilterButtons from './fiter-drafts';
import { controlUpload } from './sliders/quiz';

validateFormCatalog();

controlTabs();

controlFilterButtons();

controlUpload();

lazyLoadObserver.observe();
