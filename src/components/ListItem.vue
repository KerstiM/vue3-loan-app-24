<script setup lang="ts">
  import { IbSeparator } from '@/components';

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
  <IbSeparator v-if="!noTopBorder"></IbSeparator>
  <div class="list-item__item">
    <span>{{ label }}</span>
    <span>{{ value }}</span>
  </div>
  <IbSeparator v-if="!noBottomBorder"></IbSeparator>
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
      border-bottom: 1px solid rgba($black, 0.15);
    }

    &__item {
      display: grid;
      grid-template-columns: 3fr 2fr;
      justify-items: start;
      padding: 16px 0;
    }
  }
</style>