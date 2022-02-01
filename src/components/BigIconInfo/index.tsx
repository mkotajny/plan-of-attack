import { Typography, Fade } from '@mui/material';
import { StatusIconPropsType } from './types';
import WebAssetOffIcon from '@mui/icons-material/WebAssetOff';
import AppBlockingIcon from '@mui/icons-material/AppBlocking';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import useToolkit from 'hooks/useToolkit';
import { sxStyles } from './styles';
import { useStyles } from './styles';

export enum BigIconInfoTypesEnum {
  NoItems,
  NotAuthorized,
  NonExistingRoute,
}

export const BigIconInfo = ({ messageKey, messageType }: StatusIconPropsType) => {
  const { t } = useToolkit();
  const classes = useStyles();

  const renderIcon = () => {
    const sxStyle = sxStyles.bigIcon;
    switch (messageType) {
      case BigIconInfoTypesEnum.NoItems:
        return <WebAssetOffIcon sx={sxStyle} />;
      case BigIconInfoTypesEnum.NotAuthorized:
        return <AppBlockingIcon sx={sxStyle} />;
      case BigIconInfoTypesEnum.NonExistingRoute:
        return <QuestionMarkIcon sx={sxStyle} />;
      default:
        return null;
    }
  };

  return (
    <Fade in={true} timeout={1000} style={{ transitionDelay: `500ms` }}>
      <div className={classes.noContentRoot}>
        {renderIcon()}
        <div className={classes.noContentMessage}>
          <Typography>{t(messageKey)}</Typography>
        </div>
      </div>
    </Fade>
  );
};
