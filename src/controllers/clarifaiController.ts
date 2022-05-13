import { Request, Response } from "express";
import dotenv from "dotenv";
import fetch from "node-fetch";
dotenv.config();

const USER_ID = process.env.USER_ID;
const PAT = process.env.PAT;
const APP_ID = process.env.APP_ID;

export async function getTitleFromAPI(req: Request, res: Response) {


  const MODEL_ID = "general-english-image-caption-clip";
  const MODEL_VERSION_ID = "2489aad78abf4b39a128fbbc64a8830c";
  const IMAGE_URL =
    "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80";

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

 fetch(
    "https://api.clarifai.com/v2/models/" +
      MODEL_ID +
      "/versions/" +
      MODEL_VERSION_ID +
      "/outputs",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      res.send(JSON.parse(result).outputs[0].data.text.raw)
    })
    .catch((error) => res.send(error));
}

export async function getFoodDataFromAPI(req: Request, res:Response){
   const test = 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'

   const MODEL_ID = 'bd367be194cf45149e75f01d59f77ba7';
   const IMAGE_URL = test;

   const raw = JSON.stringify({
       "user_app_id": {
           "user_id": USER_ID,
           "app_id": APP_ID
       },
       "inputs": [
           {
               "data": {
                   "image": {
                       "url": IMAGE_URL
                   }
               }
           }
       ]
   });
   const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + PAT,
      },
      body: raw,
    };

   fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs", requestOptions)
       .then(response => response.text())
       .then(result =>  res.send(JSON.parse(result).outputs[0].data.concepts.filter(data => data.value >= 0.9)))
       .catch(error => console.log('error', error));
}