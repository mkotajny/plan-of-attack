import ModalPowered from '../PoweredMuiComponents/ModalPowered';
import FormSubmit from '../FormSubmit';
import { DecisionModalPropTypes } from './types';
import useToolkit from 'hooks/useToolkit';
import { useStyles } from './styles';

const DecisionModal = ({ title, question, open, inProgress = false, setOpen, onSubmit }: DecisionModalPropTypes) => {
  const classes = useStyles();
  const { t } = useToolkit();

  return (
    <ModalPowered title={title} open={open} setOpen={setOpen} small>
      <div className={classes.planDeleteRoot}>{t(question)}</div>
      <form onSubmit={onSubmit}>
        <FormSubmit inProgress={inProgress} formPristine={false} onCancel={() => setOpen(false)} />
      </form>
    </ModalPowered>
  );
};

export default DecisionModal;
