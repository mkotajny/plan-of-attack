import React, { useState } from 'react';
import { Box, TextField, Button, Fade } from '@mui/material';
import ButtonAdd from 'components/shared/ButtonAdd';
import { useTranslation } from 'react-i18next';
import { useStyles } from './styles';

const PlansForm = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [title, setValue] = useState('');
  const [inputMode, setInputMode] = useState(false);

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Escape') {
      setInputMode(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const toggleInputMode = () => {
    setInputMode(prevState => !prevState);
  };

  if (!inputMode) {
    return (
      <div className={classes.plansFormRoot}>
        <ButtonAdd labelTranslationKey='FEATURES.PLANS.PLANS_FORM.CREATE_PLAN' onClick={toggleInputMode} />
      </div>
    );
  }

  return (
    <Fade in timeout={1000}>
      <div className={classes.plansFormRoot} onKeyDown={keyDownHandler}>
        <Box component='form' noValidate autoComplete='off'>
          <TextField
            id='outlined-textarea'
            label={t('FEATURES.PLANS.PLANS_FORM.PLAN_TITLE_LABEL')}
            placeholder={t('FEATURES.PLANS.PLANS_FORM.PLAN_TITLE_PLANCEHOLDER')}
            multiline
            value={title}
            onChange={handleChange}
            fullWidth
          />
        </Box>
        <div className={classes.buttonsContainer}>
          <div className={classes.buttonAdd}>
            <Button variant='contained'>{t('COMMON.CONFIRM')}</Button>
          </div>
          <Button variant='outlined' onClick={toggleInputMode}>
            {t('COMMON.CANCEL')}
          </Button>
        </div>
      </div>
    </Fade>
  );
};

export default PlansForm;
