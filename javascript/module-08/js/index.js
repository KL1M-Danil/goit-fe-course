"use strict";

const galleryItems = [
  {
    preview: "img/tech01-pre.jpeg",
    fullview: "img/tech01-full .jpeg",
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

function createFullView(items) {
  const fullView = document.createElement("div");
  fullView.classList.add("fullview");

  const fullViewImage = document.createElement("img");
  fullViewImage.setAttribute("src", items[0].fullview);
  fullViewImage.setAttribute("alt", items[0].alt);

  fullView.appendChild(fullViewImage);

  return fullView;
}

function createPreview(items) {
  const previewGallery = document.createElement("ul");
  previewGallery.classList.add("preview");

  for (const item of items) {
    const el = createPreviewImage(item);
    previewGallery.append(el);
  }

  return previewGallery;
}

function createPreviewImage({ preview, fullview, alt }) {
  const previewItem = document.createElement("li");

  const previewImage = document.createElement("img");
  previewImage.setAttribute("src", preview);
  previewImage.setAttribute("data-fullview", fullview);
  previewImage.setAttribute("alt", alt);

  previewItem.appendChild(previewImage);

  return previewItem;
}

const fullview = createFullView(galleryItems);
const preview = createPreview(galleryItems);

imageGallery.append(fullview, preview);

preview.addEventListener("click", onPreviewClick);

const images = document.querySelectorAll("img");

function onPreviewClick(event) {
  const target = event.target;
  const nodeName = target.nodeName;
  const fullViewImage = fullview.firstChild;

  if (nodeName !== "IMG") return;

  fullViewImage.setAttribute("src", target.dataset.fullview);

  images.forEach(img => {
    if (img !== target) {
      img.classList.remove("img-active");
      img.classList.add("img-hidden");
    } else {
      img.classList.add("img-active");
      img.classList.remove("img-hidden");
    }
  });
}
