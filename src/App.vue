<script setup lang="ts">
import { RouterView } from 'vue-router'
import Logo from './components/Logo.vue'
</script>

<template>
  <div class="wrapper">
    <Logo/>
    <RouterView />
  </div>
</template>
