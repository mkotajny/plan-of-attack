import { selectCurrentUser } from 'features/GoogleAuth/authSlice';
import { useSelector } from 'react-redux';
import { BigIconInfo, BigIconInfoTypesEnum } from 'components/shared/BigIconInfo';
import { AuthorizedPagePropsType } from './types';
import { useStyles } from './styles';

const AuthorizedPage = ({ page: element }: AuthorizedPagePropsType) => {
  const currentUser = useSelector(selectCurrentUser);
  const classes = useStyles();

  const renderNotAuthorizedContent = () => {
    return (
      <div className={classes.notAuthorizedContentRoot}>
        <BigIconInfo messageKey='ROUTING.CONTENT_SIGNED_OUT' messageType={BigIconInfoTypesEnum.NotAuthorized} />
      </div>
    );
  };

  return currentUser.signedIn ? element : renderNotAuthorizedContent();
};

export default AuthorizedPage;
