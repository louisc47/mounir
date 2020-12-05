import React from 'react'
import './styles.css'
import { ReactComponent as BurgerIcon } from '../../../img/menu.svg'

export default ({onClick}) => (
    <button onClick={onClick} className="menu-button">
        <BurgerIcon/>
    </button>
);