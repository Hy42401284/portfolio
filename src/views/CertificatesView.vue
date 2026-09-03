<script setup>
import { ref } from 'vue'
import CertificateCard from '../components/CertificateCard.vue'
import Lightbox from '../components/Lightbox.vue'
const category = ref('全部'); const lightbox = ref('')
const categories = ['全部', '四六级证书', '获奖证书']
const certificates = [
  { title: 'CET-4 英语四级证书', image: '/portfolio/images/certificates/CET4.jpg', category: '四六级证书' },
  { title: 'CET-6 英语六级证书', image: '/portfolio/images/certificates/CET6.png', category: '四六级证书' },
  { title: '国家奖学金', image: '/portfolio/images/awards/国家奖学金.jpg', category: '获奖证书' },
  { title: '华为杯研究生数学建模国家二等奖', image: '/portfolio/images/awards/award-huawei.jpg', category: '获奖证书' },
  { title: '亚太杯数学建模二等奖', image: '/portfolio/images/awards/award-asia.jpg', category: '获奖证书' },
  { title: '信科赛国家二等奖', image: '/portfolio/images/awards/信科赛赛道一国家二等奖.jpg', category: '获奖证书' },
  { title: '信科赛省级二等奖', image: '/portfolio/images/awards/信科赛赛道三省级二等奖.jpg', category: '获奖证书' },
  { title: '大唐杯国家三等奖', image: '/portfolio/images/awards/大唐杯国家三等奖.jpg', category: '获奖证书' },
  { title: '计算机设计大赛国家三等奖', image: '/portfolio/images/awards/计算机设计大赛国家三等奖.jpg', category: '获奖证书' },
  { title: '大学生数学建模省级二等奖', image: '/portfolio/images/awards/大学生数学建模省级二等奖.jpg', category: '获奖证书' },
  { title: '国际会议收录', image: '/portfolio/images/awards/国际会议收录.png', category: '获奖证书' },
  { title: '志愿者证书', image: '/portfolio/images/awards/志愿者证书.jpg', category: '获奖证书' },
  { title: '大英赛三等奖', image: '/portfolio/images/awards/大英赛三等奖.jpg', category: '获奖证书' },
  { title: '学生奖学金三等奖', image: '/portfolio/images/awards/学生奖学金三等奖.jpg', category: '获奖证书' },
  { title: '学生干部一等奖学金', image: '/portfolio/images/awards/学生干部一等奖学金.jpg', category: '获奖证书' },
  { title: '学生干部一等奖学金（第二份）', image: '/portfolio/images/awards/学生干部一等奖学金2.jpg', category: '获奖证书' },
  { title: '数学建模校级一等奖', image: '/portfolio/images/awards/数学建模校级一等奖.jpg', category: '获奖证书' },
  { title: '本科班级联络员聘书', image: '/portfolio/images/awards/本科班级联络员聘书.jpg', category: '获奖证书' },
  { title: '研究生学业奖学金二等奖', image: '/portfolio/images/awards/研究生学业奖学金二等奖.jpg', category: '获奖证书' },
  { title: '论文录用查询', image: '/portfolio/images/awards/论文录用查询.jpg', category: '获奖证书' },
]
const visible = () => category.value === '全部' ? certificates : certificates.filter((item) => item.category === category.value)
</script>
<template><section class="page"><div class="container"><div class="page-heading"><div><p class="eyebrow">Certificates / honours</p><h1>证书</h1><p class="muted">四六级证书与竞赛、奖学金等荣誉材料，独立整理展示。</p></div><div class="filters"><button v-for="item in categories" :key="item" class="filter" :class="{ active: category === item }" @click="category = item">{{ item }}</button></div></div><div class="certificate-grid"><CertificateCard v-for="item in visible()" :key="item.title" :item="item" @open="lightbox = $event" /></div></div></section><Lightbox v-if="lightbox" :src="lightbox" alt="证书原图" @close="lightbox = ''" /></template>