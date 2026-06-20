<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vitepress";

const moreOpen = ref(false);
const mobileMenuOpen = ref(false);

const navItems = [
  { text: "首页", link: "/", icon: "🏠" },
  { text: "作品集", link: "/works/", icon: "🎨" },
  { text: "相册", link: "/album/", icon: "📷" },
  { text: "关于我", link: "/about/", icon: "👩‍🎨" },
];

const moreItems = [
  { text: "友链", link: "/friends/", icon: "🔗" },
  { text: "分享", link: "/share/", icon: "📤" },
];

// Reactive route detection via VitePress router (not window.location)
const route = useRoute();

const isActive = (link: string) => {
  const path = route.path;
  if (link === "/") return path === "/" || path === "/index.html" || path === "";
  return path.startsWith(link);
};

const closeMore = () => {
  moreOpen.value = false;
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};
</script>

<template>
  <header class="jtt-navbar">
    <div class="jtt-navbar-inner">
      <!-- Logo -->
      <a href="/" class="jtt-navbar-logo">
        <span class="logo-icon">🌸</span>
        <span class="logo-text">JTT Blog</span>
      </a>

      <!-- Desktop Nav Links -->
      <nav class="jtt-navbar-links">
        <a
          v-for="item in navItems"
          :key="item.link"
          :href="item.link"
          class="jtt-navbar-link"
          :class="{ active: isActive(item.link) }"
        >
          <span class="nav-icon">{{ item.icon }}</span>
          <span>{{ item.text }}</span>
        </a>

        <!-- More Dropdown -->
        <div
          class="jtt-navbar-more"
          @mouseenter="moreOpen = true"
          @mouseleave="closeMore"
        >
          <span
            class="jtt-navbar-link jtt-navbar-more-trigger"
            :class="{ active: isActive('/friends/') || isActive('/share/') }"
          >
            <span class="nav-icon">📌</span>
            <span>更多</span>
            <span class="more-arrow">▾</span>
          </span>
          <Transition name="dropdown">
            <div v-if="moreOpen" class="jtt-navbar-dropdown">
              <a
                v-for="item in moreItems"
                :key="item.link"
                :href="item.link"
                class="jtt-navbar-dropdown-item"
              >
                <span class="nav-icon">{{ item.icon }}</span>
                {{ item.text }}
              </a>
            </div>
          </Transition>
        </div>
      </nav>

      <!-- Mobile Hamburger -->
      <button class="mobile-hamburger" @click="toggleMobileMenu">
        <span :class="{ open: mobileMenuOpen }"></span>
        <span :class="{ open: mobileMenuOpen }"></span>
        <span :class="{ open: mobileMenuOpen }"></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide">
      <div v-if="mobileMenuOpen" class="mobile-menu" @click="closeMobileMenu">
        <a
          v-for="item in navItems"
          :key="item.link"
          :href="item.link"
          class="mobile-menu-item"
          :class="{ active: isActive(item.link) }"
        >
          <span class="nav-icon">{{ item.icon }}</span>
          <span>{{ item.text }}</span>
        </a>
        <div class="mobile-menu-divider"></div>
        <a
          v-for="item in moreItems"
          :key="item.link"
          :href="item.link"
          class="mobile-menu-item"
        >
          <span class="nav-icon">{{ item.icon }}</span>
          <span>{{ item.text }}</span>
        </a>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.jtt-navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 245, 249, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255, 160, 196, 0.3);
  box-shadow: 0 2px 16px rgba(255, 107, 157, 0.08);
}

.jtt-navbar-inner {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.jtt-navbar-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--jtt-font-title);
  font-size: 22px;
  color: var(--jtt-pink-dark);
  transition: transform 0.3s;
  flex-shrink: 0;
}

.jtt-navbar-logo:hover {
  transform: scale(1.05);
}

.logo-icon {
  font-size: 28px;
}

.logo-text {
  letter-spacing: 2px;
}

.jtt-navbar-links {
  display: flex;
  align-items: center;
  gap: 2px;
}

.jtt-navbar-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  font-size: 15px;
  color: var(--jtt-text);
  border-radius: var(--jtt-radius-sm);
  transition: all 0.3s;
  cursor: pointer;
}

.jtt-navbar-link:hover,
.jtt-navbar-link.active {
  color: var(--jtt-pink);
  background: var(--jtt-pink-lighter);
  text-shadow: 0 0 0.5px currentColor;
}

.nav-icon {
  font-size: 16px;
  line-height: 1;
}

.jtt-navbar-more {
  position: relative;
}

/* invisible bridge to prevent gap between trigger and dropdown */
.jtt-navbar-more::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: 10px;
}

.more-arrow {
  font-size: 10px;
  margin-left: 2px;
  transition: transform 0.3s;
}

/* ===== Dropdown: Glass Morphism ===== */
.jtt-navbar-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  min-width: 120px;
  background: rgba(255, 235, 245, 0.7);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border-radius: var(--jtt-radius-sm);
  box-shadow: 0 8px 32px rgba(255, 107, 157, 0.18), 0 2px 8px rgba(255, 107, 157, 0.08);
  border: 1px solid rgba(255, 160, 196, 0.5);
  padding: 8px 0;
  overflow: hidden;
}

.jtt-navbar-dropdown-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 20px;
  font-size: 14px;
  color: var(--jtt-text);
  transition: all 0.2s;
}

.jtt-navbar-dropdown-item:hover {
  color: var(--jtt-pink);
  background: rgba(255, 107, 157, 0.1);
}

/* dropdown transition */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-8px);
}

/* ===== Mobile ===== */
.mobile-hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  z-index: 1001;
}

.mobile-hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--jtt-pink-dark);
  border-radius: 2px;
  transition: all 0.3s;
}

.mobile-hamburger span.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.mobile-hamburger span.open:nth-child(2) {
  opacity: 0;
}
.mobile-hamburger span.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

.mobile-menu {
  display: none;
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(239, 231, 235, 0.97) 0%,
    rgba(255, 235, 245, 0.97) 40%,
    rgba(245, 220, 240, 0.97) 100%
  );
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  flex-direction: column;
  padding: 16px 24px;
  gap: 4px;
  z-index: 999;
}

.mobile-menu-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 16px;
  font-size: 16px;
  color: var(--jtt-text);
  border-radius: var(--jtt-radius-sm);
  transition: background 0.2s;
}

.mobile-menu-item:hover,
.mobile-menu-item.active {
  background: var(--jtt-pink-lighter);
  color: var(--jtt-pink);
}

.mobile-menu-divider {
  height: 1px;
  background: var(--jtt-pink-lighter);
  margin: 4px 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

@media (max-width: 768px) {
  .jtt-navbar-links {
    display: none;
  }
  .mobile-hamburger {
    display: flex;
  }
  .mobile-menu {
    display: flex;
  }
}
</style>
