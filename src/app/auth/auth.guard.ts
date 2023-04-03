export const authGuard = () => {
  // AUTH GUARD
  let token = localStorage.getItem('token') || null;
  return token && token.length ? true : false;
};