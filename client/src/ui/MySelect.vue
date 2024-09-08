<template>
  <div class="my-select">
    <label v-if="label" :for="id">{{ label }}</label>
    <select v-model="model" :name="id" :id="id">
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
export interface SelectOption<T = string> {
  value: T;
  label: string;
}

interface SelectProps {
  id: string;
  label?: string;
  options: SelectOption[];
}

defineProps<SelectProps>();

const model = defineModel();
</script>

<style scoped lang="scss">
.my-select {
  display: flex;
  align-items: center;
  gap: 12px;

  label {
    font-size: 18px;
    color: #000;
  }

  select {
    padding: 12px;
    border: 1px solid #000;
    border-radius: 4px;
  }
}
</style>
