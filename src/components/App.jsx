import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Users } from '../pages/Users/Users';
import { Home } from '../pages/Home/Home';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </>
  );
}
