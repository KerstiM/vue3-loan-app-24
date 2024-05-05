<script setup lang="ts">
  import { Button, Info, Separator } from '@/components';
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

  const toTitleCase = (firstName?: string) => {
    const words = firstName?.split(/[ -]/);
  
    const capitalizedWords = words?.map(word =>
      word.charAt(0).toUpperCase() +
      word.slice(1).toLowerCase()
    );

    return capitalizedWords?.join(" ");
  }
</script>

<template>
  <div class="card-negative">
    <Info
      :largeLabelCursive="{
        text: 'Dear ',
        small: true
      }"
      :largeLabel="{
        text: toTitleCase(displayFirstName()),
        small: true
      }"
    >
      <p class="card-negative__sub-title">
        Unfortunately, your loan was denied.
      </p>
      <Separator class="m-t-40"></Separator>
      <p class="card-negative__info">
        In addition to your income and expenses, a number of other factors play a role in loan decisions.
      </p>
      <Separator></Separator>
      <template #button>
        <Button
          class="w-100 m-t-40"
          label="Exit"
          @click="onClick"
        ></Button>
      </template>
    </Info>
  </div>
</template>

<style lang="scss">
  @import '@/scss/main.scss';

  body {
    background-color: $gray-20;
  }

  .card-negative {
    background: $white;
    border-radius: 0;
    max-width: 792px;
    height: 100vh;
    padding: 40px;
    text-align: center;
    margin: 0 auto;
    width: 100vw;

    &__sub-title {
      margin: 0
    }

    &__info {
      font-size: 14px;
      line-height: 20px;
      opacity: 75%;
    }

    @media (min-width: $breakpoint-md) {
      padding: 80px 200px;
      border-radius: $border-radius-20;
      height: 100%;
    }
  }
</style>