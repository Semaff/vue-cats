<template>
  <form class="cat-form" @submit.prevent="addCat">
    <h3>Добавить своего котея</h3>
    <MyInput id="cat-name" v-model="name" label="Имя:" type="text" />
    <MyInput id="cat-description" v-model="description" label="Описание:" type="text" />
    <MyInput id="cat-image" @change="setFile" label="Фото:" type="file" />
    <MyButton type="submit">Добавить</MyButton>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { v4 } from 'uuid';
import MyButton from '@/ui/MyButton.vue';
import MyInput from '@/ui/MyInput.vue';

const name = ref('');
const description = ref('');
const file = ref<File | null>(null);

const emit = defineEmits(['onSubmit']);

const setFile = (e: Event) => {
  const target = e.target as HTMLInputElement;

  if (!target.files) return;

  file.value = target.files[0];
};

const addCat = () => {
  if (!name.value || !description.value || !file.value) return;

  const formData = new FormData();

  formData.append('id', v4());
  formData.append('name', name.value);
  formData.append('description', description.value);
  formData.append('image', file.value);

  fetch('http://localhost:3000/cats', {
    method: 'POST',
    body: formData,
  });

  emit('onSubmit');
};
</script>

<style scoped lang="scss">
.cat-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
</style>
