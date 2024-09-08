<template>
  <li class="cat-card">
    <img class="cat-card__image" src="@/images/cat-1.jpg" alt="1" />

    <div class="cat-card__info">
      <h3>{{ name }}</h3>
      <p>{{ description }}</p>
    </div>
  </li>
</template>

<script setup lang="ts">
interface Props {
  name: string;
  description: string;
}

defineProps<Props>();
</script>

<style scoped lang="scss">
.cat-card {
  cursor: pointer;

  position: relative;

  width: 100%;
  max-width: 210px;
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);

  transition: all 0.1s linear;

  &::after {
    content: '';

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;

    background-color: rgba(#000, 0.6);

    opacity: 0;

    transition:
      background-color 0.1s linear,
      opacity 0.1s linear;
  }

  &__image {
    width: 210px;
    height: 240px;
    object-fit: cover;
  }

  &__info {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    opacity: 0;

    transition: opacity 0.1s linear;

    h3 {
      color: #fff;
    }

    p {
      color: #fff;
    }
  }
}

.cat-card:hover {
  transform: translate(-4px, -8px);

  &::after {
    opacity: 1;
  }

  .cat-card__info {
    opacity: 1;
  }
}
</style>
