<script setup>
import { ref, onMounted } from 'vue'
import { profile, experiences, skills, education, projects } from '../data'

const visible = ref(false)
onMounted(() => { setTimeout(() => visible.value = true, 100) })
</script>

<template>
  <div class="home" :class="{ visible }">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-badge">Available for freelance</div>
      <div class="hero-intro">
        <div class="hero-text">
          <h1 class="hero-title">
            <span class="hero-greeting">Hey, I'm</span>
            <span class="hero-name">{{ profile.name }}</span>
          </h1>
          <p class="hero-subtitle">{{ profile.title }} <span class="hero-loc">· {{ profile.location }}</span></p>
        </div>
        <img src="../assets/me.png" alt="Photo of me" class="hero-photo" />
      </div>
      <p class="hero-desc">{{ profile.summary }}</p>
      <div class="hero-actions">
        <a :href="'mailto:' + profile.email" class="btn btn-primary">Get in touch</a>
        <router-link to="/projects" class="btn btn-secondary">View projects →</router-link>
      </div>
      <div class="hero-links">
        <a :href="profile.github" target="_blank" rel="noopener">GitHub</a>
        <a :href="profile.linkedin" target="_blank" rel="noopener">LinkedIn</a>
        <a :href="'tel:' + profile.phone">{{ profile.phone }}</a>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="section">
      <h2 class="section-title">Featured Work</h2>
      <div class="project-grid">
        <router-link
          v-for="p in projects.slice(0, 4)"
          :key="p.slug"
          :to="'/projects/' + p.slug"
          class="project-card"
          :style="{ '--card-accent': p.color }"
        >
          <div class="project-card-dot" :style="{ background: p.color }"></div>
          <h3>{{ p.title }}</h3>
          <p>{{ p.tagline }}</p>
          <div class="project-card-tags">
            <span v-for="t in p.tags.slice(0, 3)" :key="t">{{ t }}</span>
          </div>
        </router-link>
      </div>
      <router-link to="/projects" class="view-all">All projects →</router-link>
    </section>

    <!-- Experience -->
    <section class="section">
      <h2 class="section-title">Experience</h2>
      <div class="timeline">
        <div v-for="(exp, i) in experiences" :key="i" class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-header">
              <h3>{{ exp.role }}</h3>
              <span class="timeline-period">{{ exp.period }}</span>
            </div>
            <p class="timeline-company">{{ exp.company }}</p>
            <ul>
              <li v-for="(h, j) in exp.highlights" :key="j">{{ h }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section class="section">
      <h2 class="section-title">Skills</h2>
      <div class="skills-grid">
        <div v-for="(items, cat) in skills" :key="cat" class="skill-group">
          <h4>{{ cat }}</h4>
          <div class="skill-tags">
            <span v-for="s in items" :key="s" class="skill-tag">{{ s }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Education -->
    <section class="section">
      <h2 class="section-title">Education</h2>
      <div class="edu-list">
        <div v-for="(e, i) in education" :key="i" class="edu-item">
          <h3>{{ e.title }}</h3>
          <span class="edu-period">{{ e.period }}</span>
          <p>{{ e.detail }}</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p>Built with Vue.js — {{ new Date().getFullYear() }}</p>
    </footer>
  </div>
</template>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  opacity: 0;
  transform: translateY(16px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.home.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Hero */
.hero {
  padding: 4rem 0 3rem;
}
.hero-intro {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}
.hero-photo {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--border);
  flex-shrink: 0;
}
@media (max-width: 560px) {
  .hero-intro {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
  .hero-photo {
    width: 100px;
    height: 100px;
  }
}
.hero-badge {
  display: inline-block;
  padding: 0.3rem 0.8rem;
  background: color-mix(in srgb, var(--accent) 15%, transparent);
  color: var(--accent);
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
}
.hero-greeting {
  display: block;
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--text-muted);
  margin-bottom: 0.3rem;
}
.hero-name {
  display: block;
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  font-weight: 700;
  letter-spacing: -2px;
  line-height: 1.1;
  background: linear-gradient(135deg, var(--text), var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hero-subtitle {
  margin-top: 0.8rem;
  font-size: 1.1rem;
  font-weight: 500;
}
.hero-loc {
  color: var(--text-muted);
}
.hero-desc {
  margin-top: 1rem;
  color: var(--text-muted);
  max-width: 560px;
  line-height: 1.7;
}
.hero-actions {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.btn {
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all var(--transition);
}
.btn-primary {
  background: var(--accent);
  color: #fff;
}
.btn-primary:hover {
  background: var(--accent-hover);
  transform: translateY(-2px);
}
.btn-secondary {
  background: var(--bg-card);
  color: var(--text);
  border: 1px solid var(--border);
}
.btn-secondary:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
}
.hero-links {
  margin-top: 1.5rem;
  display: flex;
  gap: 1.5rem;
  font-size: 0.85rem;
}
.hero-links a {
  color: var(--text-muted);
}
.hero-links a:hover {
  color: var(--accent);
}

/* Sections */
.section {
  padding: 3rem 0;
  border-top: 1px solid var(--border);
}
.section-title {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  letter-spacing: -0.5px;
}

/* Project Grid */
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}
.project-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem;
  transition: all var(--transition);
  color: var(--text);
  position: relative;
  overflow: hidden;
}
.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--card-accent);
  opacity: 0;
  transition: opacity var(--transition);
}
.project-card:hover {
  border-color: var(--card-accent);
  transform: translateY(-4px);
}
.project-card:hover::before {
  opacity: 1;
}
.project-card-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-bottom: 0.8rem;
}
.project-card h3 {
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
}
.project-card p {
  font-size: 0.85rem;
  color: var(--text-muted);
}
.project-card-tags {
  margin-top: 0.8rem;
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
}
.project-card-tags span {
  font-size: 0.7rem;
  padding: 0.2rem 0.5rem;
  background: var(--bg-secondary);
  border-radius: 4px;
  color: var(--text-muted);
  font-family: var(--mono);
}
.view-all {
  display: inline-block;
  margin-top: 1.2rem;
  font-size: 0.9rem;
  font-weight: 500;
}

