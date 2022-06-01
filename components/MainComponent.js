import React, { Component } from 'react';
import Constants from 'expo-constants';
import Home from './HomeComponent';
import Dolphins from './DolphinsComponent';
import Dolphinsinfo from './Dolphins/Dolphinsinfo';
import DolphinsSchedule from './Dolphins/DolphinsSchedule';
import DolphinsPlayer from './Dolphins/DolphinsPlayer';
import DolphinsRoster from './Dolphins/DolphinsRoster';
import DolphinsTix from './Dolphins/DolphinsTix';
import Niners from './Niners';
import Ninersinfo from './Niners/Ninersinfo';
import Ninersschedule from './Niners/Ninersschedule';
import NinersPlayer from './Niners/NinersPlayer';
import NinersRoster from './Niners/NinersRoster';
import NinersTix from './Niners/NinersTix';
import YourPick from './YourPick';
import { View, Platform, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Icon } from 'react-native-elements';

const HomeNavigator = createStackNavigator(
    {
        Home: {
             screen: Home,
             navigationOptions: ({navigation}) => ({
                headerLeft: <Icon
                    name='bolt'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
             })          
            },
        YourPick: { screen: YourPick }
         },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'darkgreen'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#ffff'
            }
        }
    }
);
const DolphinsNavigator = createStackNavigator(
    {
    Dolphins: {
        screen: Dolphins,
        navigationOptions: ({navigation}) => ({
           headerLeft: <Icon
               name='bolt'
               type='font-awesome'
               iconStyle={styles.stackIcon}
               onPress={() => navigation.toggleDrawer()}
           />
        })          
       },
       Dolphinsinfo: { screen: Dolphinsinfo },
       DolphinsSchedule: { screen: DolphinsSchedule },
       DolphinsRoster: { screen: DolphinsRoster },
       DolphinsPlayer: { screen: DolphinsPlayer },
       DolphinsTix: { screen: DolphinsTix }
    },
    {
        initialRouteName: 'Dolphins',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#48d1cc'
            },
            headerTintColor: '#ffff',
            headerTitleStyle: {
                color: '#ff0000'
            }
        }
    }
    );
const NinersNavigator = createStackNavigator(
    {
        Niners: {
            screen: Niners,
            navigationOptions: ({navigation}) => ({
               headerLeft: <Icon
                   name='bolt'
                   type='font-awesome'
                   iconStyle={styles.stackIcon}
                   onPress={() => navigation.toggleDrawer()}
               />
            })          
           },
        Ninersinfo: { screen: Ninersinfo },
        Ninersschedule: { screen: Ninersschedule },
        NinersRoster: { screen: NinersRoster },
        NinersPlayer: { screen: NinersPlayer },
        NinersTix: { screen: NinersTix }
             },
             {
                initialRouteName: 'Niners',
                defaultNavigationOptions: {
                    headerStyle: {
                        backgroundColor: '#48d1cc'
                    },
                    headerTintColor: '#ffff',
                    headerTitleStyle: {
                        color: '#ff0000'
                    }
                }
            }
            );
const MainNavigator = createDrawerNavigator(
    {
        Home: {screen: HomeNavigator },
        Dolphins: { screen: DolphinsNavigator },
        Niners: { screen: NinersNavigator }
    },
    {
    drawerBackgroundColor: '#CEC8FF'
    
}
)
const AppNavigator = createAppContainer(MainNavigator);
class Main extends Component {
    render() {
        return (
            <View
            style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}>
             <AppNavigator />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
});

export default Main;
