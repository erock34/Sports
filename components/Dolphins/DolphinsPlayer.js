import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { DOLPHINSROSTER } from '../../shared/DolphinsRoster';

function RenderCampsite({player}) {
    if (player) {
        return (
            <Card
            featuredTitle={player.name}
            style={styles.image}
    image={require('../images/dolphinshelmet.gif')}>
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

class DolphinsPlayer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            DolphinsRoster: DOLPHINSROSTER
        };
    }

    static navigationOptions = {
        title: 'Dolphins Player'
    }

    render() {
        const playerId = this.props.navigation.getParam('playerId');
        const player = this.state.DolphinsRoster.filter(player => player.id === playerId)[0];
        return <RenderCampsite player={player} />;
    }
}
const styles = {
    image: {
     //flex: 1,
     width: 50,
     height: 10,
     marginRight: 180,
     marginLeft: 10,
     resizeMode: 'stretch',
     alignItems: 'center',
     resizeMode: 'contain'
    },
    }

export default DolphinsPlayer;