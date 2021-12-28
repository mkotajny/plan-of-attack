import { useState } from 'react';
import { ChildrenComponentType } from 'types/commonTypes';
import { getRandomBackgroundConfig } from './utils';
import { useStyles } from './styles';

const Background = ({ children }: ChildrenComponentType) => {
  const [classes] = useState(useStyles(getRandomBackgroundConfig()));
  return <div className={classes.paperContainer}>{children}</div>;
};

export default Background;
