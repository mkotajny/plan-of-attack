import { ValidationErrors } from 'final-form';
import { PlanTitleFormType } from './types';
import { TFunction } from 'react-i18next';

export const validatePlansForm = (
  values: PlanTitleFormType,
  t: TFunction<'translation', undefined>
): ValidationErrors | Promise<ValidationErrors> => {
  const errors: PlanTitleFormType = {};
  if (!values.title?.length) {
    errors.title = t('VALIDATION.FIELD_REQUIRED');
  }
  return errors;
};
