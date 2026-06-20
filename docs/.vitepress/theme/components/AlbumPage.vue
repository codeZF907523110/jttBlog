<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

interface AlbumItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  categoryColor: string;
  date: string;
  slug: string;
}

const albums = ref<AlbumItem[]>([
  { id: 1, title: "东京漫游记", slug: "dongjing-manyouji", description: "东京街头巷尾的点点滴滴，涩谷十字路口的人潮、浅草寺的香火、秋叶原的霓虹", image: "https://picsum.photos/seed/album1/800/500", category: "旅行", categoryColor: "#87ceeb", date: "2025-12-10" },
  { id: 2, title: "春之絮语", slug: "chun-zhi-xuyu", description: "樱花季的京都，粉色的花瓣洒满整个古都，哲学之道与岚山的绝美瞬间", image: "https://picsum.photos/seed/album2/800/500", category: "旅行", categoryColor: "#87ceeb", date: "2025-11-25" },
  { id: 3, title: "夏日的风", slug: "xiari-de-feng", description: "冲绳的海，蓝天白云，古宇利岛的透明海水与美丽海水族馆", image: "https://picsum.photos/seed/album3/800/500", category: "旅行", categoryColor: "#87ceeb", date: "2025-09-15" },
  { id: 4, title: "秋日私语", slug: "qiuri-siyu", description: "金黄的银杏，火红的枫叶，奈良公园的小鹿与京都永观堂的夜枫", image: "https://picsum.photos/seed/album4/800/500", category: "旅行", categoryColor: "#87ceeb", date: "2025-08-20" },
  { id: 5, title: "工作室日常", slug: "gongzuoshi-richang", description: "记录在工作室的每一天，画笔、咖啡、音乐与灵感交织的创作时光", image: "https://picsum.photos/seed/album5/800/500", category: "生活", categoryColor: "#f4a7b9", date: "2025-07-12" },
  { id: 6, title: "猫咪物语", slug: "maomi-wuyu", description: "街角遇见的每一只猫，它们的慵懒与优雅都是生活最好的礼物", image: "https://picsum.photos/seed/album6/800/500", category: "生活", categoryColor: "#f4a7b9", date: "2025-06-08" },
  { id: 7, title: "甜品日记", slug: "tianpin-riji", description: "探访各地甜品店，从法式甜点到日式和果子，每一口都是幸福", image: "https://picsum.photos/seed/album7/800/500", category: "美食", categoryColor: "#fbbf24", date: "2025-05-20" },
  { id: 8, title: "摄影练习", slug: "sheying-lianxi", description: "人像、风景、街拍，用镜头捕捉光影交错中的美好", image: "https://picsum.photos/seed/album8/800/500", category: "摄影", categoryColor: "#a8e6cf", date: "2025-04-15" },
]);

const allCategories = computed(() => [...new Set(albums.value.map((a) => a.category))]);
const getCategoryColor = (cat: string) => albums.value.find((a) => a.category === cat)?.categoryColor || "#ccc";

const activeCategory = ref("");

const filteredAlbums = computed(() => {
  if (!activeCategory.value) return albums.value;
  return albums.value.filter((a) => a.category === activeCategory.value);
});

onMounted(() => {
  const params = new URLSearchParams(window.location.search);
  const cat = params.get("category");
  if (cat) activeCategory.value = decodeURIComponent(cat);
});

const selectCategory = (cat: string) => {
  activeCategory.value = activeCategory.value === cat ? "" : cat;
};
</script>

<template>
  <section class="album-page">
    <!-- Banner: ~1/3 viewport, full width -->
    <div class="album-banner">
      <div class="banner-decorations">
        <span class="deco deco-1">🌸</span>
        <span class="deco deco-2">📷</span>
        <span class="deco deco-3">💫</span>
        <span class="deco deco-4">🌟</span>
        <span class="deco deco-5">🦋</span>
        <span class="deco deco-6">🌿</span>
        <span class="deco deco-7">🎞️</span>
        <span class="deco deco-8">📸</span>
        <span class="deco deco-9">💖</span>
        <span class="deco deco-10">✨</span>
        <span class="deco deco-11">🍃</span>
        <span class="deco deco-12">🎆</span>
        <span class="deco deco-13">🌻</span>
        <span class="deco deco-14">🕊️</span>
        <span class="deco deco-15">💐</span>
      </div>
      <div class="banner-wave">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,30 C240,10 480,50 720,30 C960,10 1200,50 1440,30 L1440,60 L0,60 Z" fill="var(--jtt-bg)" />
        </svg>
      </div>
    </div>

    <!-- Title below banner -->
    <div class="page-title">
      <h1>📷 相册</h1>
      <p class="title-desc">用镜头记录生活中的每一个美好瞬间</p>
      <span class="title-count">共 {{ albums.length }} 个相册</span>
    </div>

    <div class="album-body">
      <!-- Category Filter -->
      <div class="filter-bar">
        <span class="filter-tag" :class="{ active: !activeCategory }" @click="selectCategory('')">全部</span>
        <span
          v-for="cat in allCategories"
          :key="cat"
          class="filter-tag"
          :class="{ active: activeCategory === cat }"
          :style="activeCategory === cat ? { backgroundColor: getCategoryColor(cat), borderColor: getCategoryColor(cat), color: '#fff' } : {}"
          @click="selectCategory(cat)"
        >{{ cat }}</span>
      </div>

      <div class="album-grid">
        <a v-for="item in filteredAlbums" :key="item.id" :href="`/album/${item.slug}`" class="album-card">
          <div class="card-image-wrapper">
            <img :src="item.image" :alt="item.title" class="card-image" />
            <span class="card-category-badge" :style="{ backgroundColor: item.categoryColor }">{{ item.category }}</span>
          </div>
          <div class="card-body">
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-desc">{{ item.description }}</p>
            <time class="card-date">{{ item.date }}</time>
          </div>
        </a>
      </div>

      <div v-if="filteredAlbums.length === 0" class="empty-state">📷 该分类下暂无相册</div>
    </div>
  </section>
