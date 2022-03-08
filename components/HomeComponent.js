import React, { Component } from 'react';
import { View, Text, Button, Modal, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Card } from 'react-native-elements';


class Home extends Component {
    static navigationOptions = {
        title: 'Game of the Week'
    }

    render() {
        return (
            <View>
                <ScrollView>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                       <TouchableOpacity onPress={() => {
                            const { navigate } = this.props.navigation;
                            navigate('Niners')
                        }}>
                            <Text> 49er's </Text>
                            <Image
                                style={styles.image} source={require('./images/49ers.png')}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            const { navigate } = this.props.navigation;
                            navigate('Dolphins')
                        }}>
                            <Text> Dolphins </Text>
                            <Image
                                style={styles.image} source={require('./images/dolphins.png')}
                            />
                        </TouchableOpacity>
                    </View>
            <Card>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                <Image
                       source={require('./images/rug.jpg')} />
                      </View>
                </Card>
                <Text></Text>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={ styles.image1}>
                     Who is going to win?
                    </Text>
                    <Text></Text>
                    </View>
                    <View style={styles.button}>
                    <Button 
                     title="Your Pick"
                     color='darkgreen'
                        onPress={() => {
                        const { navigate } = this.props.navigation;
                        navigate('YourPick')}
                        }
                        />                      
                        
                        </View>
               </ScrollView>

            </View>
        );
    };
}

const styles = {
    container: {
        width: 100,
        //fontSize: 10,
        height: 40,
        right: 60,
        flexDirection: 'row'       
    },
    container2: {
        margin: 60,
    },
    image: {
        //flex: 1,
        width: 150,
        height: 150,
        resizeMode: 'contain',
        flexDirection: 'row'
    },
    image1: {
        flex: 1,
        marginRight: 120,
        marginLeft: 130,
        flexDirection: 'row'
    },
    button: {
        padding: 10,
        flex: 1,
        justifyContent: 'center',
        //alignItems: 'center',
        height: 60,
        marginRight: 50,
        marginLeft: 35,
        width: 320,
        flexDirection: 'row',
        margin: 20,
        marginBottom: 0
    }
}
export default Home;