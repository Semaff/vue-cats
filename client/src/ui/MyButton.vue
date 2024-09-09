<template>
  <button class="my-button">
    <slot></slot>
  </button>
</template>

<script setup lang="ts"></script>

<style scoped>
.my-button {
  cursor: pointer;
  background: none;

  padding: 12px 24px;
  border-radius: 4px;
  border: 1px solid #000;
}
</style>
