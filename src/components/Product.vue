<template>
  <div class="product">
    <div class="product__info-wrapper">
      <p class="product__small-label">Mini loan</p>
      <div>
        <span class="product__large-label-cursive">Take charge </span>
        <span class="product__large-label">of unexpected costs</span>
      </div>
      <p class="product__sub-info">Finance unforeseen expenses with Inbank. A quick and easy application process with an instant credit decision.</p>
      <a href="#calculator" class="apply-now">Apply now</a>
    </div>
    <div class="product__image-wrapper">
      <img src="../assets/product-mini-loan.jpg" alt="product-mini-loan" class="product__image">
    </div>
  </div>
</template>

<style lang="scss">
.product {
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1536px;
  padding: 16px 16px 40px 16px;

  &__info-wrapper {
    background: #D9D4A7;
    border-radius: 100px;
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
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__sub-info,
  &__small-label,
  &__large-label,
  &__large-label-cursive {
    font-family: Inter;
    text-align: center;
  }

  &__sub-info {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }

  &__small-label {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }

  &__large-label,
  &__large-label-cursive {
    font-family: Bitter;
    font-size: 32px;
    font-weight: 400;
    line-height: 36px;
  }

  &__large-label-cursive {
    font-style: italic;
  }

  @media (min-width: 768px) {
    grid-template-columns: 2fr 3fr;
    grid-auto-columns: auto;
    gap: 20px;

    &__info-wrapper,
    &__image {
      border-radius: 200px;
    }

    &__info-wrapper {
      border-radius: 200px;
    }

    &__image-wrapper {
      order: 1;
    }

    &__large-label,
    &__large-label-cursive {
      font-size: 68px;
      line-height: 72px;
    }
  }
}
</style>