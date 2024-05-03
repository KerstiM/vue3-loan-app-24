<script setup lang="ts">
  import { Card, Info } from '@/components'
  import { useProductStore } from '@/stores/productStore';

  const productStore = useProductStore();
  const { getFirstName } = productStore;

  import { useRouter } from 'vue-router';

  const router = useRouter();

  const onClick = () => {
    router.push('/');
  };

  const displayFirstName = () => {
    return getFirstName()?.trim().length === 0
      ? 'Client'
      : getFirstName();
  }
</script>

<template>
  <Card :first-name="displayFirstName()">

  </Card>
</template>

<style lang="scss">
  @import '@/assets/main.scss';

  body {
    background-color: $lightGray;
  }
</style>