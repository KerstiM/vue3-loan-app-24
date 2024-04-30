<script setup lang="ts">
  import { toRef } from 'vue';

  type Props = {
    visible?: boolean;
  };

  const props = withDefaults(defineProps<Props>(), {
    visible: false,
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
        class="modal-content"
        @keyup.esc="emit('close', $event)"
      >
        <p>Personal details</p>
        <button @click="closeModal">X</button>
        <input type="text" placeholder="First name">
        <input type="text" placeholder="Last name">
        <input type="phone" placeholder="Mobile number">
        <input type="email" placeholder="E-mail">
        <input type="number" placeholder="Monthly income">
        <button @click="submit">Submit</button>
      </dialog>
    </div>
  </transition>
</template>
