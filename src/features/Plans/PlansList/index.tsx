import { useState, useEffect } from 'react';
import { Fab, Typography, Zoom, Slide, Fade } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import NoContent from 'components/shared/NoContent';
import { useStyles } from './styles';
import { useTranslation } from 'react-i18next';

const PlansList = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [slideDelay, setSlideDelay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSlideDelay(true);
    }, 500);
  }, []);

  return (
    <div className={classes.rootPlansList}>
      <div className={classes.createPlan}>
        <Zoom in={true} style={{ transitionDelay: `800ms` }}>
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
      <Fade in={true} timeout={1000}>
        <div className={classes.listContainer}>
          <NoContent messageKey='COMPONENTS.NO_CONTENT.MESSAGE' />
        </div>
      </Fade>
    </div>
  );
};

export default PlansList;
