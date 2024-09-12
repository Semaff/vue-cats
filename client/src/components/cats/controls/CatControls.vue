<template>
  <div class="cat-controls">
    <MyInput v-model="search" id="cat-search" label="Поиск:" />
    <MySelect v-model="sort" id="cat-sort" :options="options" />
    <MyButton @click="toggle">Добавить Котика</MyButton>
  </div>

  <MyModal :open="open" @toggle="toggle">
    <AddCatForm @on-submit="toggle" />
  </MyModal>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import MyInput from '@/ui/MyInput.vue';
import MySelect from '@/ui/MySelect.vue';

import type { SelectOption } from '@/ui/MySelect.vue';
import MyButton from '@/ui/MyButton.vue';
import MyModal from '@/ui/MyModal.vue';
import AddCatForm from '../forms/AddCatForm.vue';

export type CatSort = 'name' | 'created';

const search = ref('');
const sort = ref<CatSort>('name');
const open = ref(false);

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

const toggle = () => {
  open.value = !open.value;
};
</script>

<style scoped lang="scss">
.cat-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}
</style>
