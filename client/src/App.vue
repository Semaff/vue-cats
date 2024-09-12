<template>
  <MyHeader />
  <CatSection />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import MyHeader from '@/components/header/MyHeader.vue';
import { CatSection } from '@/components/cats';

import { useCatStore } from './store/catStore';

const store = useCatStore();

onMounted(() => {
  store.fetchCats();
});
</script>

<style scoped></style>
