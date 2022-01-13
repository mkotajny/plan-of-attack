import { Typography } from '@mui/material';
import { StatusIconPropsType } from './types';
import { useTranslation } from 'react-i18next';
import WebAssetOffIcon from '@mui/icons-material/WebAssetOff';
import { sxStyles } from './styles';

const NoContent = ({ messageKey }: StatusIconPropsType) => {
  const { t } = useTranslation();
  return (
    <>
      <WebAssetOffIcon sx={sxStyles.emptyListImage} />
      <Typography variant='h6'>{t(messageKey)}</Typography>
    </>
  );
};

export default NoContent;
