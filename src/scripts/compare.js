/* eslint-disable no-undef */

function initImagesCompare() {
  const imagesCompare = document.querySelector('#image-compare');

  if (!imagesCompare) return;

  const options = {
    smoothing: true,
    smoothingAmount: 100
  };

  const viewer = new ImageCompare(imagesCompare, options).mount();
}

export default initImagesCompare;
