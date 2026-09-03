<script setup>
defineProps({ item: { type: Object, required: true } })
const emit = defineEmits(['open'])
function openItem(item) { item.pdf ? window.open(item.image, '_blank', 'noopener,noreferrer') : emit('open', item.image) }
</script>
<template><button class="certificate" @click="openItem(item)"><img v-if="!item.pdf" :src="item.image" :alt="item.title" loading="lazy"><div v-else class="pdf-cover">PDF</div><span>{{ item.title }}</span></button></template>