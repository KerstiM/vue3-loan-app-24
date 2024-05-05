<script setup lang="ts">
  import { Button, Info, ListItem} from '@/components';
  import { useRouter } from 'vue-router';
  import { useGrid } from 'vue-screen';
  import { gridBreakpoints } from '@/utils/constants';
  import { computed } from 'vue';
  import { useProductStore } from '@/stores/productStore';

  const productStore = useProductStore();
  const { getLoanAmount, getLoanPeriod, calculateMonthlyPayment } = productStore;

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
  <div class="card-positive">
    <div class="card-positive__left-wrapper">
      <img
        v-if="computedImage"
        src="../assets/small-loan.svg"
        alt="small-loan"
        class="card-positive__image"
      >
      <img
        v-else
        src="../assets/mobile-small-loan.svg"
        alt="mobile-small-loan"
        class="card-positive__image"
      >
    </div>
    <Info
      class="card-positive__right-wrapper"
      :largeLabelCursive="{
        text: 'Good ',
        small: true
      }"
      :largeLabel="{
        text: 'news!',
        small: true
      }"
    >
      <p class="m-b-40">Your loan has been approved</p>
      <ListItem
        label="Loan amount"
        :value="`${getLoanAmount()} €`"
        no-bottom-border
      />
      <ListItem
        label="Loan period"
        :value="`${getLoanPeriod()} months`"
        no-bottom-border
      />
      <ListItem
        label="Monthly payment"
        :value="`${calculateMonthlyPayment} €`"
      />
      <template #button>
        <Button
          class="m-t-40"
          label="Back to home page"
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

  .card-positive {
    display: grid;
    grid-template-columns: 1fr;
    flex-direction: column;
    background: $white;
    max-width: 1200px;
    text-align: center;
    margin: 0 auto;
    position: relative;
    width: 100%;
    height: 100vh;
    padding: 16px;
    align-content: baseline;
    border: 4px solid $white;
    
    &__left-wrapper {
      padding: 24px;
      width: 100%;
    }

    &__image {
      width: 100%;
      object-fit: cover;
    }

    @media (min-width: $breakpoint-md) {
      position: relative;
      display: grid;
      flex-direction: row;
      grid-template-columns: 1fr 1fr;
      border-radius: $border-radius-20;
      height: auto;
      padding: 0;

      &__left-wrapper {
        padding: 80px 40px;
        background: $yellow-20;
        border-radius: $border-radius-20 0 0 $border-radius-20;
      }

      &__image {
        margin-right: -150px;
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
        padding: 80px 100px;
      }
    }
  }
</style>