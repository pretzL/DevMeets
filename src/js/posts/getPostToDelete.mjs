import { deletePost } from "./deletePost.mjs";

export function getPostToDelete() {
  const deletePostButton = document.querySelectorAll(".delete-post");

  // Clicking the Delete button in the cogwheel, targets the closest post and grabs the ID
  // and feeds it into the deletePost function.

  deletePostButton.forEach((e) => {
    e.addEventListener("click", (i) => {
      const closestPost = i.target.closest(".card-body");
      const postId = closestPost.childNodes[3].innerText;

      deletePost(postId);

      // Reloads the website after 1 second after clicking delete.
      setTimeout(location.reload.bind(location), 1000);
    });
  });
}