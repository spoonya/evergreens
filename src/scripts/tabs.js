/* eslint-disable no-undef */
import { CLASSES } from './constants';

function controlTabs() {
  if (!document.querySelector('[data-tabs]')) return;

  const tabs = new Tabby('[data-tabs]');

  const filter = document.querySelector('#filter-tabs');

  if (!filter) return;

  let activeBtn = filter.querySelector('[data-tabby-default]');

  activeBtn.classList.add(CLASSES.active);

  filter.addEventListener('click', (e) => {
    if (e.target.tagName !== 'A') return;

    if (!e.target.classList.contains(CLASSES.active)) {
      e.target.classList.add(CLASSES.active);

      activeBtn.classList.remove(CLASSES.active);

      activeBtn = e.target;
    }
  });
}

export default controlTabs;
