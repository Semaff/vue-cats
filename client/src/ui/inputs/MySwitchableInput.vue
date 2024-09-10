<template>
  <div>
    <MyInput v-if="writable" v-model="model" />
    <slot v-else></slot>
  </div>
</template>

<script setup lang="ts">
import MyInput from '../MyInput.vue';

interface Props {
  writable: boolean;
}

const model = defineModel();

defineProps<Props>();
</script>

<style scoped></style>
