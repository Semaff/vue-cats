<template>
  <ul class="cat-list">
    <CatCard v-for="cat in catStore.cats" :key="cat.id" v-bind="cat" />
  </ul>
</template>

<script setup lang="ts">
import { useCatStore } from '@/store/catStore';

import CatCard from './CatCard.vue';

const catStore = useCatStore();
</script>

<style scoped>
.cat-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 35px;

  list-style: none;
}
</style>
