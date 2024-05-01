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
  });

  function updateForm(field: keyof Form, value: string | number | null) {
    form.value[field] = value;
  }

  const getMonthlyIncome = () => {
    return form.value.monthlyIncome;
  }

  return { form, updateForm, getMonthlyIncome }
})
