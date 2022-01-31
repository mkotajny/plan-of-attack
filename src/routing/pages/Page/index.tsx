import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Background from 'routing/pages/Page/Background';
import TopBar from 'routing/pages/Page/TopBar';
import PageHeader from './PageHeader';
import AppPageRoutes from 'routing/AppRoutes';
import AppRoutesEnum from 'routing/AppRoute.enum';
import { useStyles } from './styles';

const Page = () => {
  const classes = useStyles();
  const homePage = useLocation().pathname === AppRoutesEnum.home;
  return (
    <>
      <CssBaseline enableColorScheme />
      {/* <Navigation /> */}
      <Background homePage={homePage}>
        <>
          {!homePage && <TopBar />}
          {!homePage && <PageHeader />}
          <Container className={classes.pageRoot} maxWidth={false}>
            <AppPageRoutes />
          </Container>
        </>
      </Background>
    </>
  );
};

export default Page;