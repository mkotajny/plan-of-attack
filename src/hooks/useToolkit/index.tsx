import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'features/GoogleAuth/slice';

const useToolkit = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const currentUser = useSelector(selectCurrentUser);

  return { t, enqueueSnackbar, currentUser };
};

export default useToolkit;
