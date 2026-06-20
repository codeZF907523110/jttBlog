<script setup lang="ts">
import { ref } from "vue";

interface ArticleItem {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  categoryColor: string;
  date: string;
}

const articles = ref<ArticleItem[]>([
  {
    id: 1,
    title: "设计师必备的渐变色搭配指南",
    excerpt: "分享我在日常设计工作中总结的 50 套高级渐变色组合，让你的设计瞬间提升质感",
    image: "https://picsum.photos/seed/article1/600/400",
    category: "UI设计",
    categoryColor: "#ff9eb5",
    date: "2025-12-18",
  },
  {
    id: 2,
    title: "从零开始学插画：线条与构图",
    excerpt: "新手入门插画的完整路径，从基础线条练习到完整作品创作",
    image: "https://picsum.photos/seed/article2/600/400",
    category: "插画",
    categoryColor: "#87ceeb",
    date: "2025-12-01",
  },
  {
    id: 3,
    title: "Figma 提效插件推荐 2025",
    excerpt: "整理了这一年最好用的 Figma 插件，让你的设计效率翻倍",
    image: "https://picsum.photos/seed/article3/600/400",
    category: "排版",
    categoryColor: "#fbc2a0",
    date: "2025-11-20",
  },
  {
    id: 4,
    title: "品牌设计的情绪表达",
    excerpt: "如何通过色彩、字体和图形语言传递品牌的核心情感价值",
    image: "https://picsum.photos/seed/article4/600/400",
    category: "品牌",
    categoryColor: "#c3b1e1",
    date: "2025-11-05",
  },
]);
</script>

<template>
  <section class="jtt-article-section">
    <!-- Header -->
    <div class="section-header">
      <h2 class="section-title">📝 最新文章</h2>
      <a href="/works/" class="section-more">查看更多 →</a>
    </div>

    <!-- Cards -->
    <div class="article-grid">
      <article
        v-for="item in articles"
        :key="item.id"
        class="article-card"
      >
        <div class="card-image-wrapper">
          <img :src="item.image" :alt="item.title" class="card-image" />
          <span
            class="card-category-badge"
            :style="{ backgroundColor: item.categoryColor }"
          >
            {{ item.category }}
          </span>
        </div>
        <div class="card-body">
          <h3 class="card-title">{{ item.title }}</h3>
          <p class="card-desc">{{ item.excerpt }}</p>
          <time class="card-date">{{ item.date }}</time>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.section-title {
  font-family: var(--jtt-font-title);
  font-size: 24px;
  color: var(--jtt-text-dark);
}

.section-more {
  font-size: 14px;
  color: var(--jtt-pink);
  padding: 6px 16px;
  border-radius: var(--jtt-radius-sm);
  transition: all 0.3s;
  border: 1px solid var(--jtt-pink-light);
}

.section-more:hover {
  background: var(--jtt-pink);
  color: #fff;
  border-color: var(--jtt-pink);
}

.article-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.article-card {
  background: var(--jtt-bg-card);
  border-radius: var(--jtt-radius);
  overflow: hidden;
  box-shadow: var(--jtt-shadow);
  border: 1px solid var(--jtt-pink-lighter);
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.article-card:hover {
  transform: scale(1.03);
  box-shadow: var(--jtt-shadow-hover);
}

.card-image-wrapper {
  position: relative;
  overflow: hidden;
  height: 180px;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s;
}

.article-card:hover .card-image {
  transform: scale(1.08);
}

.card-category-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  color: #fff;
  font-weight: 500;
}

.card-body {
  padding: 16px 20px 20px;
}

.card-title {
  font-size: 16px;
  color: var(--jtt-text-dark);
  margin-bottom: 8px;
  font-weight: 600;
}

.card-desc {
  font-size: 13px;
  color: var(--jtt-text-light);
  line-height: 1.6;
  margin-bottom: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-date {
  font-size: 12px;
  color: var(--jtt-pink-light);
}

@media (max-width: 1024px) {
  .article-grid {
    gap: 16px;
  }

  .card-image-wrapper {
    height: 150px;
  }
}

@media (max-width: 768px) {
  .article-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 20px;
  }

  .section-more {
    font-size: 12px;
    padding: 4px 12px;
  }

  .card-image-wrapper {
    height: 200px;
  }

  .card-body {
    padding: 12px 16px 16px;
  }

  .card-title {
    font-size: 15px;
  }
}
</style>
