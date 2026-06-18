<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { projects } from '../data'

const route = useRoute()
const router = useRouter()
const visible = ref(false)

const project = computed(() => projects.find(p => p.slug === route.params.slug))
const projectIndex = computed(() => projects.findIndex(p => p.slug === route.params.slug))
const nextProject = computed(() => projects[(projectIndex.value + 1) % projects.length])

const imageModules = import.meta.glob('../assets/**/*.png', { eager: true })

function getImageUrl(path) {
  const key = `../assets/${path}`
  return imageModules[key]?.default || ''
}

onMounted(() => {
  if (!project.value) router.replace('/projects')
  setTimeout(() => visible.value = true, 100)
})
</script>

<template>
  <div v-if="project" class="detail" :class="{ visible }">
    <router-link to="/projects" class="back-link">← Back to projects</router-link>

    <header class="detail-header" :style="{ '--accent': project.color }">
      <div class="detail-dot" :style="{ background: project.color }"></div>
      <h1>{{ project.title }}</h1>
      <p class="detail-tagline">{{ project.tagline }}</p>
      <div class="detail-meta">
        <span class="detail-role">{{ project.role }}</span>
        <span class="detail-impact">{{ project.impact }}</span>
      </div>
    </header>

    <section class="detail-body">
      <h2>Overview</h2>
      <p>{{ project.description }}</p>
    </section>

    <section class="detail-screenshots">
      <h2>Screenshots</h2>
      <div v-if="project.images && project.images.length" class="screenshots-grid">
        <img v-for="img in project.images" :key="img" :src="getImageUrl(img)" :alt="project.title + ' screenshot'" class="screenshot-img" />
      </div>
      <div v-else class="nda-notice">
        <span class="nda-icon">🔒</span>
        <p>Screenshots are under NDA and cannot be displayed publicly.</p>
      </div>
    </section>

    <section class="detail-tech">
      <h2>Tech Stack</h2>
      <div class="tech-list">
        <span v-for="t in project.tech" :key="t" class="tech-item">{{ t }}</span>
      </div>
    </section>

    <section class="detail-tags-section">
      <h2>Tags</h2>
      <div class="detail-tags">
        <span v-for="t in project.tags" :key="t">{{ t }}</span>
      </div>
    </section>

    <!-- Next project -->
    <router-link :to="'/projects/' + nextProject.slug" class="next-project" :style="{ '--accent': nextProject.color }">
      <span class="next-label">Next project</span>
      <span class="next-title">{{ nextProject.title }} →</span>
    </router-link>
  </div>
</template>

<style scoped>
.detail {
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem;
  opacity: 0;
  transform: translateY(16px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.detail.visible {
  opacity: 1;
  transform: translateY(0);
}

.back-link {
  display: inline-block;
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 2rem;
  transition: color var(--transition);
}
.back-link:hover {
  color: var(--accent);
}

.detail-header {
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border);
}
.detail-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-bottom: 1rem;
}
.detail-header h1 {
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: -1.5px;
  line-height: 1.2;
}
.detail-tagline {
  color: var(--text-muted);
  font-size: 1.05rem;
  margin-top: 0.5rem;
}
.detail-meta {
  margin-top: 1.2rem;
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.detail-role, .detail-impact {
  font-size: 0.8rem;
  padding: 0.3rem 0.8rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--text-muted);
}

.detail-body, .detail-tech, .detail-tags-section {
  padding: 2rem 0;
  border-bottom: 1px solid var(--border);
}
.detail-screenshots {
  padding: 2rem 0;
  border-bottom: 1px solid var(--border);
}
.detail-screenshots h2 {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--text-muted);
  margin-bottom: 0.8rem;
}
.screenshots-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.8rem;
}
.screenshot-img {
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--border);
}
.nda-notice {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.2rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--text-muted);
  font-size: 0.9rem;
}
.nda-icon {
  font-size: 1.3rem;
}
.detail-body h2, .detail-tech h2, .detail-tags-section h2 {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--text-muted);
  margin-bottom: 0.8rem;
}
.detail-body p {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--text);
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.tech-item {
  font-size: 0.85rem;
  padding: 0.4rem 0.9rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  font-family: var(--mono);
  transition: all var(--transition);
}
.tech-item:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.detail-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.detail-tags span {
  font-size: 0.8rem;
  padding: 0.3rem 0.7rem;
  background: color-mix(in srgb, var(--accent) 10%, transparent);
  color: var(--accent);
  border-radius: 6px;
}

.next-project {
  display: block;
  margin-top: 2rem;
  padding: 1.5rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: all var(--transition);
  color: var(--text);
}
.next-project:hover {
  border-color: var(--accent);
  transform: translateY(-3px);
}
.next-label {
  display: block;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-muted);
  margin-bottom: 0.3rem;
}
.next-title {
  font-size: 1.1rem;
  font-weight: 600;
}
</style>
