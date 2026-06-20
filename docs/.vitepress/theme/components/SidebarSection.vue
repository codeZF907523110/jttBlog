<script setup lang="ts">
import { ref, onMounted } from "vue";

const categories = ref([
  { name: "UI设计", color: "" },
  { name: "插画", color: "" },
  { name: "图标", color: "" },
  { name: "品牌设计", color: "" },
  { name: "动效设计", color: "" },
  { name: "3D设计", color: "" },
  { name: "排版设计", color: "" },
  { name: "摄影", color: "" },
  { name: "手绘", color: "" },
  { name: "字体设计", color: "" },
  { name: "网页设计", color: "" },
  { name: "海报设计", color: "" },
]);

const hoveredCategory = ref<string | null>(null);

const freshColors = [
  "#f4a7b9", "#87ceeb", "#a8e6cf", "#f7cac9", "#c3b1e1",
  "#a8d8ea", "#ffccb5", "#b5e8c3", "#f9c9e2", "#a4d3ee",
  "#ffb7b2", "#95e1d3",
];

onMounted(() => {
  categories.value.forEach((cat, i) => {
    cat.color = freshColors[i % freshColors.length];
  });
});

const handleCategoryClick = (cat: string) => {
  window.location.href = `/works/?category=${encodeURIComponent(cat)}`;
};
</script>

<template>
  <aside class="jtt-sidebar">
    <!-- Profile Card -->
    <div class="sidebar-card profile-card">
      <div class="profile-avatar">
        <img
          src="/zf_head.jpg"
          alt="头像"
          class="avatar-img"
        />
      </div>
      <h3 class="profile-name">贾甜甜</h3>
      <p class="profile-bio">优秀视觉设计师</p>
      <div class="profile-stats">
        <div class="stat-item">
          <span class="stat-num">12</span>
          <span class="stat-bottom">
            <span class="stat-icon">📝</span>
            <span class="stat-label">文章</span>
          </span>
        </div>
        <div class="stat-item">
          <span class="stat-num">36</span>
          <span class="stat-bottom">
            <span class="stat-icon">🎨</span>
            <span class="stat-label">作品</span>
          </span>
        </div>
        <div class="stat-item">
          <span class="stat-num">12</span>
          <span class="stat-bottom">
            <span class="stat-icon">🏷️</span>
            <span class="stat-label">分类</span>
          </span>
        </div>
      </div>
    </div>

    <!-- Category Card -->
    <div class="sidebar-card category-card">
      <h4 class="category-title">🏷️ 分类</h4>
      <div class="category-list">
        <a
          v-for="(cat, i) in categories"
          :key="cat.name"
          :href="`/works/?category=${encodeURIComponent(cat.name)}`"
          class="category-tag"
          :class="{ highlighted: hoveredCategory === cat.name }"
          :style="{
            backgroundColor: cat.color,
          }"
          @mouseenter="hoveredCategory = cat.name"
          @mouseleave="hoveredCategory = null"
        >
          {{ cat.name }}
        </a>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.jtt-sidebar {
  width: 300px;
  flex-shrink: 0;
  position: sticky;
  top: 80px;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.sidebar-card {
  background: var(--jtt-bg-card);
  border-radius: var(--jtt-radius);
  padding: 24px 20px;
  box-shadow: var(--jtt-shadow);
  border: 1px solid var(--jtt-pink-lighter);
}

/* ===== Profile Card ===== */
.profile-card {
  text-align: center;
}

.profile-avatar {
  width: 90px;
  height: 90px;
  margin: 0 auto 12px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--jtt-pink-light);
  background: var(--jtt-pink-lighter);
}

.avatar-img {
  width: 100%;
  height: 100%;
}

.profile-name {
  font-family: var(--jtt-font-title);
  font-size: 20px;
  color: var(--jtt-text-dark);
  margin-bottom: 4px;
}

.profile-bio {
  font-size: 13px;
  color: var(--jtt-text-light);
  margin-bottom: 16px;
}

.profile-stats {
  display: flex;
  justify-content: center;
  gap: 18px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.stat-bottom {
  display: flex;
  align-items: center;
  gap: 3px;
}

.stat-icon {
  font-size: 13px;
  line-height: 1;
}

.stat-num {
  font-size: 20px;
  font-weight: 700;
  color: var(--jtt-pink);
}

.stat-label {
  font-size: 12px;
  color: var(--jtt-text-light);
}

/* ===== Category Card ===== */
.category-card {
  position: relative;
}

.category-title {
  font-family: var(--jtt-font-title);
  font-size: 16px;
  color: var(--jtt-text-dark);
  margin-bottom: 16px;
}

.category-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.category-tag {
  display: inline-block;
  padding: 7px 16px;
  border-radius: 6px;
  border: 1.5px solid #333;
  font-size: 13px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  letter-spacing: 0.5px;
  animation: tagPulse 3s ease-in-out infinite;
}

/* Staggered pulse */
.category-tag:nth-child(1)  { animation-delay: 0s; }
.category-tag:nth-child(2)  { animation-delay: 0.2s; }
.category-tag:nth-child(3)  { animation-delay: 0.4s; }
.category-tag:nth-child(4)  { animation-delay: 0.6s; }
.category-tag:nth-child(5)  { animation-delay: 0.8s; }
.category-tag:nth-child(6)  { animation-delay: 1.0s; }
.category-tag:nth-child(7)  { animation-delay: 0.1s; }
.category-tag:nth-child(8)  { animation-delay: 0.3s; }
.category-tag:nth-child(9)  { animation-delay: 0.5s; }
.category-tag:nth-child(10) { animation-delay: 0.7s; }
.category-tag:nth-child(11) { animation-delay: 0.9s; }
.category-tag:nth-child(12) { animation-delay: 1.1s; }

@keyframes tagPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.08); }
}

.category-tag:hover,
.category-tag.highlighted {
  transform: scale(1.15);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  z-index: 10;
  font-weight: 700;
  animation-play-state: paused;
  border-color: #111;
}

/* ===== Responsive ===== */
@media (max-width: 900px) {
  .jtt-sidebar {
    width: 100%;
    position: static;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
  }

  .sidebar-card {
    flex: 1 1 280px;
  }
}

@media (max-width: 640px) {
  .jtt-sidebar {
    flex-direction: column;
  }

  .sidebar-card {
    flex: 1 1 auto;
  }
}
</style>
