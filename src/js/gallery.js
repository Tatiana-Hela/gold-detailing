const fullscreenPhoto = document.querySelector('.gallery__fullscreen');
const galleryPhotos = document.querySelectorAll('.gallery__photo');

galleryPhotos.forEach(photo => {
  photo.addEventListener('click', function () {
    fullscreenPhoto.src = photo.src;
  });
});
