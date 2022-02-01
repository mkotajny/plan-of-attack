import { ValidationErrors } from 'final-form';
import { TaskTitleFormType } from './types';
import { TaskType } from '../types';
import { TFunction } from 'react-i18next';

export const validateTasksForm = (
  t: TFunction<'translation', undefined>,
  values: TaskTitleFormType,
  tasks: TaskType[],
  updateExisting: boolean = false
): ValidationErrors | Promise<ValidationErrors> => {
  const errors: TaskTitleFormType = {};
  if (!values.title?.length) {
    errors.title = t('VALIDATION.FIELD_REQUIRED');
  } else if (
    !updateExisting &&
    tasks.find(item => values.title && item.document.title.toUpperCase() === values.title.toUpperCase())
  ) {
    errors.title = t('FEATURES.TASKS.TASKS_FORM.VALIDATION.TASK_TITLE_DUPLICATE');
  }

  return errors;
};
