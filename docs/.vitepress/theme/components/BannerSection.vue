<script setup lang="ts">
import TypeWriter from "./TypeWriter.vue";
</script>

<template>
  <section class="jtt-banner">
    <!-- Decorative Elements -->
    <div class="banner-decorations">
      <span class="deco deco-1">🌸</span>
      <span class="deco deco-2">⭐</span>
      <span class="deco deco-3">💫</span>
      <span class="deco deco-4">🎀</span>
      <span class="deco deco-5">✨</span>
      <span class="deco deco-6">🦋</span>
      <span class="deco deco-7">🌷</span>
      <span class="deco deco-8">💖</span>
    </div>

    <div class="banner-content">
      <p class="banner-welcome">Welcome to JTT's Blog</p>
      <h1 class="banner-title">贾甜甜的博客</h1>
      <p class="banner-desc">
        <TypeWriter
          text="这是一个展示作者作品集的博客，作者是一名优秀的视觉设计师"
          :speed="80"
          :loop="true"
        />
      </p>
    </div>

    <!-- Wave Divider -->
    <div class="banner-wave">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path
          d="M0,30 C240,10 480,50 720,30 C960,10 1200,50 1440,30 L1440,60 L0,60 Z"
          fill="var(--jtt-bg)"
        />
      </svg>
    </div>
  </section>
</template>

<style scoped>
.jtt-banner {
  position: relative;
  height: 400px;
  background: var(--jtt-bg-banner);
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
  font-size: 24px;
  animation: float 6s ease-in-out infinite;
  opacity: 0.6;
}

.deco-1 { top: 10%; left: 8%; animation-delay: 0s; font-size: 30px; }
.deco-2 { top: 15%; right: 10%; animation-delay: 1s; font-size: 22px; }
.deco-3 { top: 65%; left: 15%; animation-delay: 2s; font-size: 26px; }
.deco-4 { top: 20%; left: 25%; animation-delay: 0.5s; font-size: 20px; }
.deco-5 { top: 70%; right: 20%; animation-delay: 1.5s; font-size: 24px; }
.deco-6 { top: 40%; left: 5%; animation-delay: 3s; font-size: 28px; }
.deco-7 { top: 35%; right: 5%; animation-delay: 2.5s; font-size: 24px; }
.deco-8 { top: 80%; left: 50%; animation-delay: 0.8s; font-size: 20px; }

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(5deg); }
}

.banner-content {
  text-align: center;
  z-index: 2;
  padding: 0 24px;
}

.banner-welcome {
  font-size: 16px;
  color: var(--jtt-pink);
  letter-spacing: 3px;
  margin-bottom: 16px;
  font-weight: 300;
  text-transform: uppercase;
}

.banner-title {
  font-family: var(--jtt-font-title);
  font-size: 48px;
  color: var(--jtt-pink-dark);
  margin-bottom: 20px;
  text-shadow: 0 2px 12px rgba(255, 107, 157, 0.15);
  animation: titleBounce 1s ease;
}

@keyframes titleBounce {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

.banner-desc {
  font-size: 18px;
  color: var(--jtt-text-light);
  min-height: 28px;
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
  height: 60px;
}

@media (max-width: 768px) {
  .jtt-banner {
    height: 320px;
  }

  .deco {
    font-size: 16px !important;
  }

  .banner-welcome {
    font-size: 13px;
    letter-spacing: 1px;
  }

  .banner-title {
    font-size: 32px;
    margin-bottom: 12px;
  }

  .banner-desc {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .jtt-banner {
    height: 280px;
  }

  .banner-title {
    font-size: 26px;
  }

  .banner-desc {
    font-size: 13px;
  }
}
</style>
