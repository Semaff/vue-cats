<template>
  <div class="my-input">
    <label v-if="label" :for="id">{{ label }}</label>
    <input v-model="model" :id="id" :type="type" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  id: {
    type: String,
  },
  label: {
    type: String,
  },
  type: {
    type: String,
    default: 'text',
  },
});

const model = defineModel();
</script>

<style scoped lang="scss">
.my-input {
  display: flex;
  align-items: center;
  gap: 12px;

  label {
    font-size: 18px;
    color: #000;
  }

  input {
    padding: 12px;
    border: 1px solid #000;
    border-radius: 4px;
  }
}
</style>
