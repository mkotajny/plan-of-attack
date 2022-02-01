import { Divider } from '@mui/material';
import { DividerPoweredPropsType } from './types';
import { useStyles } from './styles';

const DividerPowered = ({ noLine = false, spacingTop = 0, spacingBottom = 0 }: DividerPoweredPropsType) => {
  const classes = useStyles({ spacingTop, spacingBottom })();
  return <div className={classes.lineBreak}>{!noLine && <Divider />}</div>;
};

export default DividerPowered;
