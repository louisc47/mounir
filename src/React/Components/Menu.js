import { branch, compose, renderComponent, withHandlers, withState } from 'recompose';
import Drawer from '../../UI/Components/Menu/drawer';
import Button from '../../UI/Components/Menu/button'

export default compose(
  withState('isActive', 'setIsActive', false),
  withHandlers({
      onClick : ({isActive, setIsActive}) => () => setIsActive(!isActive)
  }),
  branch(({isActive}) => isActive, renderComponent(Drawer))
)(Button);
