import { createStackNavigator } from 'react-navigation';

import LoginPage from './pages/LoginPage';
import SeriesPage from "./pages/SeriesPage";


export default createStackNavigator({
    'Main': {
        screen: SeriesPage
    },
    'Login': {
        screen: LoginPage,
        navigationOptions: {
            title: 'Bem vindo!',
        }
    }
    //retornar Main para cá
}, {
    navigationOptions: {
        title: 'Series!',
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#6ca2f7',
            borderBottomWidth: 1,
            borderBottomColor: '#c5c5c5'
        },
        headerTitleStyle: {
            color: 'white',
            fontSize: 30
        }
    }
});