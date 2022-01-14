import { Typography } from '@mui/material';
import { StatusIconPropsType } from './types';
import { useTranslation } from 'react-i18next';
import WebAssetOffIcon from '@mui/icons-material/WebAssetOff';
import { sxStyles } from './styles';
import { useStyles } from './styles';

const NoContent = ({ messageKey }: StatusIconPropsType) => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <div className={classes.noContentRoot}>
      <WebAssetOffIcon sx={sxStyles.emptyListImage} />
      <div className={classes.noContentMessage}>
        <Typography>{t(messageKey)}</Typography>
      </div>
    </div>
  );
};

export default NoContent;
