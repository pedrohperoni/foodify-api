import * as postRepository from "../repositories/postRespository.js";
import * as tagsRepository from "../repositories/tagsRepository.js";
import { Posts } from "@prisma/client";

type Post = Omit<Posts, "id">;

export async function createPost(post: Post, tags: string[]) {
  const createdPost = await postRepository.createPost(post)
  const tagIds = await removeDuplicatesAndCreateNewTags(tags);
  await populatePostsTags(createdPost.id, tagIds)
}

function lowerCaseAndRemoveAccents(str: string) {
   return str
     .normalize("NFD")
     .replace(/\p{Diacritic}/gu, "")
     .toLowerCase();
 }
 

async function removeDuplicatesAndCreateNewTags(tags: string[]) {
  const tagIds = [];
  if (tags.length > 0) {
    for (const tag of tags) {
      const normalizedTag = lowerCaseAndRemoveAccents(tag);
      const findTag = await tagsRepository.findTag(normalizedTag);
      if (findTag) tagIds.push(findTag.id);
      if (!findTag) {
        const createdTag = await tagsRepository.createTag(normalizedTag);
        tagIds.push(createdTag.id);
      }
    }
  }
  return tagIds;
}

async function populatePostsTags(postId: number, tags: string[]){

}

