<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { Button, Calculator, Info, Modal } from '@/components';

const modalVisible = ref(false);

const openModal = () => {
  modalVisible.value = true;
};

const closeModal = () => {
  modalVisible.value = false;
};
</script>

<template>
  <div
    class="calculator-section"
    id="calculator"
  >
    <div class="calculator-section__left-wrapper">
      <Info
        largeLabelCursive="monthly payment"
        largeLabel="Calculate your  "
        :cursiveFirst="false"
      >
        <p class="calculator-section__sub-info">
          Estimate your monthly payments based on the chosen loan amount and time period.
        </p>
      </Info>
    </div>
    <div class="calculator-section__right-wrapper">
      <Calculator></Calculator>
      <div class="calculator-section__info-wrapper">
        <Button
          label="Apply now"
          @click="openModal"
        ></Button>
        <p class="calculator-section__disclaimer">
          The calculation is approximate and may differ from the conditions offered to you.
          Please submit a loan application to receive a personal offer.
          Financial services are provided by AS Inbank Finance.
        </p>
      </div>
    </div>
    <Modal
      :visible="modalVisible"
      @close="closeModal">
    </Modal>
  </div>
</template>

<style lang="scss">
  @import '@/scss/main.scss';

  .calculator-section {
    display: grid;
    grid-template-columns: 1fr;
    flex-direction: column;
    background: $purple-20;
    padding: 40px 16px 40px 16px;
    overflow:hidden;

    &__left-wrapper {
      text-align: start;
    }

    &__sub-info,
    &__disclaimer {
      opacity: 60%;
    }

    &__disclaimer {
      font-family: Inter;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      text-align: left;
      margin-bottom: 0;
      padding-top: 20px;
    }

    &__info-wrapper {
      text-align: center;
    }

    @media (min-width: $breakpoint-sm) {
      position: relative;
      display: grid;
      flex-direction: row;
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      padding: 80px 40px 80px 40px;

      &__left-wrapper {
        text-align: center;
        padding: 72px 40px 72px 40px;
      }

      &__left-wrapper::after {
        content: "";
        position: absolute;
        top: 10%;
        bottom: 10%;
        right: 50%;
        width: 1px;
        background-color: rgba(black, 0.1);
      }

      &__right-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      &__info-wrapper {
        text-align: center;
      }
    }
  }
</style>