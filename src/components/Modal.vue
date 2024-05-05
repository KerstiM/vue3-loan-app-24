<script setup lang="ts">
  import { toRef } from 'vue';
  import { useProductStore } from '@/stores/productStore';
  import { useRouter } from 'vue-router';
  import { Button, ErrorMessage } from '@/components';
  import { useFormValidation } from '@/composables/formValidation';

  const productStore = useProductStore();
  const { conditions, form } = productStore;
  const { v$ } = useFormValidation(form);
  const router = useRouter();

  async function onSubmit() {
    const result = await v$.value.$validate();

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
</script>

<template>
  <transition name="modal-fade">
    <div v-if="visible" class="modal-overlay" @click="closeModal">
      <div class="modal" @click.stop>

        <div class="modal__heading">
          <p class="modal__title">
            Personal details
          </p>
          <Button
            icon="pi pi-times"
            display="close"
            @click="closeModal"
          ></Button>
        </div>

        <FloatLabel class="modal__float-label">
          <InputText
            id="first_name"
            class="modal__float-input"
            v-model="form.firstName"
          />
          <label for="first_name">First name</label>
          <ErrorMessage
            :hasError="v$.firstName.$error"
            :errorMessage="v$.firstName.$errors[0]?.$message"
          />
        </FloatLabel>

        <FloatLabel class="modal__float-label">
          <InputText
            id="last_name"
            class="modal__float-input"
            v-model="form.lastName"
          />
          <label for="last_name">Last name</label>
          <ErrorMessage
            :hasError="v$.lastName.$error"
            :errorMessage="v$.lastName.$errors[0]?.$message"
          />
        </FloatLabel>

        <FloatLabel class="modal__float-label">
          <InputText
            id="mobile_number"
            class="modal__float-input"
            v-model="form.mobileNumber"
          />
          <label for="mobile_number">Mobile number</label>
          <ErrorMessage
            :hasError="v$.mobileNumber.$error"
            :errorMessage="v$.mobileNumber.$errors[0]?.$message"
          />
        </FloatLabel>

        <FloatLabel class="modal__float-label">
          <InputText
            id="email"
            class="modal__float-input"
            v-model="form.email"
          />
          <label for="email">E-mail</label>
          <ErrorMessage
            :hasError="v$.email.$error"
            :errorMessage="v$.email.$errors[0]?.$message"
          />
        </FloatLabel>

        <FloatLabel class="modal__float-label">
          <InputNumber
            id="income"
            class="modal__float-input"
            v-model="form.monthlyIncome"
          />
          <label for="income">Monthly income</label>
          <ErrorMessage
            :hasError="v$.monthlyIncome.$error"
            :errorMessage="v$.monthlyIncome.$errors[0]?.$message"
          />
        </FloatLabel>
      
        <Button
          label="Submit"
          class="modal__button"
          @click="onSubmit"
        ></Button>

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
    background-color: rgba(0, 0, 0, 0.5);
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
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
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

    &__float-input {
      width: 100%;
    }

    &__button {
      width: 100%;
    }

    .p-inputtext {
      border-radius: $border-radius-8;
    }

    .p-inputtext:focus {
      border: 2px solid $purple-80;
      border-radius: $border-radius-8;
      box-shadow: none;
    }

    .p-inputtext:hover {
      border: 1px solid $purple-80;
      box-shadow: none;
    }

    .p-float-label {
      margin: 20px 0;
    }

    .p-float-label label {
      position: absolute;
      top: 0.15rem;
      background: $white;
      padding: 0 5px;
      left: 10px;
      color: $purple-80;
      font-weight: 300;
      font-family: Inter;
    }

    .p-float-label label:focus {
      color: $purple-80;
    }
  }

  @media (min-width: $breakpoint-sm) {
    .modal {
      position: relative;
      border-radius: $border-radius-30;
      max-width: 540px;
      z-index: 2;
    }
  }
</style>
