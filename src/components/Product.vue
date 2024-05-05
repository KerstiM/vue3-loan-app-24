<script setup lang="ts">
  import { IbInfo, IbButton } from '@/components';

  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById('calculator');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<template>
  <div class="product">
    <div class="product__info-wrapper">
      <IbInfo
        smallLabel="Mini loan"
        largeLabelCursive="Take charge "
        largeLabel="of unexpected costs"
        buttonText="Apply now"
        link="#calculator"
      >
        <p class="product__sub-info">
          Finance unforeseen expenses with Inbank. A quick and easy application process with an instant credit decision.
        </p>
        <template #button>
          <IbButton
            label="Apply now"
            color="light"
            @click="scrollToCalculator"
          ></IbButton>
        </template>
      </IbInfo>
    </div>
    <div class="product__image-wrapper">
      <img
        src="../assets/product-mini-loan.jpg"
        alt="product-mini-loan"
        class="product__image"
      >
    </div>
  </div>
</template>

<style lang="scss">
  @import '@/scss/main.scss';

  $screenWidth: 1536px;

  .product {
    display: grid;
    grid-template-columns: 1fr;
    max-width: $screenWidth;
    padding: 16px 16px 40px 16px;
    margin: 0 auto;

    &__info-wrapper {
      background: $yellow;
      border-radius: $border-radius-100;
      padding: 64px 24px;
      align-content: center;
      text-align: center;
      margin-top: 16px;
    }

    &__image-wrapper {
      padding-top: 100%;
      position: relative;
      order: -1;
    }

    &__image {
      border-radius: $border-radius-100;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__sub-info {
      opacity: 90%;
    }

    @media (min-width: $breakpoint-md) {
      grid-template-columns: 2fr 3fr;
      grid-auto-columns: auto;
      gap: 20px;

      &__info-wrapper,
      &__image {
        border-radius: $border-radius-200;
      }

      &__info-wrapper {
        margin-top: 0;
      }

      &__image-wrapper {
        order: 1;
      }
    }
  }
</style>