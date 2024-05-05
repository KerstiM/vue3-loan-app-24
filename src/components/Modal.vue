<script setup lang="ts">
  import { useProductStore } from '@/stores/productStore';
  import { useRouter } from 'vue-router';
  import { IbButton, IbErrorMessage } from '@/components';
  import { useFormValidation } from '@/composables/formValidation';

  const productStore = useProductStore();
  const { conditions, form } = productStore;
  const { validateOnBlur, v$ } = useFormValidation(form);
  const router = useRouter();

  async function onSubmit() {
    const result = await v$.$validate();

    if (!result) return;

    const monthlyIncome = productStore.getMonthlyIncome();
    const nextStep = monthlyIncome && monthlyIncome > conditions.salary
      ? '/positive'
      : '/negative';

    router.push(nextStep);
  }

  type Props = {
    visible?: boolean;
  };

  withDefaults(defineProps<Props>(), {
    visible: false,
  });

  const emit = defineEmits<{
      'close': [value: void]
  }>();

  const closeModal = () => {
    emit('close');
  };

  const personalDetails = 'Personal details';
  const firstNameLabel = 'First name';
  const lastNameLabel = 'Last name';
  const mobileNumberLabel = 'Mobile number';
  const emailLabel = 'E-mail';
  const monthlyIncomeLabel = 'Monthly income';
  const submitButton = 'Submit';
</script>

<template>
  <transition name="modal-fade">
    <div v-if="visible" class="modal-overlay">
      <div class="modal">

        <div class="modal__heading">
          <p class="modal__title">
            {{ personalDetails }}
          </p>
          <IbButton
            icon="pi pi-times"
            display="close"
            @click="closeModal"
          ></IbButton>
        </div>
        
        <FloatLabel>
          <InputText
            v-model="form.firstName"
            id="first_name"
            class="w-100"
            :class="{ 'error': v$.firstName.$error }"
            @blur="validateOnBlur('firstName')"
          />
          <label for="first_name">{{ firstNameLabel }}</label>
          <IbErrorMessage
            :hasError="v$.firstName.$error"
            :errorMessage="v$.firstName.$errors[0]?.$message"
          ></IbErrorMessage>
        </FloatLabel>

        <FloatLabel>
          <InputText
            v-model="form.lastName"
            id="last_name"
            class="w-100"
            :class="{ 'error': v$.lastName.$error }"
            @blur="validateOnBlur('lastName')"
          />
          <label for="last_name">{{ lastNameLabel }}</label>
          <IbErrorMessage
            :hasError="v$.lastName.$error"
            :errorMessage="v$.lastName.$errors[0]?.$message"
            ></IbErrorMessage>
        </FloatLabel>

        <FloatLabel>
          <InputText
            v-model="form.mobileNumber"
            id="mobile_number"
            class="w-100"
            :class="{ 'error': v$.mobileNumber.$error }"
            @blur="validateOnBlur('mobileNumber')"
          />
          <label for="mobile_number">{{ mobileNumberLabel }}</label>
          <IbErrorMessage
            :hasError="v$.mobileNumber.$error"
            :errorMessage="v$.mobileNumber.$errors[0]?.$message"
          ></IbErrorMessage>
        </FloatLabel>

        <FloatLabel>
          <InputText
            v-model="form.email"
            id="email"
            class="w-100"
            :class="{ 'error': v$.email.$error }"
            @blur="validateOnBlur('email')"
          />
          <label for="email">{{ emailLabel }}</label>
          <IbErrorMessage
            :hasError="v$.email.$error"
            :errorMessage="v$.email.$errors[0]?.$message"
          ></IbErrorMessage>
        </FloatLabel>

        <FloatLabel>
          <InputNumber
            v-model="form.monthlyIncome"
            id="monthly_income"
            class="w-100"
            :class="{ 'error': v$.monthlyIncome.$error }"
            @blur="validateOnBlur('monthlyIncome')"
          />
          <label for="monthlyIncome">{{ monthlyIncomeLabel }}</label>
          <IbErrorMessage
            :hasError="v$.monthlyIncome.$error"
            :errorMessage="v$.monthlyIncome.$errors[0]?.$message"
          ></IbErrorMessage>
        </FloatLabel>

        <IbButton
          :label="submitButton"
          class="w-100"
          @click.stop="onSubmit"
        ></IbButton>

      </div>
    </div>
  </transition>
</template>

<style lang="scss">
  @import '@/scss/main.scss';

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($black, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }

  .modal {
    position: absolute;
    bottom: 0;
    background-color: $white;
    border-radius: $border-radius-30 $border-radius-30 0 0;
    padding: 40px;
    box-shadow: 0 2px 4px rgba($black, 0.2);
    width: 100%;
    
    &__heading {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    &__title {
      margin: 0;
      padding-bottom: 12px;
    }

    .p-float-label {
      margin: 20px 0;
    }

    @media (min-width: $breakpoint-sm) {
      position: relative;
      border-radius: $border-radius-30;
      max-width: 540px;
      z-index: 2;
    }
  }
</style>
