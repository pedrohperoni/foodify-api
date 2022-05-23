import dotenv from "dotenv";
import { createApi } from "unsplash-js";
import * as nodeFetch from "node-fetch";
dotenv.config();

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
  fetch: nodeFetch.default as unknown as typeof fetch,
});

export async function getImageByName(image: string) {
  const photo = await unsplash.search.getPhotos({
    query: image,
    page: 1,
    perPage: 1,
    orientation: "landscape",
  });
  if (photo.type === "error") {
    throw { type: "service_unavailable", message: "Error with Unsplash API" };
  }
  const photoUrl = photo.response.results[0].urls.small;
  return photoUrl;
}

export async function getRandomFace() {
  const face = await unsplash.search.getPhotos({
    query: "face",
    page: Math.random() * 10,
    perPage: 1,
    orientation: "portrait",
  });
  if (face.type === "error") {
    throw { type: "service_unavailable", message: "Error with Unsplash API" };
  }
  const faceUrl = face.response.results[0].urls.raw;
  return faceUrl;
}

export async function getRandomBackground() {
  const background = await unsplash.search.getPhotos({
    query: "background",
    page: Math.random() * 10,
    perPage: 1,
    orientation: "landscape",
  });
  if (background.type === "error") {
    throw { type: "service_unavailable", message: "Error with Unsplash API" };
  }
  const backgroundUrl = background.response.results[0].urls.raw;
  return backgroundUrl;
}
