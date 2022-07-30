import http from "@/config/http";

const getPostsByID = (id) => {
  return http.get(`posts?userId=${id}`);
};

export { getPostsByID };
