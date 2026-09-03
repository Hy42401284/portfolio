<script setup>
import { ref } from 'vue'
const sent = ref(false)
const form = ref({ name: '', email: '', message: '' })
function submit() {
  if (form.value.name && form.value.email && form.value.message) {
    window.location.href = `mailto:huangyann47@163.com?subject=作品集联系-${encodeURIComponent(form.value.name)}&body=${encodeURIComponent(form.value.message)}%0A%0A${encodeURIComponent(form.value.email)}`
    sent.value = true
  }
}
</script>
<template>
  <section class="page"><div class="container"><div class="page-heading"><div><p class="eyebrow">Let’s talk</p><h1>联系我</h1><p class="muted">如果你正在寻找一位懂技术、能落地、愿意持续学习的产品伙伴，欢迎联系。</p></div></div><div class="contact-grid"><div><h2>保持联系</h2><div class="contact-links"><a href="mailto:huangyann47@163.com">huangyann47@163.com</a><br><a href="https://github.com/Hy42401284/portfolio" target="_blank" rel="noreferrer">GitHub ↗</a><br><span>西安 · 中国</span></div></div><form class="contact-form" @submit.prevent="submit"><label>你的称呼<input v-model.trim="form.name" required placeholder="怎么称呼你？"></label><label>邮箱<input v-model.trim="form.email" type="email" required placeholder="name@example.com"></label><label>想聊什么？<textarea v-model.trim="form.message" required placeholder="项目、岗位或任何想交流的内容"></textarea></label><button class="btn" type="submit">发送邮件 →</button><p v-if="sent" class="muted">邮件客户端已准备打开。</p></form></div></div></section>
</template>