import { type ValidationRule } from '@vuelidate/core';

export type ValidationRules = Record<string, ValidationRule>;

export type ValidationMessages = {
  error: Record<string, string>;
}

export type Form = {
  firstName?: string;
  lastName?: string;
  mobileNumber?: string;
  email?: string;
  monthlyIncome?: number;
  loanAmount?: number,
  loanPeriod?: number,
}