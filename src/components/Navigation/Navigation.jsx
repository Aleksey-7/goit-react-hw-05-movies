import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Link, Header } from './Navigation.styled';
import Loader from 'components/Loader';

function Navigation() {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default Navigation;
