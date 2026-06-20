<script setup lang="ts">
import { useData, Content } from "vitepress";
import { computed } from "vue";
import SeasonsFalling from "vue-seasons-falling";
import NavBar from "./components/NavBar.vue";
import HomePage from "./components/HomePage.vue";

const { frontmatter } = useData();
const isHome = computed(() => frontmatter.value.layout === "home");
</script>

<template>
  <div class="jtt-layout">
    <!-- Falling Petals on all pages -->
    <SeasonsFalling
      class="petals-layer"
      season="spring"
      :amount="150"
      :speed="1.5"
      :wind="0.5"
      :swing="1"
      :size="8"
      :opacity="0.85"
      color="#ffb7c5"
      :fullScreen="true"
    />

    <NavBar />
    <HomePage v-if="isHome" />
    <main v-else class="jtt-page">
      <div class="jtt-page-container">
        <Content class="page-content" />
      </div>
    </main>
  </div>
</template>

<style>
.jtt-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.petals-layer {
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
}

.jtt-page {
  flex: 1;
}

.jtt-page-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
}


.jtt-page-container h1 {
  font-family: var(--jtt-font-title);
  color: var(--jtt-pink-dark);
}

.jtt-page-container h2 {
  font-family: var(--jtt-font-title);
  color: var(--jtt-pink);
  margin-top: 32px;
}

.jtt-page-container h3 {
  color: var(--jtt-text-dark);
  margin-top: 24px;
}

.jtt-page-container p {
  color: var(--jtt-text);
  line-height: 1.8;
  margin: 12px 0;
}

.jtt-page-container ul {
  padding-left: 24px;
}

.jtt-page-container li {
  color: var(--jtt-text);
  line-height: 1.8;
}
</style>
