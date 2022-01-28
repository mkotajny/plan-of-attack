import { BigIconInfo, BigIconInfoTypesEnum } from 'components/shared/BigIconInfo';
import { useStyles } from './styles';
import PlansForm from '../PlansForm';

const PlansList = () => {
  const classes = useStyles();

  return (
    <div>
      <PlansForm />
      <div className={classes.listContainer}>
        <BigIconInfo messageKey='COMPONENTS.NO_CONTENT.MESSAGE' messageType={BigIconInfoTypesEnum.NoItems} />
      </div>
    </div>
  );
};

export default PlansList;
