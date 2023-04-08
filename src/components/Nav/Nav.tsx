/* eslint-disable array-callback-return */
import './Nav.scss';
import { NavLink } from 'react-router-dom';

export type Props = {
  direction: string
}

export const Nav: React.FC<Props> = ({ direction }) => {
  return (
    <div className="nav">
      <ul className={direction === 'column' ? 'nav__menu--phone' : 'nav__menu'}>
        <li
          className="nav__menu-item"
        >
          <NavLink
            to="/"
            className={({ isActive }) => (isActive
              ? 'nav__is-active nav__nav-link'
              : 'nav__nav-link')}
          >
            home
          </NavLink>
        </li>

        <li className="nav__menu-item">
          <NavLink
            to="/oils"
            className={({ isActive }) => (isActive
              ? 'nav__is-active nav__nav-link'
              : 'nav__nav-link')}
          >
            oils
          </NavLink>
        </li>

        <li className="nav__menu-item">
          <NavLink
            to="/gels"
            className={({ isActive }) => (isActive
              ? 'nav__is-active nav__nav-link'
              : 'nav__nav-link')}
          >
            gels
          </NavLink>
        </li>

        <li className="nav__menu-item">
          <NavLink
            to="/scrubs"
            className={({ isActive }) => (isActive
              ? 'nav__is-active nav__nav-link'
              : 'nav__nav-link')}
          >
            scrubs
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
