<script setup>
import { projects, skills } from '../data/projects'
import ProjectCard from '../components/ProjectCard.vue'
import SkillTag from '../components/SkillTag.vue'
</script>
<template>
  <section class="hero"><div class="container hero-grid"><div><p class="eyebrow">Electronic information · Product thinking</p><h1>你好，我是<em>黄艳</em></h1><p class="lede">电子信息工程 · 产品设计与技术文档</p><p class="lede">我擅长把复杂的技术问题梳理成清晰的方案，用产品视角连接需求、设计、开发与交付。</p><div class="actions"><RouterLink class="btn" to="/projects">查看作品集 →</RouterLink><a class="btn secondary" href="/portfolio/files/简历-电子信息-求职产品项目.pdf" download>下载简历 ↓</a></div></div><div class="portrait-wrap"><img class="portrait" :src="'/portfolio/images/avatar/portrait.jpg'" alt="黄艳证件照"></div></div><div class="container skill-cloud"><SkillTag v-for="skill in skills" :key="skill">{{ skill }}</SkillTag></div><a class="scroll-cue" href="#selected-work" aria-label="向下滚动">↓</a></section>
  <section id="selected-work" class="page"><div class="container"><div class="page-heading"><div><p class="eyebrow">Selected work</p><h2>把想法变成能交付的东西。</h2></div><RouterLink class="btn secondary" to="/projects">全部作品 →</RouterLink></div><div class="project-grid"><ProjectCard v-for="project in projects.slice(0, 3)" :key="project.id" :project="project" /></div></div></section>
</template>