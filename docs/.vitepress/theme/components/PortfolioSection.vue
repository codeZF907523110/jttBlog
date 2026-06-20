<script setup lang="ts">
import { ref } from "vue";

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  categoryColor: string;
  date: string;
  url: string;
}

const portfolios = ref<PortfolioItem[]>([
  {
    id: 1,
    title: "星辰物语 APP 界面",
    description: "一款二次元风格的社交 APP 完整 UI 设计，包含登录、首页、社区等功能模块",
    image: "https://picsum.photos/seed/design1/600/400",
    category: "UI设计",
    categoryColor: "#ff9eb5",
    date: "2025-12-20",
    url: "/works/xingchen-wuyu-app",
  },
  {
    id: 2,
    title: "梦幻花园插画集",
    description: "以花卉为主题的系列插画，融合水彩与数字绘画技法",
    image: "https://picsum.photos/seed/design2/600/400",
    category: "插画",
    categoryColor: "#87ceeb",
    date: "2025-11-15",
    url: "/works/menghuan-huayuan-chahua",
  },
  {
    id: 3,
    title: "元气偶像品牌 VI",
    description: "为虚拟偶像团体设计的完整品牌视觉识别系统",
    image: "https://picsum.photos/seed/design3/600/400",
    category: "品牌设计",
    categoryColor: "#c3b1e1",
    date: "2025-10-08",
    url: "/works/yuanqi-ouxiang-pinpai-vi",
  },
  {
    id: 4,
    title: "甜蜜糖果图标包",
    description: "500+ 个手绘风格的精美图标，适用于各类 APP 和网站",
    image: "https://picsum.photos/seed/design4/600/400",
    category: "图标",
    categoryColor: "#f7cac9",
    date: "2025-09-22",
    url: "/works/tianmi-tangguo-tubiao",
  },
  {
    id: 5,
    title: "樱花飞舞动效设计",
    description: "使用 Lottie 实现的樱花飘落动画，可用于加载页和背景",
    image: "https://picsum.photos/seed/design5/600/400",
    category: "动效设计",
    categoryColor: "#a8d8ea",
    date: "2025-08-30",
    url: "/works/yinghua-fei-wu-dongxiao",
  },
  {
    id: 6,
    title: "星之卡比 3D 建模",
    description: "Blender 制作的卡通角色 3D 模型及渲染作品",
    image: "https://picsum.photos/seed/design6/600/400",
    category: "3D设计",
    categoryColor: "#b5e8c3",
    date: "2025-07-14",
    url: "/works/xingzhi-kabi-3d-jianmo",
  },
]);
</script>

<template>
  <section class="jtt-portfolio-section">
    <!-- Header -->
    <div class="section-header">
      <h2 class="section-title">🎨 作品集</h2>
      <a href="/works/" class="section-more">查看更多 →</a>
    </div>

    <!-- Cards -->
    <div class="portfolio-grid">
      <a
        v-for="item in portfolios"
        :key="item.id"
        :href="item.url"
        class="portfolio-card"
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
          <p class="card-desc">{{ item.description }}</p>
          <time class="card-date">{{ item.date }}</time>
        </div>
      </a>
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

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.portfolio-card {
  background: var(--jtt-bg-card);
  border-radius: var(--jtt-radius);
  overflow: hidden;
  box-shadow: var(--jtt-shadow);
  border: 1px solid var(--jtt-pink-lighter);
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.portfolio-card:hover {
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

.portfolio-card:hover .card-image {
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
  .portfolio-grid {
    gap: 16px;
  }

  .card-image-wrapper {
    height: 150px;
  }
}

@media (max-width: 768px) {
  .portfolio-grid {
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
