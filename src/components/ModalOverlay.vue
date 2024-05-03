<script setup lang="ts">
  import { toRef } from 'vue';
  import { useProductStore } from '@/stores/productStore';
  import { useRouter } from 'vue-router';
  import { Button } from '@/components';
  import { useFormValidation } from '@/composables/formValidation';

  const productStore = useProductStore();
  const { form } = productStore;
  const { v$ } = useFormValidation(form);
  const router = useRouter();

  async function onSubmit() {
    const result = await v$.value.$validate();

    if (!result) {
      return
    } else {
      const sum = productStore.getMonthlyIncome();
      if (sum && sum > 1000) {
        router.push('/positive');
      } else {
        router.push('/negative');
      }
    }
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
</script>

<template>
  <transition name="overlay">
    <div
      v-if="visible"
      ref="overlay"
      class="modal-overlay"
      @close="emit('close')"
    >
      <dialog
        ref="dialog"
        open
        tabindex="-1"
        class="modal-overlay__content"
        @keyup.esc="emit('close')"
      >
      <div class="modal-overlay__heading">
        <p class="modal-overlay__title">
          Personal details
        </p>
        <Button
          icon="pi pi-times"
          display="close"
          @click="closeModal"
        ></Button>
      </div>
      
        <FloatLabel class="modal-overlay__float-label">
          <InputText
            id="first_name"
            class="modal-overlay__float-input"
            v-model="form.firstName"
          />
          <label for="first_name">First name</label>
          <div
            v-if="v$.firstName.$error"
            class="modal-overlay__error-message"
          >
            {{ v$.firstName.$errors[0].$message }}
          </div>
        </FloatLabel>

        <FloatLabel class="modal-overlay__float-label">
          <InputText
            id="last_name"
            class="modal-overlay__float-input"
            v-model="form.lastName"
          />
          <label for="last_name">Last name</label>
          <div
            v-if="v$.lastName.$error"
            class="modal-overlay__error-message"
          >
            {{ v$.lastName.$errors[0].$message }}
          </div>
        </FloatLabel>

        <FloatLabel class="modal-overlay__float-label">
          <InputText
            id="mobile_number"
            class="modal-overlay__float-input"
            v-model="form.mobileNumber"
          />
          <label for="mobile_number">Mobile number</label>
          <div
            v-if="v$.mobileNumber.$error"
            class="modal-overlay__error-message"
          >
            {{ v$.mobileNumber.$errors[0].$message }}
          </div>
        </FloatLabel>

        <FloatLabel class="modal-overlay__float-label">
          <InputText
            id="email"
            class="modal-overlay__float-input"
            v-model="form.email"
          />
          <label for="email">E-mail</label>
          <div
            v-if="v$.email.$error"
            class="modal-overlay__error-message"
          >
            {{ v$.email.$errors[0].$message }}
          </div>
        </FloatLabel>

        <FloatLabel class="modal-overlay__float-label">
          <InputText
            id="income"
            class="modal-overlay__float-input"
            v-model="form.monthlyIncome"
          />
          <label for="income">Monthly income</label>
          <div
            v-if="v$.monthlyIncome.$error"
            class="modal-overlay__error-message"
          >
            {{ v$.monthlyIncome.$errors[0].$message }}
          </div>
        </FloatLabel>

        <Button
          label="Submit"
          @click="onSubmit"
        ></Button>
      </dialog>
    </div>
  </transition>
</template>

<style scoped lang="scss">
  @import '@/assets/main.scss'; 

  .modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);

    &__error-message {
      color: $error;
      font-size: 12px;
      padding-right: 12px;
    }

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
      z-index: 2;
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

    &__float-label {
      font-family: Inter;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      text-align: left;
      display: flex;
      flex-direction: column;
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
