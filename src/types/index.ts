import { type ValidationRule } from '@vuelidate/core';

export type ValidationRules = Record<string, ValidationRule>;

export type ValidationMessages = {
  error: Record<string, string>;
}
