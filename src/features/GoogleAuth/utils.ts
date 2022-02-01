import { TFunction } from 'react-i18next';

export const getErrorMessage = (t: TFunction<'translation', undefined>, error: unknown) => {
  const errorMessage = (error as Error).message;
  const errorDetails =
    typeof errorMessage === 'string' && errorMessage.includes('has been closed by the user')
      ? ` - ${t('FEATURES.GOOGLE_AUTH.NOTIFICATION_SNAKS.INTERRUPTED_BY_USER')}`
      : ` - ${error}`;
  return `${t('FEATURES.GOOGLE_AUTH.NOTIFICATION_SNAKS.ERROR_HEADER')}${errorDetails}`;
};
