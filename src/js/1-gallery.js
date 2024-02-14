import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { images } from "./img";

const galleryContainer = document.querySelector('.gallery');

renderGallery(images);

function renderGallery(images) {
  const markup = images
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery-item">
          <a class="gallery-link" href="${original}">
            <img
              class="gallery-image"
              src="${preview}"
              alt="${description}"
            />
          </a>
        </li>`
    )
    .join('');

  galleryContainer.innerHTML = markup;
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionDelay: 250
});
