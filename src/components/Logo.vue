<template>
  <header class="header">
    <img
      alt="inbank-logo"
      class="header__logo"
      src="@/assets/wordmark.svg"
    />
  </header>
</template>

<style scoped lang="scss">
  @import '@/scss/main.scss';

  .header {
    display: flex;
    align-items: center;
    width: auto;
    height: 76px;
    padding: 16px;
    
    &__logo {
      width: auto;
      height: auto;
      max-height: 100%;
    }

    @media (min-width: $breakpoint-md) {
        height: 116px;
        padding: 24px 40px;
    }
  }
</style>