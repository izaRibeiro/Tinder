import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './login';
import Main from './main';
import Settings from './settings';
import Cadastro from './cadastro';
import Matchs from './matchs';
import Voltar from '../components/button-voltar'

export default createAppContainer(
    createSwitchNavigator({
        Login,
        Cadastro,
        Main,
        Settings,
        Matchs,
        Voltar
    })

);