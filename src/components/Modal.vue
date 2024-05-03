<script setup lang="ts">
  import { ModalOverlay, Calculator, Info, Button } from '@/components';

  const emit = defineEmits<{
      'close': [value: void]
  }>();

  const closeModal = () => {
    emit('close');
  };
</script>

<template>
  <div class="modal">
    <div>
      <span class="modal__large-label-cursive">Dear </span>
      <span class="modal__large-label">Anna</span>
    </div>
    <p class="modal__small-label">Unfortunately, your loan was denied.</p>
    <span class="modal__separator"></span>
    <p class="modal__sub-info">In addition to your income and expenses, a number of other factors play a role in loan decisions.</p>
    <span class="modal__separator"></span>
    <Button
      label="Exit"
      @click="closeModal"
    ></Button>
  </div>
</template>

<style lang="scss">
  @import '@/assets/main.scss';

  body {
    background-color: $lightGray;
  }

  .modal {
    background: $white;
    border-radius: 20px;
    max-width: 792px;
    padding: 80px 204px;
    text-align: center;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__sub-info,
    &__small-label,
    &__large-label,
    &__large-label-cursive {
      font-family: Inter;
      text-align: center;
    }

    &__sub-info {
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
    }

    &__small-label {
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      padding-bottom: 20px;
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

    &__separator {
      display: block;
      width: 100%;
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    }

    &__button {
      margin-top: 40px;
      padding: 12px 24px;
    }
  }
</style>