import { useTranslation } from 'react-i18next';
import ModalPowered from '../PoweredMuiComponents/ModalPowered';
import FormSubmit from '../FormSubmit';
import { DecisionModalPropTypes } from './types';
import { useStyles } from './styles';

const DecisionModal = ({ title, question, open, setOpen, onSubmit }: DecisionModalPropTypes) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <ModalPowered title={title} open={open} setOpen={setOpen} small>
      <div className={classes.planDeleteRoot}>{t(question)}</div>
      <form onSubmit={onSubmit}>
        <FormSubmit inProgress={false} formPristine={false} onCancel={() => setOpen(false)} />
      </form>
    </ModalPowered>
  );
};

export default DecisionModal;
