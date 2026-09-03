<script setup>
import { ref } from 'vue'
const open = ref(false)
const links = [['首页', '/'], ['作品集', '/projects'], ['关于我', '/about'], ['证书', '/certificates'], ['联系方式', '/contact']]
</script>
<template>
  <header class="site-header"><nav class="nav container">
    <RouterLink class="logo" to="/" @click="open = false"><strong>HY</strong><span>HUANG YAN / 2026</span></RouterLink>
    <button class="menu-btn" aria-label="打开导航" @click="open = !open">{{ open ? '×' : '☰' }}</button>
    <div class="nav-links" :class="{ open }"><RouterLink v-for="link in links" :key="link[1]" :to="link[1]" @click="open = false">{{ link[0] }}</RouterLink></div>
  </nav></header>
</template>