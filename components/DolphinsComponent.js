import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';



class Dolphins extends Component {
    static navigationOptions = {
        title: 'Dolphins'
    }
   render() {
        return (
        <ScrollView>
            <View style={styles.container}>
             <TouchableOpacity onPress={() => {
                const { navigate } = this.props.navigation;
                navigate('Dolphinsinfo')
                }}> 
                <Image
                style={styles.image} source={require('./images/dolphins.png')}/>
                <Text style={styles.text}> Information</Text>
            </TouchableOpacity>  

            <TouchableOpacity onPress={() => {
                const { navigate } = this.props.navigation;
                navigate('DolphinsSchedule')
                }}> 
                <Image
                style={styles.image} source={require('./images/dolphins.png')}
                />
                <Text style={styles.text1}> Schedule</Text>
             </TouchableOpacity>  

             <TouchableOpacity onPress={() => {
                const { navigate } = this.props.navigation;
                navigate('DolphinsRoster')
                }}> 
                <Image
                style={styles.image} source={require('./images/dolphins.png')}
                />
                <Text style={styles.text2}> Roster</Text>
             </TouchableOpacity>   

            </View>
            </ScrollView>
        );
    }
}
const styles = {
    container: {
        flexDirection: 'column'
    },  
    text: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80,
        right: 50,
        fontSize: 30,
        flexDirection: 'column',
        position: 'absolute'
    },
    text1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 90,
        right: 90,
        fontSize: 30,
        flexDirection: 'column',
        position: 'absolute'
    },
    text2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 90,
        right: 130,
        fontSize: 30,
        flexDirection: 'column',
        position: 'absolute'
    },
    text3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 90,
        right: 80,
        fontSize: 30,
        flexDirection: 'column',
        position: 'absolute'
    },
    container2:{
        margin: 60,
    }, 
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain'
    }
    
}
export default Dolphins;