import * as tagsRepository from "../repositories/tagsRepository.js";
import * as unsplashService from "../services/unsplashService.js"

export async function getTop3Tags(number: number) {
  const top3TagIdsAndScore = await tagsRepository.getTopTags(number);
  if(top3TagIdsAndScore.length === 0){
     throw { type: "not_found", message: "No tags have been found"}
  }
  const tagIdArray = fixTagIdsObject(top3TagIdsAndScore);
  let tagArrayWithNamesAndScore = await getTagNamesById(tagIdArray);
  const getFirstTagImage = await unsplashService.getImageByName(tagArrayWithNamesAndScore[0].name)
  tagArrayWithNamesAndScore[0].imageUrl = getFirstTagImage

  return tagArrayWithNamesAndScore
}

function fixTagIdsObject(tags) {
  const tagsArray = [];
  for (let i = 0; i < tags.length; i++) {
    const tag = {
      tagId: tags[i].tagId,
      score: tags[i]._count.tagId,
    };
    tagsArray.push(tag);
  }
  return tagsArray;
}

async function getTagNamesById(tags) {
  const tagArray = [];
  for (const tag of tags) {
    const tagName = await tagsRepository.getTagNameById(tag.tagId);
    const fixedTag = {
      name: tagName.name,
      score: tag.score,
    };
    tagArray.push(fixedTag);
  }
  return tagArray;
}
