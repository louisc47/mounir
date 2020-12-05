import React from 'react'
import Menu from '../../../React/Components/Menu'
import Carousel from '../../../React/Components/Carousel'
import SliderContent from '../../Components/SliderContent'
import backgroundA from '../../../img/pulpkitchen-foodpic-01.png'
import backgroundB from '../../../img/NOW-busad-pic.png'

export default () => (
    <React.Fragment>
        <Menu />
        <Carousel width="100%" height="100%">
            <SliderContent background={backgroundA} title="Pulp" subtitle="kitchen" tasks="{branding ; event}"/>
            <SliderContent background={backgroundB}/>
        </Carousel>
    </React.Fragment>
)