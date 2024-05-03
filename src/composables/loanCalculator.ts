import { ref, watch } from 'vue'
import { useProductStore } from '@/stores/productStore';

export function useLoanCalculator() {
  const productStore = useProductStore();
  const { form, calculateMonthlyPayment, getMonthlyPayment } = productStore;
  const loanPeriodRef = ref(productStore.form.loanPeriod);
  
  const minAmount = 300;
  const maxAmount = 7200;
  const minPeriod = 2;
  const maxPeriod = 72;
  
  const monthlyPaymentOptions = ref([
    { periodLabel: '2 months', periodValue: 2 },
    { periodLabel: '6 months', periodValue: 6 },
    { periodLabel: '12 months', periodValue: 12 },
    { periodLabel: '36 months', periodValue: 36 },
    { periodLabel: '48 months', periodValue: 48 },
    { periodLabel: '72 months', periodValue: 72 },
  ]);
  
  const selectedOption = ref(monthlyPaymentOptions.value.find(option => option.periodValue === form.loanPeriod));

  const updateDropdownValueToClosestSliderValue = () => {
    if (selectedOption.value) {
      form.loanPeriod = selectedOption.value.periodValue;
    }
  };

  const updateSelectedOption = () => {
    selectedOption.value = monthlyPaymentOptions.value.find(option => option.periodValue === form.loanPeriod);
  };

  const updateSliderValueToClosestDropdownValue = (value: number) => {
    const closestPeriodValue = monthlyPaymentOptions.value.reduce((prev, curr) => {
      return Math.abs(curr.periodValue - value) < Math.abs(prev.periodValue - value)
        ? curr
        : prev;
    });

    selectedOption.value = closestPeriodValue;
  };

  watch(loanPeriodRef, updateSelectedOption);

  return {
    form,
    minAmount,
    maxAmount,
    minPeriod,
    maxPeriod,
    monthlyPaymentOptions,
    selectedOption,
    updateDropdownValueToClosestSliderValue,
    updateSliderValueToClosestDropdownValue,
    getMonthlyPayment,
  };
}
