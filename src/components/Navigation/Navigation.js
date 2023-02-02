import { NavigationLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavigationLink to="/">Home</NavigationLink>
        </li>
        <li>
          <NavigationLink to="users">Users</NavigationLink>
        </li>
      </ul>
    </nav>
  );
};
