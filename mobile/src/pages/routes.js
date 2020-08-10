import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './login';
import Main from './main';
import Settings from './settings';

export default createAppContainer(
    createSwitchNavigator({
        Login,
        Main,
        Settings,
    })

);