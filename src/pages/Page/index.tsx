import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Background from 'pages/Page/Background';
import TopBar from 'pages/Page/TopBar';
import PageHeader from './PageHeader';
import AppPageRoutes from 'routing/AppRoutes';
import AppRoutesEnum from 'routing/AppRoute.enum';

const Page = () => {
  const homePage = useLocation().pathname === AppRoutesEnum.home;
  return (
    <>
      <CssBaseline enableColorScheme />
      {/* <Navigation /> */}
      <Background homePage={homePage}>
        <>
          {!homePage && <TopBar />}
          {!homePage && <PageHeader />}
          <Container maxWidth={false}>
            <AppPageRoutes />
          </Container>
        </>
      </Background>
    </>
  );
};

export default Page;
