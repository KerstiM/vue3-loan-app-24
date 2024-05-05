<script setup lang="ts">

  withDefaults(defineProps<{
    label: string;
    value: string;
    noTopBorder?: boolean;
    noBottomBorder?: boolean;
  }>(), {
    noTopBorder: false,
    noBottomBorder: false,
  });

</script>

<template>
  <span
    v-if="!noTopBorder"
    class="list-item__separator">
  </span>
  <div class="list-item__item">
    <span>{{ label }}</span>
    <span>{{ value }}</span>
  </div>
  <span
    v-if="!noBottomBorder"
    class="list-item__separator">
  </span>
</template>

<style lang="scss">
  @import '@/scss/main.scss';

  body {
    background-color: $gray-20;
  }

  .list-item {
    &__separator {
      display: block;
      width: 100%;
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    }

    &__item {
      display: grid;
      grid-template-columns: 3fr 2fr;
      justify-items: start;
      padding: 16px 0;
    }
  }
</style>