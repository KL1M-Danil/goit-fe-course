"use strict";

const galleryItems = [
  {
    preview: "img/tech01-pre.jpeg",
    fullview: "img/tech01-full.jpeg",
    alt: "technology picture"
  },
  {
    preview: "img/tech02-pre.jpeg",
    fullview: "img/tech02-full.jpeg",
    alt: "technology picture"
  },
  {
    preview: "img/tech03-pre.jpeg",
    fullview: "img/tech03-full.jpeg",
    alt: "technology picture"
  },
  {
    preview: "img/tech04-pre.jpeg",
    fullview: "img/tech04-full.jpeg",
    alt: "technology picture"
  },
  {
    preview: "img/tech05-pre.jpeg",
    fullview: "img/tech05-full.jpeg",
    alt: "technology picture"
  },
  {
    preview: "img/tech06-pre.jpeg",
    fullview: "img/tech06-full.jpeg",
    alt: "technology picture"
  }
];

const imageGallery = document.querySelector(".js-image-gallery");

function createImageGallary({fullview, alt }) {
  const fullView = document.createElement("div");
  fullView.classList.add("fullview");

  const fullViewImage = document.createElement("img");
  fullViewImage.setAttribute("src", fullview);
  fullViewImage.setAttribute("alt", alt);

  fullView.appendChild(fullViewImage);

  const previewGallery = document.createElement("ul");
  previewGallery.classList.add("preview");

  previewGallery.append(createPreviewImage());

  imageGallery.append(fullView, previewGallery);
  return imageGallery;
}

function createPreviewImage({preview, fullview, alt }) {
  const previewItem = document.createElement("li");

  const previewImage = document.createElement("img");
  previewImage.setAttribute("src", preview);
  previewImage.setAttribute("data-fullview", fullview);
  previewImage.setAttribute("alt", alt);

  previewItem.appendChild(previewImage);

  console.log(previewItem);
  return previewItem;
}

console.log(createPreviewImage(galleryItems))
console.log(createImageGallary(galleryItems))
