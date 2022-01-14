import { useState, useEffect } from 'react';
import { Fab, Typography, Zoom, Slide } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { BigIconInfo, BigIconInfoTypesEnum } from 'components/shared/BigIconInfo';
import { useStyles } from './styles';
import { useTranslation } from 'react-i18next';

const PlansList = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [slideDelay, setSlideDelay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSlideDelay(true);
    }, 1200);
  }, []);

  return (
    <div className={classes.rootPlansList}>
      <div className={classes.createPlan}>
        <Zoom in={true} style={{ transitionDelay: `1500ms` }}>
          <Fab size='small' color='primary' aria-label='add'>
            <AddIcon />
          </Fab>
        </Zoom>
        <Slide direction='right' in={slideDelay} timeout={500}>
          <div className={classes.createPlanMessage}>
            <Typography>{t('PAGES.PLANS.CREATE_PLAN')}</Typography>
          </div>
        </Slide>
      </div>
      <div className={classes.listContainer}>
        <BigIconInfo messageKey='COMPONENTS.NO_CONTENT.MESSAGE' messageType={BigIconInfoTypesEnum.NoItems} />
      </div>
    </div>
  );
};

export default PlansList;
