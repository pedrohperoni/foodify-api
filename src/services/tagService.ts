import * as tagsRepository from "../repositories/tagsRepository.js";

export async function getTop3Tags() {
  const top3TagIdsAndScore = await tagsRepository.getTopTags(3);
  const tagIdArray = fixTagIdsObject(top3TagIdsAndScore);
  const tagArrayWithNamesAndScore = getTagNamesById(tagIdArray);
  return tagArrayWithNamesAndScore;
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
