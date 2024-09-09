<template>
  <ul class="cat-list">
    <CatCard v-for="cat in cats" :key="cat.id" v-bind="cat" />
  </ul>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

import CatCard from './CatCard.vue';

interface Cat {
  id: string | number;
  name: string;
  description: string;
  image: string;
}

const cats = ref<Cat[]>([]);

const fetchCats = async () => {
  const response = await fetch('http://localhost:3000/cats');

  cats.value = await response.json();
};

onMounted(() => fetchCats());
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
