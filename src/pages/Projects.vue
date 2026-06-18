<script setup>
import { ref, onMounted } from 'vue'
import { projects } from '../data'

const visible = ref(false)
onMounted(() => { setTimeout(() => visible.value = true, 100) })
</script>

<template>
  <div class="projects-page" :class="{ visible }">
    <header class="page-header">
      <h1>Projects</h1>
      <p>A collection of things I've built — from enterprise apps to freelance work.</p>
    </header>
    <div class="projects-list">
      <router-link
        v-for="(p, i) in projects"
        :key="p.slug"
        :to="'/projects/' + p.slug"
        class="project-row"
        :style="{ '--i': i, '--card-accent': p.color }"
      >
        <div class="project-row-left">
          <div class="project-row-dot" :style="{ background: p.color }"></div>
          <div>
            <h3>{{ p.title }}</h3>
            <p>{{ p.tagline }}</p>
          </div>
        </div>
        <div class="project-row-tags">
          <span v-for="t in p.tags.slice(0, 2)" :key="t">{{ t }}</span>
        </div>
        <span class="project-row-arrow">→</span>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.projects-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  opacity: 0;
  transform: translateY(16px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.projects-page.visible {
  opacity: 1;
  transform: translateY(0);
}

.page-header {
  padding: 3rem 0 2rem;
}
.page-header h1 {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -1px;
}
.page-header p {
  color: var(--text-muted);
  margin-top: 0.5rem;
}

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.project-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 1.5rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--text);
  transition: all var(--transition);
  animation: fadeUp 0.5s ease forwards;
  animation-delay: calc(var(--i) * 0.05s);
  opacity: 0;
}
.project-row:hover {
  border-color: var(--card-accent);
  transform: translateX(6px);
}
.project-row-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.project-row-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}
.project-row-left h3 {
  font-size: 1rem;
  font-weight: 600;
}
.project-row-left p {
  font-size: 0.8rem;
  color: var(--text-muted);
}
.project-row-tags {
  display: flex;
  gap: 0.4rem;
}
.project-row-tags span {
  font-size: 0.7rem;
  padding: 0.2rem 0.5rem;
  background: var(--bg-secondary);
  border-radius: 4px;
  color: var(--text-muted);
  font-family: var(--mono);
}
.project-row-arrow {
  color: var(--text-muted);
  font-size: 1.2rem;
  transition: transform var(--transition);
}
.project-row:hover .project-row-arrow {
  transform: translateX(4px);
  color: var(--card-accent);
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 600px) {
  .project-row-tags {
    display: none;
  }
}
</style>
