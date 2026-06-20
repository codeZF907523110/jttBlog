<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";

const props = defineProps<{
  text: string;
  speed?: number;
  loop?: boolean;
}>();

const displayText = ref("");
const cursorVisible = ref(true);

let currentIndex = 0;
let typingTimer: ReturnType<typeof setInterval> | null = null;
let cursorTimer: ReturnType<typeof setInterval> | null = null;
let isDeleting = false;

const fullText = props.text;
const speed = props.speed ?? 80;

const startTyping = () => {
  if (typingTimer) clearInterval(typingTimer);
  currentIndex = displayText.value.length;

  typingTimer = setInterval(() => {
    if (!isDeleting) {
      if (currentIndex < fullText.length) {
        currentIndex++;
        displayText.value = fullText.slice(0, currentIndex);
      } else {
        if (props.loop) {
          setTimeout(() => {
            isDeleting = true;
          }, 2000);
        }
        if (typingTimer) clearInterval(typingTimer);
      }
    } else {
      if (currentIndex > 0) {
        currentIndex--;
        displayText.value = fullText.slice(0, currentIndex);
      } else {
        isDeleting = false;
        if (typingTimer) clearInterval(typingTimer);
        setTimeout(startTyping, 400);
      }
    }
  }, isDeleting ? speed / 2 : speed);
};

onMounted(() => {
  startTyping();
  cursorTimer = setInterval(() => {
    cursorVisible.value = !cursorVisible.value;
  }, 500);
});

onUnmounted(() => {
  if (typingTimer) clearInterval(typingTimer);
  if (cursorTimer) clearInterval(cursorTimer);
});
</script>

<template>
  <span class="typewriter">
    {{ displayText }}
    <span class="typewriter-cursor" :class="{ visible: cursorVisible }">|</span>
  </span>
</template>

<style scoped>
.typewriter {
  display: inline-block;
  letter-spacing: 2px;
}

.typewriter-cursor {
  color: var(--jtt-pink);
  opacity: 0;
  transition: opacity 0.1s;
  font-weight: 300;
}

.typewriter-cursor.visible {
  opacity: 1;
}
</style>
