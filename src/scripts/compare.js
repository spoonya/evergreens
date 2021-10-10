/* eslint-disable no-undef */
const element = document.querySelector('#image-compare');

const options = {
  smoothing: true,
  smoothingAmount: 100
};

const viewer = new ImageCompare(element, options).mount();

export default viewer;
