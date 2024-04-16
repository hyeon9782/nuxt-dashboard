export default defineNuxtRouteMiddleware((to, from) => {
  const isLoggedIn = false;
  if (isLoggedIn) {
    console.log("login");
    return navigateTo(to.fullPath);
  }

  return navigateTo("/login");
});
