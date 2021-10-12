import { CLASSES } from './constants';

function controlFilterButtons() {
  const filter = document.querySelector('#filter-drafts');

  if (!filter) return;

  const activeDefault = filter.querySelector('ul button');
  activeDefault.classList.add(CLASSES.active);

  filter.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') return;

    if (!e.target.classList.contains(CLASSES.active)) {
      e.target.classList.add(CLASSES.active);
    } else {
      e.target.classList.remove(CLASSES.active);
    }
  });
}

export default controlFilterButtons;
