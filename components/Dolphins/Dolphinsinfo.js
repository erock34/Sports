import React, { Component } from 'react';
import { Image, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Dolphinsinfo extends Component {

    static navigationOptions = {
        title: 'Information'
    }
    render() {
        return (
            <>
            <ScrollView>
                <Card title="Contact Information">
                    <Image
                    style={styles.image}
                    source={require('../images/dolphins.jpg')}
                   />
                    <Text wrapperstyle={{ margin: 20 }}>
                        1972 Dolphin Blvd
                    </Text>
                    <Text wrapperstyle={{ margin: 20 }}>
                        Miami, FL  33101
                    </Text>
                    <Text wrapperstyle={{ margin: 20 }}>
                        U.S.A.  </Text>
                    <Text></Text>
                    <Text wrapperstyle={{ margin: 20 }}>
                        Phone: 1-888-DOLPHIN
                    </Text>
                    <Text wrapperstyle={{ margin: 20 }}>
                        Email: frontdesk@dolphins.com
                    </Text>
                </Card>

            <Card>
                <Text>
                Please submit your email for the Dolphin Newsletter
                </Text>
            </Card>
            </ScrollView>
            </>
        );
    }
}
const styles = {
    image: {
     //flex: 1,
     width: 300,
     height: 250,
     marginRight: 580,
     marginLeft: 10,
     resizeMode: 'stretch',
     alignItems: 'center',
     resizeMode: 'contain'
    },
    }
export default Dolphinsinfo;
