import { computed } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email, minValue, minLength, maxLength } from '@vuelidate/validators'
import type { Form } from '@/types';

export function useFormValidation(form: Form) {
  const startWith55 = (value: string) => value.startsWith('55');

  const rules = computed(() => {
    return {
      firstName: { required },
      lastName: { required },
      email: {
        required,
        email,
      },
      mobileNumber: {
        required,
        minLength: minLength(7),
        maxLength: maxLength(8),
        startWith55: {
          $validator: startWith55,
          $message: 'Mobile number must start with "55"',
        },
        
      },
      monthlyIncome: {
        required,
        minValue: minValue(100),
      },
    }
  })

  const validationState = useVuelidate(rules, form);

  const validateOnBlur = async (fieldName?: string) => {
    if (fieldName) {
      validationState.value[fieldName].$touch();
    }
  };

  return {
    validateOnBlur,
    v$: validationState.value,
  };
}
