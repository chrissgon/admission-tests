import { getPostsByID } from "@/api/posts";

export default {
  namespaced: true,

  state: {
    posts: [],
  },

  actions: {
    get: async ({ commit }) => {
      try {
        const posts = await getPostsByID(1);
        commit("refresh", posts);
      } catch {
        console.log("erro");
      }
    },
  },

  mutations: {
    refresh: (state, posts) => {
      state.posts = posts;
    },
  },
};
