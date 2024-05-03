<script setup lang="ts">
  import { toRef } from 'vue';
  import { Button } from '@/components';

  import { useProductStore } from '@/stores/productStore';
  import { useRouter } from 'vue-router';
  import { Form } from '@/types';

  const productStore = useProductStore();
  const { form, updateForm } = productStore;
  const router = useRouter();

  function updateFirstName(event: Event) {
    const target = event.target as HTMLInputElement;

    productStore.updateForm('firstName', target.value);
  }

  function updateLastName(event: Event) {
    const target = event.target as HTMLInputElement;

    productStore.updateForm('lastName', target.value)
  }

  function updateMobileNumber(event: Event) {
    const target = event.target as HTMLInputElement;

    productStore.updateForm('mobileNumber', target.value)
  }

  function updateEmail(event: Event) {
    const target = event.target as HTMLInputElement;

    productStore.updateForm('email', target.value)
  }

  function updateMonthlyIncome(event: Event) {
    const target = event.target as HTMLInputElement;

    productStore.updateForm('monthlyIncome', target.value)
  }

  type Props = {
    visible?: boolean;
    value: string;
  };

  const props = withDefaults(defineProps<Props>(), {
    visible: false,
    value: '',
  });

  const emit = defineEmits<{
      'close': [value: void]
  }>();

  const visibleRef = toRef(props, 'visible');

  const closeModal = () => {
    emit('close');
  };

  const hideOverlay = (event: Event) => {
    const overlay = event.target as HTMLElement;
    if (overlay.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  const validateForm = () => {
    const errors: Form = {};

    if (!form.firstName.trim()) {
      errors.firstName = "First name is required";
    }

    if (!form.lastName.trim()) {
      errors.lastName = "Last name is required";
    }

    const mobileRegex = /^55\d{7,8}$/;
    if (!mobileRegex.test(form.mobileNumber.trim())) {
      errors.mobileNumber = "Mobile number must start with '55' and have 7 or 8 digits";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      errors.email = "Invalid email format";
    }

    const monthlyIncome = parseFloat(form.monthlyIncome);
    if (isNaN(monthlyIncome)) {
      errors.monthlyIncome = "Monthly income must a number";
    }

    return errors;
  };

  const onSubmit = (event: Event) => {
    event.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      const sum = productStore.getMonthlyIncome();
      if (sum && sum > 100) {
        router.push('/positive');
      } else {
        router.push('/negative');
      }
    } else {
      console.log("Form contains errors:", errors);
    }
  };
</script>

<template>
  <transition name="overlay">
    <div
      v-if="visible"
      ref="overlay"
      class="modal-overlay"
      @close="emit('close', $event)"
    >
      <dialog
        ref="dialog"
        open
        tabindex="-1"
        class="modal-overlay__content"
        @keyup.esc="emit('close', $event)"
      >
      <div class="modal-overlay__heading">
        <p class="modal-overlay__title">
          Personal details
        </p>
        <Button
          icon="pi pi-times"
          display="close"
          severity="secondary"
          @click="closeModal"
        ></Button>
      </div>
        <FloatLabel class="modal-overlay__float-label">
          <InputText
            id="first_name"
            class="modal-overlay__float-input"
            v-model="form.firstName"
            @input="updateFirstName"
          />
          <label for="first_name">First name</label>
        </FloatLabel>
        <FloatLabel class="modal-overlay__float-label">
          <InputText
            id="last_name"
            class="modal-overlay__float-input"
            v-model="form.lastName"
            @input="updateLastName"
          />
          <label for="last_name">Last name</label>
        </FloatLabel>
        <FloatLabel class="modal-overlay__float-label">
          <InputText
            id="mobile_number"
            class="modal-overlay__float-input"
            v-model="form.mobileNumber"
            @input="updateMobileNumber"
          />
          <label for="username">Mobile number</label>
        </FloatLabel>
        <FloatLabel class="modal-overlay__float-label">
          <InputText
            id="username"
            class="modal-overlay__float-input"
            v-model="form.email"
            @input="updateEmail"
          />
          <label for="username">E-mail</label>
        </FloatLabel>
        <FloatLabel class="modal-overlay__float-label">
          <InputText
            id="username"
            class="modal-overlay__float-input"
            v-model="form.monthlyIncome"
            @input="updateMonthlyIncome"
          />
          <label for="username">Monthly income</label>
        </FloatLabel>
        <Button
          label="Submit"
          rounded
          @click="onSubmit"
        />
      </dialog>
    </div>
  </transition>
</template>

<style lang="scss">
  @import '@/assets/main.scss'; 

  .modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);

    &__content{
      border-radius: 30px 30px 0 0;
      padding: 40px;
      font-family: Inter;
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      text-align: left;
      border: none;
      height: 508px;
      width: 100%;
      position: absolute;
      transform: translate(0%, -50%);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &__heading {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    &__title {
      margin: 0;
    }

    &__heading {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    &__float-label {
      font-family: Inter;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      text-align: left;
      display: flex;
      justify-content: stretch;
    }

    &__float-input {
      width: 100%;
      height: 48px;
    }


    @media (min-width: $breakpoint-sm) {
      top: 0;

      &__content{
        padding: 40px;
        border-radius: 30px;
        top: 50%;
        width: 540px;
      }
    }
  }
</style>
