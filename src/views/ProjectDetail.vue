<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '../data/projects'
import Lightbox from '../components/Lightbox.vue'

const route = useRoute()
const project = computed(() => projects.find((item) => item.id === route.params.id) || projects[0])
const lightbox = ref('')
const currentImage = ref(0)
const index = computed(() => projects.findIndex((item) => item.id === project.value.id))
const previous = computed(() => projects[(index.value - 1 + projects.length) % projects.length])
const next = computed(() => projects[(index.value + 1) % projects.length])

function changeProjectImage(step) {
  currentImage.value = (currentImage.value + step + project.value.images.length) % project.value.images.length
}

watch(() => project.value.id, () => { currentImage.value = 0 })
</script>

<template>
  <section class="page">
    <div class="container">
      <div class="breadcrumb"><RouterLink to="/">首页</RouterLink>　/　<RouterLink to="/projects">作品集</RouterLink>　/　{{ project.title }}</div>
      <p class="eyebrow">{{ project.category }} / case study</p>
      <h1 class="detail-title">{{ project.title }}</h1>
      <div class="detail-meta"><span>{{ project.duration }}</span><span>{{ project.role }}</span></div>
      <div class="tag-row detail-tags"><span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span></div>
      <div v-if="project.paperLink || project.conferenceLink" class="external-links"><a v-if="project.paperLink" class="btn secondary" :href="project.paperLink" target="_blank" rel="noreferrer">论文 ↗</a><a v-if="project.conferenceLink" class="btn secondary" :href="project.conferenceLink" target="_blank" rel="noreferrer">会议页面 ↗</a></div>
      <div v-if="project.video" class="video-stage"><video class="video" :src="project.video" controls preload="metadata"></video></div>
      <div v-else class="carousel">
        <button class="carousel-arrow" aria-label="上一张" @click="changeProjectImage(-1)">‹</button>
        <button class="carousel-image" :class="{ 'poster-project': project.id === 's-band-docs' }" @click="lightbox = project.images[currentImage]"><img :src="project.images[currentImage]" :alt="project.title" loading="lazy"></button>
        <button class="carousel-arrow" aria-label="下一张" @click="changeProjectImage(1)">›</button>
        <div class="carousel-dots"><button v-for="(_, imageIndex) in project.images" :key="imageIndex" :class="{ active: currentImage === imageIndex }" :aria-label="`查看第 ${imageIndex + 1} 张`" @click="currentImage = imageIndex"></button></div>
      </div>
      <section v-if="project.documents?.length" class="documents">
        <div class="section-label"><span class="eyebrow">Project documents</span><h2>项目文档与源码</h2><p class="muted">与项目相关的资料，可在线阅读或下载查看。</p></div>
        <article v-for="document in project.documents" :key="document.url" class="document-card">
          <div class="document-heading"><h3>{{ document.title }}</h3><a :href="document.url" target="_blank" rel="noreferrer" download>打开 / 下载 ↗</a></div>
          <iframe v-if="document.type !== 'archive'" :src="document.url" :title="document.title" loading="lazy"></iframe>
          <div v-else class="archive-preview"><span class="archive-icon">ZIP</span><p>项目源码压缩包已加入本项目资源，可下载到本地查看。</p><a class="btn" :href="document.url" download>下载源码包 ↓</a></div>
        </article>
      </section>
      <div class="star-grid"><article class="star-card"><h3>📌 项目背景</h3><p>{{ project.background }}</p></article><article class="star-card"><h3>🎯 我的目标</h3><p>{{ project.target }}</p></article><article class="star-card"><h3>⚡ 具体行动</h3><p>{{ project.action }}</p></article><article class="star-card"><h3>🏆 项目成果</h3><p>{{ project.result }}</p></article></div>
      <div class="detail-nav"><RouterLink :to="`/projects/${previous.id}`">← {{ previous.title }}</RouterLink><RouterLink :to="`/projects/${next.id}`">{{ next.title }} →</RouterLink></div>
    </div>
  </section>
  <Lightbox v-if="lightbox" :src="lightbox" :alt="project.title" @close="lightbox = ''" />
</template>