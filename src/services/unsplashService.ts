import dotenv from "dotenv";
import { createApi } from "unsplash-js";
import * as nodeFetch from "node-fetch";
dotenv.config();

export async function getImageByName(image: string) {
  const unsplash = createApi({
    accessKey: process.env.UNSPLASH_ACCESS_KEY,
    fetch: nodeFetch.default as unknown as typeof fetch,
  });
  const photo = await unsplash.search.getPhotos({
    query: image,
    page: 1,
    perPage: 1,
    orientation: "landscape",
  });
  const photoUrl = photo.response.results[0].urls.raw
  return photo
}
