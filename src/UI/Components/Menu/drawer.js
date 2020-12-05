import React from 'react';
import menuConfig from '../../../Config/menu';
import './styles.css';
import { ReactComponent as BurgerIcon } from '../../../img/menu.svg';
import { Link } from 'react-router-dom';

export default ({ onClick }) => (
  <div className="menu-drawer">
    <button onClick={onClick} className="menu-drawer-button">
      <BurgerIcon />
    </button>
    <ul className="menu-drawer-list">
      {/* Boucle qui affiche automatique les liens dans le menu depuis le fichier de config menu */}
      {menuConfig.map((item, i) => (
        <li>
          <Link to={item.path} className="menu-drawer-listitem">{item.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);
