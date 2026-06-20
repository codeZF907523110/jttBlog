<script setup lang="ts">
interface AlbumItem {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  slug: string;
}

const albums: AlbumItem[] = [
  { id: 1, title: "东京漫游记", slug: "dongjing-manyouji", description: "东京街头巷尾的点点滴滴，涩谷十字路口的人潮、浅草寺的香火", image: "https://picsum.photos/seed/album1/600/400", date: "2025-12-10" },
  { id: 2, title: "春之絮语", slug: "chun-zhi-xuyu", description: "樱花季的京都，粉色的花瓣洒满古都，哲学之道的绝美瞬间", image: "https://picsum.photos/seed/album2/600/400", date: "2025-11-25" },
  { id: 3, title: "猫咪物语", slug: "maomi-wuyu", description: "街角遇见的每一只猫，慵懒与优雅都是生活最好的礼物", image: "https://picsum.photos/seed/album6/600/400", date: "2025-06-08" },
  { id: 4, title: "甜品日记", slug: "tianpin-riji", description: "探访各地甜品店，从法式甜点到日式和果子，每一口都是幸福", image: "https://picsum.photos/seed/album7/600/400", date: "2025-05-20" },
];
</script>

<template>
  <section class="jtt-album-section">
    <div class="section-header">
      <h2 class="section-title">📷 相册集</h2>
      <a href="/album/" class="section-more">查看更多 →</a>
    </div>
    <div class="album-grid">
      <a v-for="item in albums" :key="item.id" :href="`/album/${item.slug}`" class="album-card">
        <div class="card-image-wrapper">
          <img :src="item.image" :alt="item.title" class="card-image" />
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
.section-title { font-family: var(--jtt-font-title); font-size: 24px; color: var(--jtt-text-dark); }
.section-more { font-size: 14px; color: var(--jtt-pink); padding: 6px 16px; border-radius: var(--jtt-radius-sm); transition: all 0.3s; border: 1px solid var(--jtt-pink-light); }
.section-more:hover { background: var(--jtt-pink); color: #fff; border-color: var(--jtt-pink); }

.album-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }

.album-card {
  display: block;
  background: var(--jtt-bg-card);
  border-radius: var(--jtt-radius);
  overflow: hidden;
  box-shadow: var(--jtt-shadow);
  border: 1px solid var(--jtt-pink-lighter);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.album-card:hover { transform: scale(1.03); box-shadow: var(--jtt-shadow-hover); }

.card-image-wrapper { position: relative; overflow: hidden; height: 200px; }
.card-image { width: 100%; height: 100%; object-fit: cover; transition: transform 0.35s; }
.album-card:hover .card-image { transform: scale(1.08); }

.card-body { padding: 16px 20px 20px; }
.card-title { font-size: 16px; color: var(--jtt-text-dark); margin-bottom: 8px; font-weight: 600; }
.card-desc { font-size: 13px; color: var(--jtt-text-light); line-height: 1.6; margin-bottom: 12px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.card-date { font-size: 12px; color: var(--jtt-pink-light); }

@media (max-width: 1024px) { .album-grid { gap: 16px; } .card-image-wrapper { height: 160px; } }
@media (max-width: 768px) {
  .album-grid { grid-template-columns: 1fr; }
  .section-title { font-size: 20px; }
  .card-image-wrapper { height: 220px; }
}
</style>
