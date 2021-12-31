import { useState } from 'react';
import { getRandomBackgroundConfig } from './utils';
import { useStyles } from './styles';

import { BackgroundPropsType } from './types';

const Background = ({ children, homePage }: BackgroundPropsType) => {
  const backGroundImage = homePage ? getRandomBackgroundConfig() : { fileName: '', overlay: 0 };
  const [classes] = useState(useStyles(backGroundImage));
  return <div className={classes.paperContainer}>{children}</div>;
};

export default Background;
