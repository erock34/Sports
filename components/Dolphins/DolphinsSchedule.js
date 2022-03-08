import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class DolphinsSchedule extends Component {
    static navigationOptions = {
        title: 'Dolpins Schedule'
    }

    render() {
        return (
            <ScrollView>
                <View>
                    <Image
                        style={styles.image}
                        source={require('../images/miami_dolphins.jpeg')} />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.text3}>
                            Toledo         10/5
                        </Text>
                        <Text>
                            <TouchableOpacity onPress={() => {
                                const { navigate } = this.props.navigation;
                                navigate('DolphinsTix')
                            }}>
                                <Image
                                    style={styles.image1} source={require('../images/tickets.jpeg')} />
                            </TouchableOpacity>
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                        <Text style={styles.text3}>
                            Casper       10/12
                        </Text>
                        <Text>
                            <TouchableOpacity onPress={() => {
                                const { navigate } = this.props.navigation;
                                navigate('DolphinsTix')
                            }}>
                                <Image
                                    style={styles.image1}
                                    source={require('../images/tickets.jpeg')} />
                            </TouchableOpacity>
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.text3}>
                            Austin        10/19
                        </Text>
                        <Text>
                            <TouchableOpacity onPress={() => {
                                const { navigate } = this.props.navigation;
                                navigate('DolphinsTix')
                            }}>
                                <Image
                                    style={styles.image1}
                                    source={require('../images/tickets.jpeg')} />
                            </TouchableOpacity>
                        </Text>
                    </View>


                    <Image
                        style={styles.image} source={require('../images/dolphins.png')} />
                </View>

            </ScrollView>
        )
    };
};

const styles = {
    image: {
        width: 350,
        marginLeft: 5,
        marginRight: 130,
        marginBottom: 30,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        resizeMode: 'contain'
    },
    image1: {
        width: 160,
        height: 60,
        marginTop: 30,
        marginBottom: 100,
        resizeMode: 'contain',
      },
    image2: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        right: 80,
        marginLeft: 80,
        position: 'column',
        resizeModel: 'contain'
    },
    text1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 90,
        right: 90,
        fontSize: 25,
        flexDirection: 'column',
        position: 'absolute'
    },
    text3: {
        justifyContent: 'space-between',
        rightPadding: 30,
        marginTop: 40,
        marginRight: 20,
        fontSize: 30,
        flexDirection: 'row'
     },
}

export default DolphinsSchedule;