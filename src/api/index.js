import axios from "axios";

axios.defaults.withCredentials = true;

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchBlog = (id) => API.get(`/blogs/${id}`);
export const fetchBlogs = (page) => API.get(`/blogs?page=${page}`);

export const createBlog = (newBlog) => API.post(`/blogs`, newBlog);
export const updateBlog = (id, updatedBlog) =>
  API.post(`/blogs/${id}`, updatedBlog);
export const deleteBlog = (id) => API.delete(`/blogs/${id}`);
export const likeBlog = (id) => API.post(`/blogs/${id}/likeBlog`);

export const signIn = (userData) => API.post("/user/signin", userData);
export const signUp = (userData) => API.post("/user/signup", userData);
export const signOut = () => API.get("/user/signout");
export const updateUser = (userData) => API.post("/user/update", userData);
export const getUserInfo = () => API.get("/user/info");
