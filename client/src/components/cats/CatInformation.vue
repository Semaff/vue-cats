<template>
  <div class="cat-information">
    <img class="cat-information__image" :src="image" alt="123" />

    <div class="cat-information__info">
      <MySwitchableInput :writable="writable" v-model="reactiveName">
        <h2>{{ reactiveName }}</h2>
      </MySwitchableInput>

      <MySwitchableInput :writable="writable" v-model="reactiveDescription">
        <p>
          {{ reactiveDescription }}
        </p>
      </MySwitchableInput>

      <div class="cat-information__actions">
        <MyButton @click="updateCat">{{ writable ? 'Сохранить' : 'Редактировать' }}</MyButton>
        <MyButton @click="deleteCat(id)">Удалить</MyButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCatStore } from '@/store/catStore';

import MyButton from '@/ui/MyButton.vue';

import type { Cat } from '@/types/Cat';
import MySwitchableInput from '@/ui/inputs/MySwitchableInput.vue';
import { ref } from 'vue';

interface Props extends Cat {}

const props = defineProps<Props>();
const emit = defineEmits(['onDelete']);

const catStore = useCatStore();

const writable = ref(false);
const reactiveName = ref(props.name);
const reactiveDescription = ref(props.description);

const deleteCat = (id: string | number) => {
  catStore.deleteCat(id);
  emit('onDelete');
};

const updateCat = () => {
  writable.value = !writable.value;

  if (!writable.value) {
    catStore.updateCat({
      id: props.id,
      name: reactiveName.value,
      description: reactiveDescription.value,
    });
  }
};
</script>

<style scoped lang="scss">
.cat-information {
  width: 900px;
  display: flex;
  gap: 24px;

  &__image {
    width: 520px;
    height: 640px;
    flex-shrink: 0;
    object-fit: cover;

    border: 1px solid #e1e1e1;
    border-radius: 8px;
    overflow: hidden;
  }

  &__info {
    width: 100%;

    display: flex;
    flex-direction: column;
    padding: 10px;

    h2 {
      font-size: 40px;
      font-style: italic;
    }

    p {
      margin-top: 12px;
      font-size: 18px;
    }
  }

  &__actions {
    margin-left: auto;
    margin-top: auto;

    display: flex;
    align-items: center;
    gap: 12px;
  }
}
</style>
