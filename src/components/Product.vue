<script setup lang="ts">
  import { Info, Button } from '@/components';
</script>
<template>
  <div class="product">
    <div class="product__info-wrapper">
      <Info
        smallLabel="Mini loan"
        largeLabelCursive="Take charge "
        largeLabel="of unexpected costs"
        subInfo="Finance unforeseen expenses with Inbank. A quick and easy application process with an instant credit decision."
        buttonText="Apply now"
        link="#calculator"
      >
        <template #button>
          <Button
            as="a"
            label="Apply now"
            href="#calculator"
            color="light"
          ></Button>
        </template>
      </Info>
    </div>
    <div class="product__image-wrapper">
      <img src="../assets/product-mini-loan.jpg" alt="product-mini-loan" class="product__image">
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import '@/assets/main.scss';

  .product {
    display: grid;
    grid-template-columns: 1fr;
    max-width: $screenWidth;
    padding: 16px 16px 40px 16px;
    margin: 0 auto;

    &__info-wrapper {
      background: $yellow;
      border-radius: $borderRadius100;
      padding: 64px 24px 64px 24px;
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
      border-radius: $borderRadius100;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media (min-width: $breakpoint-md) {
      grid-template-columns: 2fr 3fr;
      grid-auto-columns: auto;
      gap: 20px;

      &__info-wrapper,
      &__image {
        border-radius: $borderRadius200;
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