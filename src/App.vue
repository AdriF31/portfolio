<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const theme = ref('dark')

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved) theme.value = saved
  document.documentElement.setAttribute('data-theme', theme.value)
})

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', theme.value)
  localStorage.setItem('theme', theme.value)
}
</script>

<template>
  <div class="grain"></div>
  <nav class="nav">
    <router-link to="/" class="nav-logo">af.</router-link>
    <div class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/projects">Projects</router-link>
      <button class="theme-btn" @click="toggleTheme" :aria-label="'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode'">
        <svg v-if="theme === 'dark'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        </svg>
        <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      </button>
    </div>
  </nav>
  <main class="main">
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  backdrop-filter: blur(12px);
  background: color-mix(in srgb, var(--bg) 80%, transparent);
  border-bottom: 1px solid var(--border);
}

.nav-logo {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -1px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-links a {
  color: var(--text-muted);
  font-size: 0.9rem;
  font-weight: 500;
  transition: color var(--transition);
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--text);
}

.theme-btn {
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition);
}

.theme-btn:hover {
  border-color: var(--accent);
  transform: rotate(15deg);
}

.main {
  padding-top: 5rem;
  min-height: 100vh;
}
</style>
