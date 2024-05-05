<script setup lang="ts">
  import { IbButton, IbInfo, IbListItem} from '@/components';
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

  const titleCursive =  'Good ';
  const title =  'news!';
  const subTitle = 'Your loan has been approved';
  const amount = 'Loan amount';
  const period = 'Loan period';
  const payment = 'Monthly payment';
  const periodUnits = 'months';
  const currencyUnits = '€';
  const button = 'Back to home page';
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
    <IbInfo
      class="card-positive__right-wrapper"
      :largeLabelCursive="{
        text: titleCursive,
        small: true
      }"
      :largeLabel="{
        text: title,
        small: true
      }"
    >
      <p class="m-b-40">{{ subTitle }}</p>
      <IbListItem
        :label="amount"
        :value="`${getLoanAmount()} ${currencyUnits}`"
        no-bottom-border
      />
      <IbListItem
        :label="period"
        :value="`${getLoanPeriod()} ${periodUnits}`"
        no-bottom-border
      />
      <IbListItem
        :label="payment"
        :value="`${calculateMonthlyPayment} ${currencyUnits}`"
      />
      <template #button>
        <IbButton
          class="m-t-40"
          :label="button"
          @click="onClick"
        ></IbButton>
      </template>
    </IbInfo>
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