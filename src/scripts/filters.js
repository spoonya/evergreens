import { CLASSES } from './constants';
import isMediaBreakpoint from './helpers/isMedia';

const filter = document.querySelector('#filter-drafts');
const filterList = document.querySelector('#drafts-filters-select');
const filterListActive = document.querySelector('#drafts-filters-select span');

let isOnMedia = false;

function setFiltersType() {
  if (isMediaBreakpoint() && isOnMedia) return;

  if (isMediaBreakpoint()) {
    isOnMedia = true;

    filter.querySelectorAll('input').forEach((el) => {
      el.type = 'radio';

      if (el.checked) {
        filterListActive.textContent = el
          .closest('label')
          .querySelector('span').textContent;

        el.checked = true;
      } else {
        el.checked = false;
      }
    });
  } else {
    isOnMedia = false;

    filter.querySelectorAll('input').forEach((el) => {
      el.type = 'checkbox';
    });
  }
}

function controlFilters() {
  if (!filter) return;

  filterListActive.textContent = filter
    .querySelector('input:checked')
    .closest('label')
    .querySelector('span').textContent;

  filter.addEventListener('click', (e) => {
    if (e.target.checked) {
      filterListActive.textContent = e.target
        .closest('label')
        .querySelector('span').textContent;
    }
  });

  filterList.addEventListener('click', () => {
    filter.classList.toggle(CLASSES.active);
    filterList.classList.toggle(CLASSES.active);
  });

  document.addEventListener('click', (e) => {
    if (!filter.classList.contains(CLASSES.active)) return;

    if (e.target !== filterList) {
      filter.classList.remove(CLASSES.active);
      filterList.classList.remove(CLASSES.active);
    }
  });

  setFiltersType();

  window.addEventListener('resize', setFiltersType);
}

export default controlFilters;
