import React, { Component } from 'react';
import { View, Image, Modal, Switch, StyleSheet, Text, Button } from 'react-native';

class YourPick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            niners: false,
            dolphins: false,
            showModal: false,
            team: ''
        };
    }
    static navigationOptions = {
        title: 'Make Your Pick'
    }
    toggleModal() {
        this.setState({ showModal: !this.state.showModal });
    }
    pickSubmit() {
        if (this.state.niners) {
            console.log("Niners ", JSON.stringify(this.state));
            this.toggleModal();
            this.state.team = '49ers';
            return this.state.team;
        } else {
            console.log("Dolphins ", JSON.stringify(this.state));
            this.toggleModal();
            this.state.team = 'Dolphins';
            //this.state.team = ./images/dolphins.png;
            return this.state.team;

        }
    }
    resetForm() {
        this.setState({
            niners: false,
            dolphins: false,
            showModal: false
        });
    }
    render() {
        return (
            <>
                <View style={styles.formRow}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                        <Image
                            source={require('./images/49ers.png')} />
                    </View>
                    <Switch
                        style={styles.formItem}
                        value={this.state.niners}
                        trackColor={{ true: '#5637DD', false: null }}
                        onValueChange={value => this.setState({ niners: value })}
                     />
                    <Text>
                        {this.state.niners ? '49ers' : null}
                    </Text>
                </View>

                <View style={styles.formRow}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                        <Image
                            source={require('./images/dolphins.png')} />
                    </View>
                    <Switch
                        style={styles.formItem}
                        value={this.state.dolphins}
                        trackColor={{ true: '#5637DD', false: null }}
                        onValueChange={value => this.setState({ dolphins: value })}
                    />
                    <Text>
                        {this.state.dolphins ? 'Dolphins' : null}
                    </Text>
                </View>
                <View style={styles.button}>
                    <Button
                        onPress={() => this.pickSubmit()}
                        title='Submit Pick'
                        color='darkgreen'
                    />
                </View>
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.showModal}
                    onRequestClose={() => this.toggleModal()}
                >
                    <Text></Text>
                    <Text style={styles.modalText}>
                        This is your team {this.state.team}
                    </Text>
                    <View style={styles.button_close}>
                        <Button
                            onPress={() => {
                                this.toggleModal();
                                this.resetForm();
                            }}
                            color='darkgreen'
                            title='Close'
                        />
                    </View>
                </Modal>
            </>
        );
    };
};


const styles = StyleSheet.create({
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
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
        margin: 20
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#5637DD',
        textAlign: 'center',
        color: '#fff',
        marginBottom: 20
    },
    modalText: {
        fontSize: 18,
        margin: 10
    },
    button: {
        padding: 10,
        flex: 1,
        justifyContent: 'center',
        height: 10,
        marginRight: 50,
        marginLeft: 35,
        width: 320,
        flexDirection: 'row',
        margin: 20,
        marginBottom: 160
    },
    button_close: {
        padding: 10,
        flex: 1,
        justifyContent: 'center',
        height: 10,
        marginRight: 50,
        marginLeft: 35,
        width: 320,
        flexDirection: 'row',
        margin: 20,
        marginBottom: 580
    }
})

export default YourPick;