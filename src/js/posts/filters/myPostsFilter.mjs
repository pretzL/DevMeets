import { getUserInfo } from "../../user/getUserInfo.mjs";

const userInfo = getUserInfo();

// Sort passed in array if it was posted by currently logged in user
export function sortMyPosts(array) {
  const sortedArray = array.filter((item) => {
    if (item.author.name === userInfo.name) {
      return true;
    } else {
      return false;
    }
  });
  return sortedArray;
}