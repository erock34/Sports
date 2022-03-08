import React, { Component } from 'react';
import { View, Modal, Button, Text, Picker, Switch, Image, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class NinersTix extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tickets: 1,
            parking: false,
            showModal: false,
            park: 0,
            ticprice: 0
        };
    }
    static navigationOptions = {
        title: '49ers Tickets'
    }
    toggleModal() {
        this.setState({ showModal: !this.state.showModal });
    }
    handleTickets() {
        if (this.state.parking) {
            console.log("this is GREAT ", JSON.stringify(this.state));
            this.toggleModal();
            this.state.ticprice = 10;
            return this.state.park = 5;
        } else {
            console.log("this is GREAT ", JSON.stringify(this.state));
            this.toggleModal();
            this.state.ticprice = 10;
            return this.state.park = 0;
        }
    }
    resetForm() {
        this.setState({
            tickets: 1,
            parking: false,
            showModal: false
        });
    }
    render() {
        return (
            <View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Number of Tickets</Text>
                    <Picker
                        style={styles.formItem}
                        selectedValue={this.state.tickets}
                        onValueChange={itemValue => this.setState({ tickets: itemValue })}
                    >
                        <Picker.Item label='1' value='1' />
                        <Picker.Item label='2' value='2' />
                        <Picker.Item label='3' value='3' />
                        <Picker.Item label='4' value='4' />
                        <Picker.Item label='5' value='5' />
                        <Picker.Item label='6' value='6' />
                    </Picker>
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Parking?</Text>
                    <Switch
                        style={styles.formItem}
                        value={this.state.parking}
                        trackColor={{ true: '#b22222', false: null }}
                        onValueChange={value => this.setState({ parking: value })}
                    />
                </View>
                <View style={styles.formRow}>
                    <Button
                        onPress={() => this.handleTickets()}
                        title='Submit'
                        color='#b22222'
                        accessibilityLabel='Tap me to search for available campsites to reserve'
                    />
                </View>
                <Text />
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                    <Image
                        source={require('../images/ninersstadium.jpeg')} />
                </View>


                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.showModal}
                    onRequestClose={() => this.toggleModal()}
                >
                    <View style={styles.modal}>
                        <Text style={styles.modalTitle}>49ers Tickets</Text>
                        <Text style={styles.modalText}>
                            Number of Tickets: {this.state.tickets}
                        </Text>
                        <Text style={styles.modalText}>
                            Parking?: {this.state.parking ? 'Yes $5 ' : 'No  $0 '}

                        </Text>
                        <Text style={styles.modalText}>
                            <Text>
                                {this.state.parking}
                            </Text>
                            Total ${'$', this.state.tickets * this.state.ticprice + this.state.park}
                        </Text>

                        <Button
                            onPress={() => {
                                this.toggleModal();
                                this.resetForm();
                            }}
                            color='#b22222'
                            title='Close'
                        />
                    </View>
                </Modal>
            </View>
        );
    }
};
const styles = StyleSheet.create({
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex: 1
    },
    modal: {
        justifyContent: 'center',
        margin: 20,
        color: '#b22222'
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#b22222',
        textAlign: 'center',
        color: '#ffe4c4',
        marginBottom: 20
    },
    modalText: {
        fontSize: 18,
        margin: 10,
        color: '#b22222'
    }
}
)

export default NinersTix;