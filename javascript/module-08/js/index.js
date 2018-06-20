"use strict";

const galleryItems = [
  {
    preview: "img/tech01-pre.jpeg",
    fullview: "img/tech01-full.jpeg",
    alt: "technology picture #1"
  },
  {
    preview: "img/tech02-pre.jpeg",
    fullview: "img/tech02-full.jpeg",
    alt: "technology picture #2"
  },
  {
    preview: "img/tech03-pre.jpeg",
    fullview: "img/tech03-full.jpeg",
    alt: "technology picture #3"
  },
  {
    preview: "img/tech04-pre.jpeg",
    fullview: "img/tech04-full.jpeg",
    alt: "technology picture #4"
  },
  {
    preview: "img/tech05-pre.jpeg",
    fullview: "img/tech05-full.jpeg",
    alt: "technology picture #5"
  },
  {
    preview: "img/tech06-pre.jpeg",
    fullview: "img/tech06-full.jpeg",
    alt: "technology picture #6"
  }
];

const imageGallery = document.querySelector(".js-image-gallery");

function createPreviewItem(arr) {
  const newArr = arr.reduce((acc, obj) => acc.push(createPreviewImage(obj)), []);
  console.log(newArr);
  return newArr;
}


function createImageGallary({ fullview, alt }) {
  const fullView = document.createElement("div");
  fullView.classList.add("fullview");

  const fullViewImage = document.createElement("img");
  fullViewImage.setAttribute("src", fullview);
  fullViewImage.setAttribute("alt", alt);

  fullView.appendChild(fullViewImage);

  const previewGallery = document.createElement("ul");
  previewGallery.classList.add("preview");

  previewGallery.append(createPreviewImage(galleryItems));

  imageGallery.append(fullView, previewGallery);
  return imageGallery;
}

function createPreviewImage({ preview, fullview, alt }) {
  const previewItem = document.createElement("li");

  const previewImage = document.createElement("img");
  previewImage.setAttribute("src", preview);
  previewImage.setAttribute("data-fullview", fullview);
  previewImage.setAttribute("alt", alt);

  previewItem.appendChild(previewImage);

  //console.log(previewItem);
  return previewItem;
}

createImageGallary(galleryItems);
createPreviewItem(galleryItems);
createPreviewImage(galleryItems);
