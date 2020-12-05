import React from 'react';
import './styles.css';
import { ReactComponent as Logo } from '../../../img/Mu_logotype.svg';
import { ReactComponent as LogoText } from '../../../img/Mu_logotypetext.svg';
import { ReactComponent as DesignerGraphique } from '../../../img/DESIGNERGRAPHIQUE.svg';
import Loader from '../../Components/Loader'

export default ({ percent }) => (
  <div className="waiting-screen">
    <div className="waiting-container">
      <Logo width="172" height="298" className="waiting-logo" />
      <LogoText width="578" height="102" className="waiting-logo" />
      <DesignerGraphique width="578" className="waiting-logo" />
      <Loader value={percent} />
    </div>
  </div>
);
