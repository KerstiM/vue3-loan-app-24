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
</script>

<template>
  <transition name="modal-fade">
    <div v-if="visible" class="modal-overlay">
      <div class="modal">

        <div class="modal__heading">
          <p class="modal__title">
            Personal details
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
            @blur="validateOnBlur('firstName')"
          />
          <label for="first_name">First name</label>
          <IbErrorMessage
            :hasError="v$.firstName.$error"
            :errorMessage="v$.firstName.$errors[0]?.$message"
          />
        </FloatLabel>

        <FloatLabel>
          <InputText
            v-model="form.lastName"
            id="last_name"
            class="w-100"
            @blur="validateOnBlur('lastName')"
          />
          <label for="last_name">Last name</label>
          <IbErrorMessage
            :hasError="v$.lastName.$error"
            :errorMessage="v$.lastName.$errors[0]?.$message"
          />
        </FloatLabel>

        <FloatLabel>
          <InputText
            v-model="form.mobileNumber"
            id="mobile_number"
            class="w-100"
            @blur="validateOnBlur('mobileNumber')"
          />
          <label for="mobile_number">Mobile number</label>
          <IbErrorMessage
            :hasError="v$.mobileNumber.$error"
            :errorMessage="v$.mobileNumber.$errors[0]?.$message"
          />
        </FloatLabel>

        <FloatLabel>
          <InputText
            v-model="form.email"
            id="email"
            class="w-100"
            @blur="validateOnBlur('email')"
          />
          <label for="email">E-mail</label>
          <IbErrorMessage
            :hasError="v$.email.$error"
            :errorMessage="v$.email.$errors[0]?.$message"
          />
        </FloatLabel>

        <FloatLabel>
          <InputNumber
            v-model="form.monthlyIncome"
            id="monthlyIncome"
            class="w-100"
            @blur="validateOnBlur('monthlyIncome')"
          />
          <label for="monthlyIncome">Monthly income</label>
          <IbErrorMessage
            :hasError="v$.monthlyIncome.$error"
            :errorMessage="v$.monthlyIncome.$errors[0]?.$message"
          />
        </FloatLabel>
      
        <IbButton
          label="Submit"
          @click.stop="onSubmit"
          class="w-100"
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

    .p-inputtext {
      border-radius: $border-radius-8;

      &:focus {
        border: 2px solid $purple-80;
        border-radius: $border-radius-8;
        box-shadow: none;
      }

      &:hover {
        border: 1px solid $purple-80;
        box-shadow: none;
      }
    }

    .p-float-label {
      margin: 20px 0;

      label {
        position: absolute;
        top: 0.15rem;
        background: $white;
        padding: 0 5px;
        left: 10px;
        color: $purple-80;
        font-weight: 300;
        font-family: Inter;

        &:focus {
          color: $purple-80;
        }
      }
    }

    @media (min-width: $breakpoint-sm) {
      position: relative;
      border-radius: $border-radius-30;
      max-width: 540px;
      z-index: 2;
    }
  }
</style>
