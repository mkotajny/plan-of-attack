import { CircularProgress } from '@mui/material';
import { BigIconInfo, BigIconInfoTypesEnum } from 'components/BigIconInfo';
import useToolkit from 'hooks/useToolkit';
import { AuthorizedPagePropsType } from './types';
import { useStyles } from './styles';

const AuthorizedPage = ({ page: element }: AuthorizedPagePropsType) => {
  const { currentUser } = useToolkit();
  const classes = useStyles();

  const renderNotAuthorizedContent = () => {
    return (
      <div className={classes.notAuthorizedContentRoot}>
        <BigIconInfo messageKey='ROUTING.CONTENT_SIGNED_OUT' messageType={BigIconInfoTypesEnum.NotAuthorized} />
      </div>
    );
  };

  if (currentUser.inProgress) return <CircularProgress />;
  return currentUser.signedIn ? element : renderNotAuthorizedContent();
};

export default AuthorizedPage;
