<template>
  <button @click="toggleTheme" 
          class="theme-toggle-btn"
          :aria-label="themeText"
          :title="themeText">
    <div class="toggle-track">
      <!-- Sun Icon -->
      <div class="icon-box sun-box" :class="{ 'active': !isDark }">
        <i class="bi bi-sun-fill"></i>
      </div>
      <!-- Moon Icon -->
      <div class="icon-box moon-box" :class="{ 'active': isDark }">
        <i class="bi bi-moon-stars-fill"></i>
      </div>
      <!-- Sliding Pill -->
      <div class="toggle-thumb" :class="{ 'is-dark': isDark }"></div>
    </div>
  </button>
</template>

<script setup>
import { computed } from 'vue'
import { useThemeStore } from '../stores/themeStore'

const themeStore = useThemeStore()

const toggleTheme = () => {
  themeStore.toggleTheme()
}

const isDark = computed(() => themeStore.isDark?.value ?? false)
const themeText = computed(() => isDark.value ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro')
</script>

<style scoped>
.theme-toggle-btn {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(226, 232, 240, 0.8);
  border-radius: 100px;
  padding: 4px;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.04);
}

[data-bs-theme="dark"] .theme-toggle-btn {
  background: rgba(17, 24, 39, 0.7);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
}

.theme-toggle-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(45, 212, 191, 0.3);
}

.toggle-track {
  position: relative;
  width: 60px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px;
}

.icon-box {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  font-size: 0.85rem;
  transition: color 0.3s ease, transform 0.3s ease;
  color: #94A3B8;
}

.sun-box.active {
  color: #F59E0B;
  transform: rotate(45deg);
}

.moon-box.active {
  color: #38BDF8;
  transform: rotate(-12deg);
}

.toggle-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0D9488 0%, #2DD4BF 100%);
  z-index: 1;
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 2px 6px rgba(13, 148, 136, 0.4);
}

.toggle-thumb.is-dark {
  transform: translateX(32px);
  background: linear-gradient(135deg, #6366F1 0%, #38BDF8 100%);
  box-shadow: 0 2px 6px rgba(56, 189, 248, 0.4);
}
</style>