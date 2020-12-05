import React from 'react';
import { ReactComponent as Logo } from '../../../img/Mu_logotype.svg';
import { ReactComponent as LogoText } from '../../../img/Mu_logotypetext.svg';
import { ReactComponent as Designer } from '../../../img/DESIGNERGRAPHIQUE.svg';
import './styles.css'

export default () => (
  <div className="logo-container">
    <Logo height="80px"/>
    <div className="logo-subcontainer">
      <LogoText width="280px"/>
      <Designer width="280px"/>
    </div>
  </div>
);
