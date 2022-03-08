import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { DOLPHINSROSTER } from '../../shared/DolphinsRoster';

class DolphinsRoster extends Component {
    constructor(props) {
            super(props);
            this.state = {
                DolphinsRoster: DOLPHINSROSTER
            };
        }
    static navigationOptions = {
        title: 'Dolphins Roster'
    }
    render(){
    const { navigate } = this.props.navigation;
    const renderDolphinsRosterItem = ({ item }) => {
        return (
            <ListItem
                title={item.name}
                //subtitle={item.description}
                onPress={() => navigate('DolphinsPlayer', { playerId: item.id })}
                leftAvatar={{ source: require('../images/dolphins.png') }}
            />
        );
    };
        return (
            <FlatList
                data={this.state.DolphinsRoster}
                renderItem={renderDolphinsRosterItem}
                keyExtractor={item => item.id.toString()}
            />

        );
    }

};
export default DolphinsRoster;