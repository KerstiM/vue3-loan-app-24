<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import Slider from 'primevue/slider';

const amount = ref<number>(1500);
const periodIndex = ref<number>(48);

const minAmount = 300;
const maxAmount = 7200;
const minPeriod = 2;
const maxPeriod = 72;

const monthlyPaymentOptions = ref([
  { periodLabel: '2 months', periodValue: 2 },
  { periodLabel: '6 months', periodValue: 6 },
  { periodLabel: '12 months', periodValue: 12 },
  { periodLabel: '36 months', periodValue: 36 },
  { periodLabel: '48 months', periodValue: 48 },
  { periodLabel: '72 months', periodValue: 72 },
]);

const selectedOption = ref(monthlyPaymentOptions.value.find(option => option.periodValue === periodIndex.value));

const updatePeriodIndex = () => {
  if (selectedOption.value) {
    periodIndex.value = selectedOption.value.periodValue;
  }
};

const updateSelectedOption = () => {
  selectedOption.value = monthlyPaymentOptions.value.find(option => option.periodValue === periodIndex.value);
};

watch(periodIndex, updateSelectedOption);

const updateSliderValueToClosestDropdownValue = (value: number) => {
  const closestPeriodValue = monthlyPaymentOptions.value.reduce((prev, curr) => {
    return Math.abs(curr.periodValue - value) < Math.abs(prev.periodValue - value)
      ? curr
      : prev;
  });

  periodIndex.value = closestPeriodValue.periodValue;
};

const calculateMonthlyPayment = computed(() => {
  const selectedAmount = amount.value;

  if (selectedOption.value) {
    const selectedPeriod = selectedOption.value.periodValue;
    const monthlyPayment = selectedAmount / selectedPeriod;

    return monthlyPayment.toFixed(2);
  } else {
    return 0;
  }
});
</script>

<template>
  <div
    class="calculator"
    id="calculator"
  >
    <div class="calculator__fields-wrapper">
      <div class="cell1">
        <FloatLabel>
          <InputNumber
            v-model="amount"
            :min="minAmount"
            :max="maxAmount"
            id="amount"
            class="calculator__field--input"
          />
          <label for="amount">Amount</label>
        </FloatLabel>
      </div>
      <div class="cell2">
        <Slider
          v-model="amount"
          :min="minAmount"
          :max="maxAmount"
          :step="100"
          ariaLabel="Period"
          class="calculator__field--slider"
        />
        <div class="calculator__field--labels">
          <span>{{ minAmount }} €</span>
          <span>{{ maxAmount }} €</span>
        </div>
      </div>
      <div class="cell3">
        <FloatLabel class="w-full">
          <Dropdown
            v-model="selectedOption"
            id="period"
            :options="monthlyPaymentOptions"
            optionLabel="periodLabel"
            class="calculator__field--input"
            @change="updatePeriodIndex"
          />
          <label for="period">Period</label>
        </FloatLabel>
      </div>
      <div class="cell4">
        <Slider
          v-model="periodIndex"
          :min="minPeriod"
          :max="maxPeriod"
          :step="1"
          class="calculator__field--slider"
          @change="updateSliderValueToClosestDropdownValue"
        />
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
      {{ calculateMonthlyPayment }}€
    </p>
  </div>
</template>

<style lang="scss">
  @import '@/assets/main.scss';

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
      background: rgba($purple, 0.1);

      .p-slider-handle {
        background: $lightPurple;
        width: 52px;
        height: 36px;
        border-radius: 100px;
        top: -6px;
        border: none;
      }

      .p-slider-handle:after {
        content: url('@/assets/drag-button.svg');
      }

      .p-slider-range {
        background: $purple;
        height: 4px;
        border-radius: 4px;
      }
    }

    &__field--labels {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
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

    .cell2 {
      grid-row: 2;
    }

    .cell4 {
      grid-row: 4;
    }

    .cell1,
    .cell2,
    .cell3,
    .cell4 {
      padding: 10px 0;
    }

    @media (min-width: $breakpoint-md) {
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
        }

        &--large {
          font-size: 68px;
          line-height: 72px;
        }
      }

      .cell1,
      .cell2,
      .cell3,
      .cell4 {
        padding: 10px 0;
      }

      .cell2 {
        grid-row: 1;
      }

      .cell4 {
        grid-row: 2;
      }
    }
  }
</style>