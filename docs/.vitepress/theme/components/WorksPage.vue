<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  categoryColor: string;
  date: string;
  slug: string;
}

const portfolios = ref<PortfolioItem[]>([
  { id: 1, title: "星辰物语 APP 界面", slug: "xingchen-wuyu-app", description: "一款二次元风格的社交 APP 完整 UI 设计，包含登录、首页、社区、个人中心等 30+ 功能模块页面", image: "https://picsum.photos/seed/design1/800/500", category: "UI设计", categoryColor: "#ff9eb5", date: "2025-12-20" },
  { id: 2, title: "梦幻花园插画集", slug: "menghuan-huayuan-chahua", description: "以花卉为主题的系列插画，融合水彩与数字绘画技法，包含玫瑰、樱花、薰衣草等 20 幅作品", image: "https://picsum.photos/seed/design2/800/500", category: "插画", categoryColor: "#87ceeb", date: "2025-11-15" },
  { id: 3, title: "元气偶像品牌 VI", slug: "yuanqi-ouxiang-pinpai-vi", description: "为虚拟偶像团体「Twinkle Stars」设计的完整品牌视觉识别系统", image: "https://picsum.photos/seed/design3/800/500", category: "品牌设计", categoryColor: "#c3b1e1", date: "2025-10-08" },
  { id: 4, title: "甜蜜糖果图标包", slug: "tianmi-tangguo-tubiao", description: "500+ 个手绘风格的精美图标，适用于各类 APP 和网站", image: "https://picsum.photos/seed/design4/800/500", category: "图标", categoryColor: "#f7cac9", date: "2025-09-22" },
  { id: 5, title: "樱花飞舞动效设计", slug: "yinghua-fei-wu-dongxiao", description: "使用 Lottie 实现的樱花飘落动画，可用于加载页和背景", image: "https://picsum.photos/seed/design5/800/500", category: "动效设计", categoryColor: "#a8d8ea", date: "2025-08-30" },
  { id: 6, title: "星之卡比 3D 建模", slug: "xingzhi-kabi-3d-jianmo", description: "Blender 制作的卡通角色 3D 模型及渲染作品集", image: "https://picsum.photos/seed/design6/800/500", category: "3D设计", categoryColor: "#b5e8c3", date: "2025-07-14" },
  { id: 7, title: "夏日祭海报设计", slug: "xiari-ji-haibao-sheji", description: "为日本夏日祭活动设计的系列宣传海报", image: "https://picsum.photos/seed/design7/800/500", category: "海报设计", categoryColor: "#ffccb5", date: "2025-06-18" },
  { id: 8, title: "森系手绘字体", slug: "senxi-shouhui-ziti", description: "原创手绘字体设计，包含中英文全套字符", image: "https://picsum.photos/seed/design8/800/500", category: "字体设计", categoryColor: "#b5e8c3", date: "2025-05-10" },
  { id: 9, title: "梦幻甜品网页设计", slug: "menghuan-tianpin-wangye", description: "为一家人气甜品店设计的品牌官网，PC+移动双端适配", image: "https://picsum.photos/seed/design9/800/500", category: "网页设计", categoryColor: "#95e1d3", date: "2025-04-02" },
]);

const allCategories = computed(() => [...new Set(portfolios.value.map((p) => p.category))]);
const getCategoryColor = (cat: string) => portfolios.value.find((p) => p.category === cat)?.categoryColor || "#ccc";

const activeCategory = ref("");

const filteredPortfolios = computed(() => {
  if (!activeCategory.value) return portfolios.value;
  return portfolios.value.filter((p) => p.category === activeCategory.value);
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
  <section class="works-page">
    <!-- Banner: ~1/3 viewport, full width -->
    <div class="works-banner">
      <div class="banner-decorations">
        <span class="deco deco-1">🌸</span>
        <span class="deco deco-2">⭐</span>
        <span class="deco deco-3">💫</span>
        <span class="deco deco-4">🎀</span>
        <span class="deco deco-5">✨</span>
        <span class="deco deco-6">🎨</span>
        <span class="deco deco-7">🌟</span>
        <span class="deco deco-8">🖌️</span>
        <span class="deco deco-9">💖</span>
        <span class="deco deco-10">🦋</span>
        <span class="deco deco-11">🍀</span>
        <span class="deco deco-12">💎</span>
        <span class="deco deco-13">🌈</span>
        <span class="deco deco-14">🎵</span>
        <span class="deco deco-15">🌙</span>
      </div>
      <div class="banner-wave">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,30 C240,10 480,50 720,30 C960,10 1200,50 1440,30 L1440,60 L0,60 Z" fill="var(--jtt-bg)" />
        </svg>
      </div>
    </div>

    <!-- Title below banner -->
    <div class="page-title">
      <h1>🎨 作品集</h1>
      <p class="title-desc">这里展示我的全部设计作品，用心血浇灌每一个像素</p>
      <span class="title-count">共 {{ portfolios.length }} 件作品</span>
    </div>

    <div class="works-body">
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

      <div class="works-grid">
        <a v-for="item in filteredPortfolios" :key="item.id" :href="`/works/${item.slug}`" class="works-card">
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

      <div v-if="filteredPortfolios.length === 0" class="empty-state">🎨 该分类下暂无作品</div>
    </div>
  </section>
</template>

<style scoped>
.works-page {
  /* full-width banner requires breaking out of parent container */
  margin: 0 calc(-50vw + 50%);
  width: 100vw;
}

/* ===== Banner (1/3 viewport, same style as homepage) ===== */
.works-banner {
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

.works-banner-content {
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
.works-body {
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

.works-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.works-card {
  display: block;
  background: var(--jtt-bg-card);
  border-radius: var(--jtt-radius);
  overflow: hidden;
  box-shadow: var(--jtt-shadow);
  border: 1px solid var(--jtt-pink-lighter);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.works-card:hover { transform: scale(1.03); box-shadow: var(--jtt-shadow-hover); }

.card-image-wrapper { position: relative; overflow: hidden; height: 250px; }
.card-image { width: 100%; height: 100%; object-fit: cover; transition: transform 0.35s; }
.works-card:hover .card-image { transform: scale(1.08); }

.card-category-badge {
  position: absolute; top: 12px; right: 12px; padding: 4px 12px; border-radius: 20px; font-size: 12px; color: #fff; font-weight: 500;
}

.card-body { padding: 20px 24px 24px; }
.card-title { font-size: 18px; color: var(--jtt-text-dark); margin-bottom: 10px; font-weight: 600; }
.card-desc { font-size: 14px; color: var(--jtt-text-light); line-height: 1.7; margin-bottom: 12px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.card-date { font-size: 13px; color: var(--jtt-pink-light); }

.empty-state { text-align: center; padding: 48px; color: var(--jtt-text-light); font-size: 16px; }

@media (max-width: 1024px) {
  .works-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
  .card-image-wrapper { height: 220px; }
}

@media (max-width: 640px) {
  .works-grid { grid-template-columns: 1fr; }
  .works-body { padding: 32px 16px 48px; }
  .works-banner { height: 28vh; min-height: 240px; }
  .page-title h1 { font-size: 28px; }
  .card-image-wrapper { height: 240px; }
}
</style>
