<script setup lang="ts">
  import { Button, Info } from '@/components';
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
      <div class="card-negative__content">
        <p class="card-negative__small-info">
          Unfortunately, your loan was denied.
        </p>
        <span class="card-negative__separator"></span>
        <p class="card-negative__sub-info">
          In addition to your income and expenses, a number of other factors play a role in loan decisions.
        </p>
        <span class="card-negative__separator"></span>
      </div>
      <template #button>
        <Button
          class="card-negative__button"
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100vw;

    &__sub-info {
      font-size: 14px;
      line-height: 20px;
      opacity: 75%;
    }

    &__small-info {
      margin: 0
    }

    &__separator {
      display: block;
      width: 100%;
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    }

    &__separator:first-of-type {
      margin-top: 40px;
    }

    &__button {
      margin-top: 40px;
      padding: 12px 24px;
      width: 100%;
    }

    @media (min-width: $breakpoint-md) {
      padding: 80px 204px;
      border-radius: $border-radius-20;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
</style>