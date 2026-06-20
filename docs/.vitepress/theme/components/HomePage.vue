<script setup lang="ts">
import BannerSection from "./BannerSection.vue";
import SidebarSection from "./SidebarSection.vue";
import PortfolioSection from "./PortfolioSection.vue";
import AlbumSection from "./AlbumSection.vue";
</script>

<template>
  <div class="jtt-home">
    <!-- Banner -->
    <BannerSection />

    <!-- Main Content Area -->
    <main class="jtt-home-main">
      <div class="jtt-home-grid">
        <!-- Left Sidebar -->
        <SidebarSection />

        <!-- Right Content -->
        <div class="jtt-home-content">
          <PortfolioSection />
          <AlbumSection />
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="jtt-footer">
      <div class="jtt-footer-inner">
        <p>🌸 贾甜甜的博客 &copy; 2025 | Made with 💖 and VitePress</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.jtt-home-main {
  max-width: 1400px;
  margin: 0 auto;
  padding: 32px 24px 48px;
}

.jtt-home-grid {
  display: flex;
  gap: 32px;
}

.jtt-home-content {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.jtt-footer {
  background: linear-gradient(135deg, var(--jtt-pink-lighter) 0%, #fde2f3 50%, #e8d5f5 100%);
  padding: 24px;
  text-align: center;
}

.jtt-footer-inner {
  max-width: 1400px;
  margin: 0 auto;
}

.jtt-footer p {
  font-size: 13px;
  color: var(--jtt-text-light);
}

@media (max-width: 900px) {
  .jtt-home-grid {
    flex-direction: column;
    gap: 24px;
  }

  .jtt-home-content {
    gap: 36px;
  }

  .jtt-home-main {
    padding: 24px 16px 36px;
  }
}

@media (max-width: 640px) {
  .jtt-home-main {
    padding: 20px 12px 28px;
  }

  .jtt-footer p {
    font-size: 12px;
  }
}
</style>
