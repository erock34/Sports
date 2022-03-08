import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { NINERSROSTER } from '../../shared/NinersRoster';

class NinersRoster extends Component {
    constructor(props) {
            super(props);
            this.state = {
                NinersRoster: NINERSROSTER
            };
        }
    static navigationOptions = {
        title: 'Niners Roster'
    }
       render(){
            const { navigate } = this.props.navigation;
            const renderNinersRosterItem = ({item}) => {
            return (
            <ListItem
                title={item.name}
                //subtitle={item.description}
                onPress={() => navigate('NinersPlayer', { playerId: item.id })}
                leftAvatar={{ source: require('../images/49ers.png') }}
            />
           );
    };
        return (
            <FlatList
                data={this.state.NinersRoster}
                renderItem={renderNinersRosterItem}
                keyExtractor={item => item.id.toString()}
            />

        );
    };
}


export default NinersRoster;