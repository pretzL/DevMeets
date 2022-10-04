import { profileHeader } from "../../util/variables.mjs";
import { editProfileMediaFormTemplate } from "./profileFormTemplate.mjs";
import { updateProfileMedia } from "./updateProfile.mjs";

export function buildEditForm(type) {
  const container = document.createElement("div");
  container.classList = "container d-flex justify-content-center align-items-center pt-3";
  profileHeader.appendChild(container);

  const formTemplate = editProfileMediaFormTemplate(type);
  container.innerHTML = formTemplate;

  const editAvatar = document.querySelector(".update-avatar-form");
  const editBanner = document.querySelector(".update-banner-form");

  const inputAvatar = document.querySelector("#edit-avatar-input");
  const inputBanner = document.querySelector("#edit-banner-input");

  if (editAvatar) {
    editAvatar.addEventListener("submit", (e) => {
      e.preventDefault();
      updateProfileMedia("avatar", inputAvatar.value);
    });
  }

  if (editBanner) {
    editBanner.addEventListener("submit", (e) => {
      e.preventDefault();
      updateProfileMedia("banner", inputBanner.value);
    });
  }
}