/* Timeline */
.timeline {
  position: relative;
  padding-left: 1.5rem;
  border-left: 2px solid var(--border);
}
.timeline-item {
  position: relative;
  padding-bottom: 2rem;
}
.timeline-item:last-child {
  padding-bottom: 0;
}
.timeline-dot {
  position: absolute;
  left: -1.65rem;
  top: 0.4rem;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--accent);
  border: 2px solid var(--bg);
}
.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.timeline-header h3 {
  font-size: 1rem;
  font-weight: 600;
}
.timeline-period {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-family: var(--mono);
}
.timeline-company {
  color: var(--accent);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}
.timeline-content ul {
  list-style: none;
  padding: 0;
}
.timeline-content li {
  font-size: 0.85rem;
  color: var(--text-muted);
  padding: 0.2rem 0;
  padding-left: 1rem;
  position: relative;
}
.timeline-content li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--accent);
}

/* Skills */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
}
.skill-group h4 {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-muted);
  margin-bottom: 0.6rem;
}
.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.skill-tag {
  font-size: 0.8rem;
  padding: 0.3rem 0.7rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 6px;
  transition: all var(--transition);
  cursor: default;
}
.skill-tag:hover {
  border-color: var(--accent);
  color: var(--accent);
}

/* Education */
.edu-list {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
.edu-item {
  padding: 1.2rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}
.edu-item h3 {
  font-size: 1rem;
  font-weight: 600;
}
.edu-period {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-family: var(--mono);
}
.edu-item p {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-top: 0.3rem;
}

/* Footer */
.footer {
  padding: 2rem 0;
  border-top: 1px solid var(--border);
  text-align: center;
  font-size: 0.8rem;
  color: var(--text-muted);
}
</style>
