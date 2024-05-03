import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Form } from '@/types';

export const useProductStore = defineStore('product', () => {
  const form = ref<Form>({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    monthlyIncome: undefined,
    loanAmount: undefined,
    loanPeriod: undefined,
  });

  function updateForm(field: keyof Form, value: string | number | null) {
    form.value[field] = value;
  }

  const getMonthlyIncome = () => {
    return form.value.monthlyIncome;
  }

  const getFirstName = () => {
    return form.value.firstName;
  }

  const getLoanAmount = () => {
    return form.value.loanAmount;
  }

  const getLoanPeriod = () => {
    return form.value.loanPeriod;
  }

  return {
    form,
    updateForm,
    getMonthlyIncome,
    getFirstName,
    getLoanAmount,
    getLoanPeriod
  }
})
