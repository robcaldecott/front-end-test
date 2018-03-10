const base = "https://jsonplaceholder.typicode.com";

const get = async url => {
  const response = await fetch(`${base}${url}`);
  return await response.json();
};

export const users = () => get("/users");

export const posts = userId => get(`/posts?userId=${userId}`);

export const comments = postId => get(`/comments?postId=${postId}`);

export const todos = userId => get(`/todos?userId=${userId}`);

export const albums = userId => get(`/albums?userId=${userId}`);

export const photos = albumId => get(`/photos?albumId=${albumId}`);
