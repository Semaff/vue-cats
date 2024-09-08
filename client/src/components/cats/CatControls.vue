<template>
  <div class="cat-controls">
    <MyInput v-model="search" id="cat-search" label="Поиск:" />
    <MySelect v-model="sort" id="cat-sort" :options="options" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import MyInput from '@/ui/MyInput.vue';
import MySelect from '@/ui/MySelect.vue';

import type { SelectOption } from '@/ui/MySelect.vue';

export type CatSort = 'name' | 'created';

const search = ref('');
const sort = ref<CatSort>('name');

const options: SelectOption<CatSort>[] = [
  {
    value: 'name',
    label: 'По имени',
  },
  {
    value: 'created',
    label: 'По времени создания',
  },
];
</script>

<style scoped lang="scss">
.cat-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
