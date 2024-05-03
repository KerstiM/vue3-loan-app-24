<script setup lang="ts">
  import { Card, Info } from '@/components'
  import { useProductStore } from '@/stores/productStore';

  const productStore = useProductStore();
  const { form, getFirstName } = productStore;

  import { useRouter } from 'vue-router';

  const router = useRouter();

  const onClick = () => {
    router.push('/');
  };
</script>

<template>
  getFirstName: {{ getFirstName() }}
  <Card :first-name="getFirstName()">

  </Card>
</template>

<style lang="scss">
  @import '@/assets/main.scss';

  body {
    background-color: $lightGray;
  }
</style>