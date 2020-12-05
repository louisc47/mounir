import React from 'react';
import './styles.css';
import { buildStyles } from 'react-circular-progressbar';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

//Ceci permet de modifier le style du cercle
const circularProgressbarStyle = buildStyles({
  pathColor: 'white',
  textColor: 'white',
  trailColor: 'rgb(75 75 75)',
  backgroundColor: 'black',
});

export default ({ value }) => (
  <div className="loader-container">
    <div className="loader-subcontainer">
      <CircularProgressbar
        styles={circularProgressbarStyle}
        value={value}
        text={`${value}%`}
      />
    </div>
    <p className="loader-text">Chargement en cours ...</p>
  </div>
);
