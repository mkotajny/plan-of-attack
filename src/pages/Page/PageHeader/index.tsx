import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';
import { routeExists } from 'routing/utils';
import { useStyles } from './styles';

const PageHeader = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const pathName = useLocation().pathname;
  const titleKey = pathName.toUpperCase().replace('/', '');

  return (
    <Typography className={classes.pageHeaderRoot} variant='h6'>
      {routeExists(pathName) ? t(`PAGES.${titleKey}.TITLE`) : '🤷'}
    </Typography>
  );
};

export default PageHeader;
