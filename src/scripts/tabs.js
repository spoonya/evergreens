/* eslint-disable no-undef */
import { CLASSES } from './constants';

const filter = document.querySelector('#filter-tabs');
const filterList = document.querySelector('#reviews-filters-select');
const filterListActive = document.querySelector('#reviews-filters-select span');

function onClickAway() {
  document.addEventListener('click', (e) => {
    if (!filter.classList.contains(CLASSES.active)) return;

    if (e.target !== filterList) {
      filter.classList.remove(CLASSES.active);
      filterList.classList.remove(CLASSES.active);
    }
  });
}

function addClickEvtToFilterActive() {
  filterList.addEventListener('click', () => {
    filter.classList.toggle(CLASSES.active);
    filterList.classList.toggle(CLASSES.active);
  });
}

function controlTabs() {
  if (!document.querySelector('[data-tabs]')) return;

  if (!filter) return;

  const tabs = new Tabby('[data-tabs]');

  let activeBtn = filter.querySelector('[data-tabby-default]');

  activeBtn.classList.add(CLASSES.active);

  filter.addEventListener('click', (e) => {
    if (e.target.tagName !== 'A') return;

    if (!e.target.classList.contains(CLASSES.active)) {
      e.target.classList.add(CLASSES.active);

      activeBtn.classList.remove(CLASSES.active);

      filterListActive.textContent = e.target.textContent;

      activeBtn = e.target;
    }
  });

  addClickEvtToFilterActive();
  onClickAway();
}

export default controlTabs;
