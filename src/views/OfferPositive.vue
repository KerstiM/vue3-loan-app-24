<script setup lang="ts">
  import { Button, Info, ListItem} from '@/components';
  import { useRouter } from 'vue-router';
  import { useGrid } from 'vue-screen';
  import { gridBreakpoints } from '@/utils/constants';
  import { computed } from 'vue';

  const grid = useGrid(gridBreakpoints);
  const router = useRouter();

  const computedImage = computed(() => {
    return grid.md;
  })

  const onClick = () => {
    router.push('/');
  };
</script>

<template>
  <div class="card">
    <div class="card__left-wrapper">
      <img
        v-if="computedImage"
        src="../assets/small-loan.svg"
        alt="small-loan"
        class="card__image"
      >
      <img
        v-else
        src="../assets/mobile-small-loan.svg"
        alt="mobile-small-loan"
        class="card__image"
      >
    </div>
    <Info
      class="card__right-wrapper"
      :largeLabelCursive="{
        text: 'Good ',
        small: true
      }"
      :largeLabel="{
        text: 'news',
        small: true
      }"
      subInfo="Your loan has been approved."
    >
      <ListItem
        label="Loan amount"
        value="2 500 €"
        no-bottom-border
      />
      <ListItem
        label="Loan period"
        value="48 months"
        no-bottom-border
      />
      <ListItem
        label="Monthly payment"
        value="144.84 €"
      />
      <template #button>
        <Button
          class="card__button"
          label="Back to home page"
          @click="onClick"
        ></Button>
      </template>
    </Info>
  </div>
</template>

<style lang="scss">
  @import '@/assets/main.scss';

  body {
    background-color: $lightGray;
  }

  .card {
    display: grid;
    grid-template-columns: 1fr;
    flex-direction: column;
    background: $white;
    border-radius: 20px;
    max-width: 1200px;
    text-align: center;
    margin: 0 auto;
    position: relative;
    width: 100%;
    height: auto;
    padding: 16px;
    
    &__left-wrapper {
      padding: 24px;
      width: 100%;
      height: 100%;
    }

    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__button {
      margin-top: 40px;
      padding: 12px 24px;
      width: 100%;
    }

    @media (min-width: $breakpoint-md) {
      position: relative;
      display: grid;
      flex-direction: row;
      grid-template-columns: 1fr 1fr;
      border-radius: 20px;

      &__left-wrapper {
        padding: 80px 40px;
        background: $lightYellow;
        border-radius: 20px 0 0 20px;
      }

      &__image {
        margin-right: -150px;
        width: 100%;
        height: auto;
      }

      &__right-wrapper {
        display: flex;
        flex-direction: column;
        padding: 56px;
      }
    }

    @media (min-width: $breakpoint-lg) {
      &__right-wrapper {
        display: flex;
        flex-direction: column;
        padding: 80px 100px;
      }
    }
  }
</style>