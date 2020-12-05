import React from 'react';
import Menu from '../../../React/Components/Menu';
import './styles.css'
import Logo from '../Logo'

export default ({ background, title, subtitle, tasks }) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: `url(${background})`,
      backgroundSize: 'cover',
      position: 'absolute',
      top: 0
    }}
  >
    <div className="slider-content-overlay">
      <Menu />
      <Logo />
      {title && subtitle ? (
        <div className="slider-content-right-container">
          <h2 className="slider-content-title">{title} <br/> {subtitle}</h2>
          {tasks && <span className="slider-content-tasks">{tasks}</span>}
        </div>
      ) : null}
    </div>
  </div>
);
