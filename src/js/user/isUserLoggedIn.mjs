import { getUserAuth } from "../components/userAuth.mjs";

export function isUserLoggedIn() {
  const checkAuth = getUserAuth();

  if (checkAuth.length === 0) {
    location.href = "/login.html";
  } else {
    return;
  }
}