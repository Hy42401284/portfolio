<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Navbar />
  <main><RouterView v-slot="{ Component }"><Transition name="page-fade" mode="out-in"><component :is="Component" /></Transition></RouterView></main>
  <Footer />
</template>
