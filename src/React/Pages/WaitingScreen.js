import {compose, lifecycle, withState, branch, renderComponent} from 'recompose';
import { Redirect } from 'react-router-dom';
import Component from '../../UI/Pages/Waiting'

const RedirectToHome = () => <Redirect to="/home"/>

export default compose(
    withState('percent', 'setPercent', 0),
    lifecycle({
        componentDidMount(){
            const {setPercent} = this.props
            setPercent(1)
        },
        componentDidUpdate(){
            const {percent, setPercent} = this.props
            if(percent < 100)
                setTimeout(() => setPercent(percent+1), 20)
        },
    }),
    branch(
        ({percent}) => percent === 100,
        renderComponent(RedirectToHome)
    )    
)(Component);