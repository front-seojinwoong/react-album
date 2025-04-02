
import { useState } from 'react';
import ST from './CommonNav.module.scss';
import { Link } from 'react-router-dom';
import navJson from './nav.json';

interface Navigation {
  inde: number;
  path: string;
  label: string;
  searchValue: string;
  isActive: boolean;
}

const CommonNav = () => {

  const [navigation, setNavigation] = useState<Navigation[]>(navJson);

  const navLinks = navigation.map((item: Navigation) => {
    return (
      <Link to={item.path} className={ST.navigation__menu} key={item.path}>
        <span className={ST.navigation__menu__label}>{item.label}</span>
      </Link>
    )
  })

  return (
    <nav className={ST.navigation}>
      {navLinks}
    </nav>
  )
}

export default CommonNav