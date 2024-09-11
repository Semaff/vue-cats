<template>
  <form class="edit-cat-form" @submit.prevent="editCat">
    <h3>Редактировать данные котея</h3>
    <MyInput id="cat-name" v-model="reactiveName" label="Имя:" type="text" />
    <MyInput id="cat-description" v-model="reactiveDescription" label="Описание:" type="text" />
    <MyButton type="submit">Сохранить</MyButton>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { useCatStore } from '@/store/catStore';

import MyButton from '@/ui/MyButton.vue';
import MyInput from '@/ui/MyInput.vue';

interface Props {
  id: string | number;
  name: string;
  description: string;
}

const props = defineProps<Props>();

const emit = defineEmits(['onSubmit']);

const catStore = useCatStore();

const reactiveName = ref(props.name);
const reactiveDescription = ref(props.description);

const editCat = () => {
  if (reactiveName.value === props.name && reactiveDescription.value === props.description) {
    return;
  }

  catStore.updateCat({
    id: props.id,
    name: reactiveName.value,
    description: reactiveDescription.value,
  });

  emit('onSubmit');
};
</script>

<style scoped>
.edit-cat-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
</style>
