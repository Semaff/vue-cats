<template>
  <form>
    <h1>Добавить своего</h1>
    <input v-model="name" type="text" />
    <input v-model="description" type="text" />
    <input @change="setFile" type="file" />
    <button @click="addCat">Добавить</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { v4 } from 'uuid';

const name = ref('');
const description = ref('');
const file = ref<File | null>(null);

const setFile = (e: Event) => {
  const target = e.target as HTMLInputElement;

  if (!target.files) return;

  file.value = target.files[0];
};

const addCat = () => {
  if (!name.value || !description.value || !file.value) return;

  fetch('http://localhost:3000/cats', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: v4(),
      name: name.value,
      description: description.value,
      image: file.value,
    }),
  });
};
</script>

<style scoped></style>
