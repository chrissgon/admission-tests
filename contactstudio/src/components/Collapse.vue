<template>
  <!-- collapse -->
  <article
    class="collapse"
    :class="[collapsed ? 'collapsed' : '']"
    @click="change"
  >
    <!-- title -->
    <header class="title">
      <h4>{{ title }}</h4>
      <p>></p>
    </header>
    <!-- message -->
    <p class="message">{{ message }}</p>
  </article>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Collapse",
  props: {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  setup() {
    //   data
    const collapsed = ref(false);

    // methods
    const change = () => (collapsed.value = !collapsed.value);

    return {
      collapsed,
      change,
    };
  },
};
</script>

<style>
/* collapse */
.collapse {
  width: 100%;
  max-height: 50px;

  border: 1px solid #eee;
  border-radius: 5px;
  cursor: pointer;

  overflow: hidden;

  padding: 15px 20px;
  margin-bottom: 15px;
}

.collapse.collapsed {
  max-height: inherit !important;
}

/* title */
.collapse .title {
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  white-space: nowrap;

  margin-bottom: 15px;
}

.collapse .title h4 {
  width: 100%;

  text-overflow: ellipsis;
  white-space: nowrap;

  overflow: hidden;

  margin-right: 15px;
}

.collapse.collapsed .title h4 {
  white-space: initial !important;
}

.collapse.collapsed .title p {
  transform: rotate(270deg);
}
</style>
