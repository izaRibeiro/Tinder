import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './login';
import Main from './main';
import Settings from './settings';
import Chat from './chat';

export default createAppContainer(
    createSwitchNavigator({
        Login,
        Main,
        Settings,
        Chat,
    })

);