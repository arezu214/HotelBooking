import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, FlatList, ImageBackground, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import InputField from './InputField';
import { Dimensions } from "react-native";
import Header from './header';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import setpersonalinfo from '../../../../../Action/set_personalInfoBooking';

class RoomDetails extends React.Component {
    state = {
        Addguest: false,
        checkin: null,
        fullname: null,
        phonenumber: null,
        email: null,
        guest: null,
    }
    TextHandlerCheckin = (text) => {
        this.setState({
            checkin: text,
        })
    }
    TextHandlerfullname = (text) => {
        this.setState({
            fullname: text,
        })
    }
    TextHandlerphonenumber = (text) => {
        this.setState({
            phonenumber: text,
        })
    }
    TextHandlerEmail = (text) => {
        this.setState({
            email: text,
        })
    }
    TextHandlerGuest = (text) => {
        this.setState({
            guest: text,
        })
    }
    render() {
        return (
            <ScrollView style={{ backgroundColor: '#fff' }}>
                <View style={{ height: Math.round(Dimensions.get('window').height), alignItems: 'center' }}>
                    <Header title="BookingInfo" />
                    <View style={[styles.content, { marginTop: 25 }]}>
                        <InputField onChangeTextHandler={this.TextHandlerCheckin} name="calendar-blank-outline" placeholder="Check in" />
                        <InputField onChangeTextHandler={this.TextHandlerfullname} name="account-outline" placeholder="Fullname" />
                        <InputField onChangeTextHandler={this.TextHandlerphonenumber} name="cellphone" placeholder="Phone Number" />
                        <InputField onChangeTextHandler={this.TextHandlerEmail} name="email-outline" placeholder="Email" />

                    </View>
                    <View
                        style={{
                            borderBottomColor: '#ebebeb',
                            borderBottomWidth: 1,
                            width: '100%',
                            marginTop: 20
                        }}
                    />
                    <View style={[styles.content, { marginTop: 10 }]}>
                        <View style={styles.contentRowFlexStart}>
                            <TouchableOpacity onPress={() => { this.setState({ Addguest: !this.state.Addguest }) }}>
                                <Icon size={30} name={this.state.Addguest ? 'check-box' : 'check-box-outline-blank'} color="#eb5757" />
                            </TouchableOpacity>
                            <Text style={{ alignSelf: 'center', marginLeft: 10, fontSize: 16 }}>Add the guest?</Text>
                        </View>
                    </View>
                    {
                        this.state.Addguest ?
                            <View style={[styles.content, { marginTop: 5 }]}>
                                <InputField onChangeTextHandler={this.TextHandlerGuest} name="account-plus-outline" placeholder="Fullname Guest" />

                            </View>
                            :
                            null
                    }

                    <TouchableOpacity
                        onPress={() => {
                            if (this.state.checkin != null
                                && this.state.email != null
                                && this.state.fullname != null
                                && this.state.phonenumber != null) {
                                this.props.SetPersonalInfo(
                                    this.state.checkin,
                                    this.state.fullname,
                                    this.state.phonenumber,
                                    this.state.email,
                                    this.state.guest
                                )
                                this.props.navigation.navigate('BookingScreen3');
                            } else {

                                alert('please fill form');
                            }
                        }}
                        style={[styles.content, { position: 'absolute', bottom: 30 }]}>
                        <View style={[styles.continuePayment]}>
                            <Text style={{ color: "#fff", fontSize: 16 }}>
                                Continue Payment
                        </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    contentRowFlexStart: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    centerContent: {
        width: '90%',
        marginTop: 15,
        flexDirection: 'row',
    },
    circle: {
        width: 32,
        height: 32,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },

    shapeButton: {
        borderTopEndRadius: 8,
        borderTopStartRadius: 8,
        borderBottomEndRadius: 8,
        borderBottomStartRadius: 8,

    },

    contentRowSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    content: {
        width: '90%',
    },
    continuePayment: {
        width: "100%",
        height: 70,
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: "#eb5757",
        alignItems: 'center'
    }
})
const mapStateToProps = state => ({
    personalinfo: state.bookingscreen2

});
const mapDispatchToProps = dispatch =>
    bindActionCreators({
        SetPersonalInfo: setpersonalinfo
    },
        dispatch
    );
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RoomDetails);