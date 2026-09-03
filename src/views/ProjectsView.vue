<script setup>
import { ref, computed } from 'vue'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard.vue'
const category = ref('全部')
const categories = ['全部', '产品', '技术', '文档', '硬件']
const visibleProjects = computed(() => category.value === '全部' ? projects : projects.filter((project) => project.category === category.value))
</script>
<template><section class="page"><div class="container"><div class="page-heading"><div><p class="eyebrow">Archive / 05 projects</p><h1>作品集</h1><p class="muted">从用户洞察到工程交付，每个项目都记录一次真实的解决问题。</p></div><div class="filters"><button v-for="item in categories" :key="item" class="filter" :class="{ active: category === item }" @click="category = item">{{ item }}</button></div></div><div class="project-grid"><ProjectCard v-for="project in visibleProjects" :key="project.id" :project="project" /></div></div></section></template>