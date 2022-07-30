<template>
  <!-- header -->
  <Header />
  <!-- posts -->
  <main class="posts">
    <div v-for="(post, i) in posts" :key="i">
      <!-- post -->
      <Collapse :title="post.title" :message="post.body" />
    </div>
  </main>
</template>

<script>
import Header from "@/components/Header";
import Collapse from "@/components/Collapse";

import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    Collapse,
  },
  setup() {
    // data
    const store = useStore();
    const posts = computed(() => store.state.posts.posts);

    // methods
    store.dispatch("posts/get");

    return {
      posts,
    };
  },
};
</script>

<style>
#app .posts {
  margin: 0 25px;
}
</style>
