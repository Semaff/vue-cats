<template>
  <form class="add-cat-form" @submit.prevent="addCat">
    <h3>Добавить своего котея</h3>
    <MyInput id="cat-name" v-model="name" label="Имя:" type="text" />
    <MyInput id="cat-description" v-model="description" label="Описание:" type="text" />
    <MyInput id="cat-image" @change="setFile" label="Фото:" type="file" />
    <MyButton type="submit">Добавить</MyButton>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { useCatStore } from '@/store/catStore';

import MyButton from '@/ui/MyButton.vue';
import MyInput from '@/ui/MyInput.vue';

const name = ref('');
const description = ref('');
const file = ref<File | null>(null);

const catStore = useCatStore();

const emit = defineEmits(['onSubmit']);

const setFile = (e: Event) => {
  const target = e.target as HTMLInputElement;

  if (!target.files) return;

  file.value = target.files[0];
};

const addCat = () => {
  if (!name.value || !description.value || !file.value) return;

  catStore.addCat({ name: name.value, description: description.value, image: file.value });

  name.value = '';
  description.value = '';
  file.value = null;

  emit('onSubmit');
};
</script>

<style scoped lang="scss">
.add-cat-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
</style>
