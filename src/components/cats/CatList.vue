<template>
  <ul class="cat-list">
    <CatCard v-for="cat in cats" :key="cat.id" v-bind="cat" />
  </ul>
</template>

<script setup lang="ts">
import CatCard from './CatCard.vue';

import { cats } from '../../../db.json';
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
