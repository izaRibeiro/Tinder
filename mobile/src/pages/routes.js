import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './login';
import Main from './main';

export default createAppContainer(
    createSwitchNavigator({
        Login,
        Main,
    })

);