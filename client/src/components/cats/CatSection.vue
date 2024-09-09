<template>
  <section class="cat-section">
    <CatControls />
    <CatList />
  </section>
</template>

<script setup lang="ts">
import CatList from './CatList.vue';
import CatControls from './CatControls.vue';
</script>

<style scoped lang="scss">
.cat-section {
  width: 100%;
  max-width: 1280px;
  padding: 40px;
  margin: 0 auto;
}
</style>
