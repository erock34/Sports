import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import { Card } from 'react-native-elements';

class Ninersinfo extends Component {

    static navigationOptions = {
        title: 'Information'
    }
    render() {
        return (
            <>            
           <Card >
                <Image
                    style={styles.image}
                    source={require('../images/49ershelmet.jpg')}
                   />
                    <Text wrapperstyle={{ margin: 20 }}>
                        16 Montana Way
                    </Text>
                    <Text wrapperstyle={{ margin: 20 }}>
                        Santa Clara, CA  33-16-80
                    </Text>
                   
                    <Text wrapperstyle={{ margin: 20 }}>
                        U.S.A.  </Text>
                    <Text></Text>
                    <Text wrapperstyle={{ margin: 20 }}>
                        Phone: 1-LETS-GO-NINERS
                    </Text>
                    <Text wrapperstyle={{ margin: 20 }}>
                        Email: frontoffice@49ers.com
                    </Text>
                    
               </Card>
        
        
            <Card>
                <Text>
                Submit your email for the Niners Newsletter
                </Text>
            </Card>
            </>
        );   
    }
}
const styles = {
image: {        
 width: 300,
 height: 250,
 marginRight: 180,
 marginBottom: 10,
 flexDirection: 'row',
 alignItems: 'center',
 resizeMode: 'contain'
},
}
export default Ninersinfo;
