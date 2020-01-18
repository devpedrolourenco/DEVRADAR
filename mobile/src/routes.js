import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from  './pages/Profile';

const Routes = createAppContainer (
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'Devradar',

            },


        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil no Github'

            }
        }
    }, {
        //Nesse caso iremos aplicar a mesma navigation option porem ela e default ou seja aplica a todas
        defaultNavigationOptions: {
            //headerBackTitle: null,

            headerBackTitleVisible: false,
            //Abaixo colorir o texto
            headerTintColor: '#fff', 
            //abaixo colore o container e nao o texto afinal nao existe heranca do CSS do JS
            headerStyle: {
             backgroundColor: '#7d40e7',
            },

        },

    })
);

export default Routes;