<script setup lang="ts">
  import { useLoanCalculator } from '@/composables/loanCalculator'

  const {
    form,
    minAmount,
    maxAmount,
    minPeriod,
    maxPeriod,
    monthlyPaymentOptions,
    selectedOption,
    updateDropdownValueToClosestSliderValue,
    updateSliderValueToClosestDropdownValue,
    getMonthlyPayment,
  } = useLoanCalculator();

</script>

<template>
  <div
    class="calculator"
    id="calculator"
  >
    <div class="calculator__fields-wrapper">
      <div class="calculator__cell--1">
        <FloatLabel>
          <InputNumber
            v-model="form.loanAmount"
            :min="minAmount"
            :max="maxAmount"
            id="amount"
            class="calculator__field--input"
          />
          <label for="amount">Amount</label>
        </FloatLabel>
      </div>
      <div class="calculator__cell--2">
        <div class="calculator__slider-wrapper">
          <Slider
            v-model="form.loanAmount"
            :min="minAmount"
            :max="maxAmount"
            :step="100"
            ariaLabel="Period"
            class="calculator__field--slider"
          />
        </div>
        <div class="calculator__field--labels">
          <span>{{ minAmount }} €</span>
          <span>{{ maxAmount }} €</span>
        </div>
      </div>
      <div class="calculator__cell--3">
        <FloatLabel class="w-full">
          <Dropdown
            v-model="selectedOption"
            id="period"
            :options="monthlyPaymentOptions"
            optionLabel="periodLabel"
            class="calculator__field--input"
            @change="updateDropdownValueToClosestSliderValue"
          />
          <label for="period">Period</label>
        </FloatLabel>
      </div>
      <div class="calculator__cell--4">
        <div class="calculator__slider-wrapper">
          <Slider
            v-model="form.loanPeriod"
            :min="minPeriod"
            :max="maxPeriod"
            :step="1"
            class="calculator__field--slider"
            @change="updateSliderValueToClosestDropdownValue"
          />
        </div>
        <div class="calculator__field--labels">
          <span>{{ minPeriod }} months</span>
          <span>{{ maxPeriod }} months</span>
        </div>
      </div>
    </div>

    <p class="calculator__label--small">
      Monthly payment
    </p>
    <p class="calculator__label--large">
      {{ getMonthlyPayment() }}€
    </p>
  </div>
</template>

<style lang="scss">
  @import '@/scss/main.scss';

  .calculator {
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    width: 100%;

    &__fields-wrapper {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, auto);
      gap: 10px;
      width: 100%;
    }

    &__field--slider {
      position: relative;
      background: $purple-40;

      .p-slider-handle {
        background: $purple-60;
        border-radius: $border-radius-100;
        border: none;
        width: 52px;
        height: 36px;
        top: -6px;
        z-index: 1;
      }

      .p-slider-handle:after {
        content: url('@/assets/drag-icons.svg');
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      .p-slider-range {
        margin-left: -10px;
      }

      .p-slider-range {
        background: $purple;
        height: 4px;
        border-radius: $border-radius-4;
      }
    }
    &__field--slider:after {
      content: '';
      background: rgba($purple, 0.1);
      height: 4px;
      position: absolute;
      top: 0px;
      left: 0px;
      right: -40px;
      border-radius: $border-radius-100;
      border: none;
    }

    &__field--labels {
      display: flex;
      justify-content: space-between;
      margin-top: 12px;
      font-family: Inter;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      opacity: 60%;
    }

    &__field--input {
      width: 100%;

      .p-inputnumber-input {
        width: 100%;
      }
    }

    &__label {
      &--small,
      &--large {
        font-weight: 400;
        text-align: center;
        margin-top: 0;
      }

      &--small {
        font-family: Inter;
        font-size: 16px;
        line-height: 24px;
      }

      &--large {
        font-family: Bitter;
        font-size: 32px;
        line-height: 36px;
      }
    }

    &__cell {
      &--1,
      &--3 {
        margin-top: 40px;
      }

      &--2 {
        grid-row: 2;
      }

      &--4 {
        grid-row: 4;
      }
    }

    &__slider-wrapper {
      padding: 16px 40px 10px 10px;
    }

    @media (min-width: $breakpoint-lg) {
      &__fields-wrapper {
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-template-rows: auto auto;
        row-gap: 24px;
      }

      &__label {
        &--small,
        &--large {
          font-weight: 400;
          text-align: center;
          margin-top: 0;
        }

        &--small {
          font-family: Inter;
          font-size: 16px;
          line-height: 24px;
          margin-top: 40px;
        }

        &--large {
          font-size: 68px;
          line-height: 72px;
          margin-bottom: 20px;
        }
      }

      &__field--slider {
        .p-slider-handle:after {
          content: url('@/assets/drag-icons.svg');
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .p-slider-range {
          margin-left: -10px;
        }
      }

      &__field--slider:after {
        content: '';
        background: rgba($purple, 0.1);
        height: 4px;
        position: absolute;
        top: 0px;
        left: 0px;
        right: -40px;
        border-radius: $border-radius-100;
        border: none;
      }

      &__slider-wrapper {
        padding: 16px 40px 10px 10px;
      }

      &__cell {
        &--1,
        &--3 {
          margin-top: 0;
        }
        &--2 {
          grid-row: 1;
        }

        &--4 {
          grid-row: 2;
        }
      }
    }
  }
</style>