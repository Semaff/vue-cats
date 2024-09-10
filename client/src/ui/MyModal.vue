<template>
  <div @click="$emit('toggle')" v-if="open" class="my-modal">
    <div @click.stop class="my-modal__inner">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  open: boolean;
}

type Emits = {
  toggle: [];
};

defineProps<Props>();
defineEmits<Emits>();
</script>

<style scoped lang="scss">
.my-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(#000, 0.7);

  &__inner {
    padding: 40px;
    background-color: #fff;
    border-radius: 8px;
  }
}
</style>
