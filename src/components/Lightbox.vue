<script setup>
defineProps({ src: String, alt: String })
defineEmits(['close'])
</script>
<template><div class="lightbox" role="dialog" aria-modal="true" @click.self="$emit('close')"><button class="close" aria-label="关闭" @click="$emit('close')">×</button><img :src="src" :alt="alt"></div></template>