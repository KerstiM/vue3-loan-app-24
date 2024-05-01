<script setup lang="ts">
  import { toRef } from 'vue';
  import LabeledInput from './LabeledInput.vue';

  type Props = {
    visible?: boolean;
    value: string;
  };

  const props = withDefaults(defineProps<Props>(), {
    visible: false,
    value: '',
  });

  const emit = defineEmits<{
      'close': [value: Event]
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
          severity="secondary"
          text
          rounded
          aria-label="Cancel"
          @click="closeModal"
        />
      </div>
 
      <LabeledInput
        id="first_name"
        label="First name"
        :model-value="value"
        @update:modelValue="value = $event"
      >
      </LabeledInput>
        <FloatLabel class="modal-overlay__float-label">
          <InputText
            id="first_name"
            class="modal-overlay__float-input"
          />
          <label for="first_name">First name</label>
        </FloatLabel>
        <FloatLabel class="modal-overlay__float-label">
          <InputText
            id="last_name"
            class="modal-overlay__float-input"
          />
          <label for="last_name">Last name</label>
        </FloatLabel>
        <FloatLabel class="modal-overlay__float-label">
          <InputText
            id="mobile_number"
            class="modal-overlay__float-input"
          />
          <label for="username">Mobile number</label>
        </FloatLabel>
        <FloatLabel class="modal-overlay__float-label">
          <InputText
            id="username"
            class="modal-overlay__float-input"
          />
          <label for="username">E-mail</label>
        </FloatLabel>
        <FloatLabel class="modal-overlay__float-label">
          <InputText
            id="username"
            class="modal-overlay__float-input"
          />
          <label for="username">Monthly income</label>
        </FloatLabel>
        <Button
          label="Submit"
          rounded
          @click="submit"
        />
      </dialog>
    </div>
  </transition>
</template>

<style lang="scss">

.modal-overlay {
  position: fixed;
  top: auto;
  left: 0;
  bottom: 0;
  width: 100%;
  //height: 100%;
  max-height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(0);

  &__content{
    font-family: Inter;
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    text-align: left;
    background-color: white;
    padding: 40px;
    border-radius: 30px 30px 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: none;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 508px;
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

  @media (min-width: 576px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    //background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;

    &__content{
      padding: 40px;
      border-radius: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: none;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 540px;
      height: 508px;
    }
  }
}
</style>