</template>

<style scoped>
.album-page {
  /* full-width banner requires breaking out of parent container */
  margin: 0 calc(-50vw + 50%);
  width: 100vw;
}

/* ===== Banner (1/3 viewport, same style as homepage) ===== */
.album-banner {
  position: relative;
  height: 35vh;
  min-height: 300px;
  background: linear-gradient(135deg, #ffe0ec 0%, #fde2f3 30%, #e8d5f5 70%, #d4e8f9 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.banner-decorations {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.deco {
  position: absolute;
  opacity: 0.5;
  animation: float 6s ease-in-out infinite;
}

.deco-1  { top: 5%;  left: 5%;  font-size: 30px; animation-delay: 0s; }
.deco-2  { top: 10%; left: 18%; font-size: 20px; animation-delay: 0.3s; }
.deco-3  { top: 8%;  right: 10%; font-size: 24px; animation-delay: 0.6s; }
.deco-4  { top: 18%; left: 35%; font-size: 18px; animation-delay: 0.9s; }
.deco-5  { top: 15%; right: 25%; font-size: 26px; animation-delay: 1.2s; }
.deco-6  { top: 30%; left: 8%;  font-size: 22px; animation-delay: 1.5s; }
.deco-7  { top: 25%; right: 5%;  font-size: 20px; animation-delay: 1.8s; }
.deco-8  { top: 45%; left: 22%; font-size: 18px; animation-delay: 2.1s; }
.deco-9  { top: 50%; right: 18%; font-size: 24px; animation-delay: 2.4s; }
.deco-10 { top: 60%; left: 40%; font-size: 28px; animation-delay: 2.7s; }
.deco-11 { top: 70%; left: 12%; font-size: 22px; animation-delay: 0.15s; }
.deco-12 { top: 75%; right: 8%;  font-size: 20px; animation-delay: 0.45s; }
.deco-13 { top: 85%; left: 30%; font-size: 24px; animation-delay: 1.05s; }
.deco-14 { top: 40%; right: 35%; font-size: 18px; animation-delay: 1.65s; }
.deco-15 { bottom: 5%; right: 22%; font-size: 26px; animation-delay: 2.25s; }

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-12px) rotate(4deg); }
}

/* Page title below banner */
.page-title {
  text-align: center;
  padding: 36px 24px 16px;
}

.page-title h1 {
  font-family: var(--jtt-font-title);
  font-size: 36px;
  color: var(--jtt-pink-dark);
  margin-bottom: 8px;
  text-shadow: 0 2px 12px rgba(255, 107, 157, 0.12);
}

.title-desc {
  font-size: 16px;
  color: var(--jtt-text-light);
  margin-bottom: 8px;
  line-height: 1.6;
}

.title-count {
  display: inline-block;
  font-size: 13px;
  color: var(--jtt-pink);
  padding: 3px 16px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid var(--jtt-pink-light);
}

.banner-wave {
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  line-height: 0;
}

.banner-wave svg {
  width: 100%;
  height: 50px;
}

/* ===== Body ===== */
.album-body {
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 24px 64px;
}

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 32px;
}

.filter-tag {
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 14px;
  border: 1.5px solid var(--jtt-pink-light);
  color: var(--jtt-text);
  background: var(--jtt-bg-card);
  cursor: pointer;
  transition: all 0.25s;
  font-weight: 500;
}

.filter-tag:hover { border-color: var(--jtt-pink); color: var(--jtt-pink); }
.filter-tag.active { border-color: var(--jtt-pink); background: var(--jtt-pink); color: #fff; font-weight: 600; }

/* Album cards larger than portfolio */
.album-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.album-card {
  display: block;
  background: var(--jtt-bg-card);
  border-radius: var(--jtt-radius-lg);
  overflow: hidden;
  box-shadow: var(--jtt-shadow);
  border: 1px solid var(--jtt-pink-lighter);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.album-card:hover { transform: scale(1.03); box-shadow: var(--jtt-shadow-hover); }

.card-image-wrapper { position: relative; overflow: hidden; height: 280px; }
.card-image { width: 100%; height: 100%; object-fit: cover; transition: transform 0.35s; }
.album-card:hover .card-image { transform: scale(1.08); }

.card-category-badge {
  position: absolute; top: 12px; right: 12px; padding: 4px 12px; border-radius: 20px; font-size: 12px; color: #fff; font-weight: 500;
}

.card-body { padding: 20px 24px 24px; }
.card-title { font-size: 18px; color: var(--jtt-text-dark); margin-bottom: 10px; font-weight: 600; }
.card-desc { font-size: 14px; color: var(--jtt-text-light); line-height: 1.7; margin-bottom: 12px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.card-date { font-size: 13px; color: var(--jtt-pink-light); }

.empty-state { text-align: center; padding: 48px; color: var(--jtt-text-light); font-size: 16px; }

@media (max-width: 1024px) {
  .album-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
  .card-image-wrapper { height: 240px; }
}

@media (max-width: 640px) {
  .album-grid { grid-template-columns: 1fr; gap: 24px; }
  .album-body { padding: 32px 16px 48px; }
  .album-banner { height: 28vh; min-height: 240px; }
  .page-title h1 { font-size: 28px; }
  .card-image-wrapper { height: 240px; }
}
</style>
