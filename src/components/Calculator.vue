<script setup lang="ts">
import { ref } from 'vue'
import Modal from './Modal.vue'

const modalOpen = ref(false);
const openModal = () => {
  console.log('OPEN MODAL');
  modalOpen.value = true;
};

const closeModal = () => {
  console.log('CLOSE MODAL');
  modalOpen.value = false;
};

const submit = (event: Event) => {
  console.log('SUBMIT');
  closeModal();
};
</script>

<template>
  <div class="calculator" id="calculator">
    <div class="calculator__info">
      <p>Calculate your monthly payment</p>
      <p>Estimate your monthly payments based on the chosen loan amount and time period.</p>
    </div>
    <div class="product__image">
      <p>Slider 1</p>
      <input type="number" placeholder="Amount">
      <p>Slider 2</p>
      <input type="number" placeholder="Period">
      <p>Monthly payment</p>
      <p>144.84€</p>
      <button @click="openModal">Apply now</button>
      <p>The calculation is approximate and may differ from the conditions offered to you. Please submit a loan application to receive a personal offer. Financial services are provided by AS Inbank Finance.</p>
    </div>
    <Modal :visible="modalOpen" @close="closeModal" @submit="submit" />
  </div>
</template>