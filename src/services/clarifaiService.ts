import dotenv from "dotenv";
import fetch from "node-fetch";
dotenv.config();

export async function getFoodDescriptionAndTags(url: string) {
  const USER_ID = process.env.USER_ID;
  const PAT = process.env.PAT;
  const APP_ID = process.env.APP_ID;
  const MODEL_VERSION_ID = "2489aad78abf4b39a128fbbc64a8830c";
  const IMAGE_URL = url
  let MODEL_ID = "general-english-image-caption-clip";
  
  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: IMAGE_URL,
          },
        },
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
    },
    body: raw,
  };

  let foodObject= {
    description: "",
    data: [],
  };

  await fetch(
    "https://api.clarifai.com/v2/models/" +
      MODEL_ID +
      "/versions/" +
      MODEL_VERSION_ID +
      "/outputs",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      foodObject.description = JSON.parse(result).outputs[0].data.text.raw;
    })
    .catch((error) => console.log("erro fetch title service",error));

  MODEL_ID = "bd367be194cf45149e75f01d59f77ba7";

  await fetch(
    "https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs",
    requestOptions
  )
    .then((response) => response.text())
    .then(
      (result) =>
        (foodObject.data = JSON.parse(result).outputs[0].data.concepts.filter(
          (data) => data.value >= 0.5
        ))
    )
    .catch((error) => console.log("erro fetch service", error));
    return foodObject
}
