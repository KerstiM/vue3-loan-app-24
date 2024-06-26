<script setup lang="ts">
  import { computed, ref, watch } from 'vue';
  import { IbButton, IbCalculator, IbInfo, IbModal } from '@/components';

  const modalVisible = ref(false);

  const openModal = () => {
    modalVisible.value = true;
  };

  const closeModal = () => {
    modalVisible.value = false;
  };

  const applyButton = 'Apply now';
  const largeLabel = 'Calculate your  ';
  const largeLabelCursive = 'monthly payment';
  const subInfo = 'Estimate your monthly payments based on the chosen loan amount and time period.';
  const disclaimer = 'The calculation is approximate and may differ from the conditions offered to you. Please submit a loan application to receive a personal offer. Financial services are provided by AS Inbank Finance.';

</script>

<template>
  <div
    class="calculator-section"
    id="calculator"
  >
    <div class="calculator-section__left-wrapper">
      <IbInfo
        :largeLabelCursive="largeLabelCursive"
        :largeLabel="largeLabel"
        :cursiveFirst="false"
      >
        <p class="calculator-section__sub-info">
          {{ subInfo }}
        </p>
      </IbInfo>
    </div>

    <div class="calculator-section__right-wrapper">
      <IbCalculator></IbCalculator>
      <div class="calculator-section__info-wrapper">
        <IbButton
          :label="applyButton"
          @click="openModal"
        ></IbButton>
        <p class="calculator-section__disclaimer">
          {{ disclaimer }}
        </p>
      </div>
    </div>

    <IbModal
      :visible="modalVisible"
      @close="closeModal">
    </IbModal>
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

    &__sub-info {
      opacity: 90%;
    }

    &__disclaimer {
      opacity: 60%;
    }

    &__disclaimer {
      font-size: 12px;
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
        background-color: rgba($black, 0.1);
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