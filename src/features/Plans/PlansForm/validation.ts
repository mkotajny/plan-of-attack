import { ValidationErrors } from 'final-form';
import { PlanTitleFormType } from './types';
import { PlanType } from '../types';
import { TFunction } from 'react-i18next';

export const validatePlansForm = (
  values: PlanTitleFormType,
  plans: PlanType[],
  t: TFunction<'translation', undefined>
): ValidationErrors | Promise<ValidationErrors> => {
  const errors: PlanTitleFormType = {};
  if (!values.title?.length) {
    errors.title = t('VALIDATION.FIELD_REQUIRED');
  } else if (plans.find(item => values.title && item.title.toUpperCase() === values.title.toUpperCase())) {
    errors.title = t('FEATURES.PLANS.PLANS_FORM.VALIDATION.PLAN_TITLE_DUPLICATE');
  }

  return errors;
};
