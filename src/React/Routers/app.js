import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import routes from '../../Config/pages'
import WaitingScreen from '../Pages/WaitingScreen';
import HomeScreen from '../Pages/HomeScreen'

export default () => (
    <BrowserRouter>
        <Route exact path={routes.waiting} component={WaitingScreen} />
        <Route exact path={routes.home} component={HomeScreen} />
    </BrowserRouter>
)