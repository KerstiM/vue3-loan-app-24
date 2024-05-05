import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import type { Form } from '@/types';

export const useProductStore = defineStore('product', () => {
  const form = reactive<Form>({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    monthlyIncome: undefined,
    loanAmount: 1500,
    loanPeriod: 48,
  });

  const conditions = {
    salary: 1000,
  }

  const getMonthlyIncome = () => {
    return form.monthlyIncome;
  }

  const getFirstName = () => {
    return form.firstName;
  }

  const getLoanAmount = () => {
    return form.loanAmount;
  }

  const getLoanPeriod = () => {
    return form.loanPeriod;
  }

  const getMonthlyPayment = () => {
    return calculateMonthlyPayment;
  }

  const calculateMonthlyPayment = computed(() => {  
    if (form.loanAmount && form.loanPeriod) {
      const monthlyPayment = form.loanAmount / form.loanPeriod;
  
      return +monthlyPayment.toFixed(2);
    } else {
      return 0;
    }
  });

  return {
    calculateMonthlyPayment,
    conditions,
    form,
    getFirstName,
    getLoanAmount,
    getLoanPeriod,
    getMonthlyIncome,
    getMonthlyPayment,
  }
})
