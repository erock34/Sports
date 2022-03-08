import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

class Ninersschedule extends Component {
    static navigationOptions = {
        title: '49ers Schedule'
    }

    render() {
        return (
            <ScrollView>
                <View>
                    <Image
                        style={styles.image}
                        source={require('../images/49ers_image.jpeg')} />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.text3}>
                            Toledo         10/5
                        </Text>
                        <Text>
                            <TouchableOpacity onPress={() => {
                                const { navigate } = this.props.navigation;
                                navigate('NinersTix')
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
                                navigate('NinersTix')
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
                                navigate('NinersTix')
                            }}>
                            <Image
                                style={styles.image1}
                                source={require('../images/tickets.jpeg')} />
                        </TouchableOpacity>
                        </Text>
                    </View>
                    <Image
                        style={styles.image} source={require('../images/49ers.png')} />
                </View>
            </ScrollView>
        )
    };
};

const styles = {
    image: {
        width: 350,
        marginRight: 130,
        marginTop: 10,
        marginBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        //alignItems: 'center',
        resizeMode: 'contain'
    },
    image1: {
        width: 160,
        height: 60,
        marginTop: 30,
        marginBottom: 100,
        resizeMode: 'contain'
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

export default Ninersschedule;