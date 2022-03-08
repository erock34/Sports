import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { NINERSROSTER } from '../../shared/NinersRoster';
import { baseUrl } from '../../shared/baseUrl';

function RenderCampsite({ player }) {
    if (player) {
        return (
            <Card
                featuredTitle={player.name}
                image={require('../images/49ershelmet.gif')}>
                <Text wrapperstyle={{ margin: 20 }}>
                    Player: {player.description}
                </Text>
                <Text wrapperstyle={{ margin: 20 }}>
                    Age: {player.age}
                </Text>
                <Text wrapperstyle={{ margin: 20 }}>
                    School: {player.school}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class NinersPlayer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            NinersRoster: NINERSROSTER
        };
    }

    static navigationOptions = {
        title: 'Niners Player'
    }

    render() {
        const playerId = this.props.navigation.getParam('playerId');
        const player = this.state.NinersRoster.filter(player => player.id === playerId)[0];
        return <RenderCampsite player={player} />;
    }
}

export default NinersPlayer;