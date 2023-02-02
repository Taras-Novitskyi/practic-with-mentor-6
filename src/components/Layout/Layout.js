import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <header>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </header>
  );
};
