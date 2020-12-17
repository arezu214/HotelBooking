import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ImageBackground, CheckBox, Vibration } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import InputField from './InputField';
import CreditCard from './CreditCard';
import Header from './header';
const cards = [
    { id: 1, name: 'THOMAS', stock: 4000, EXP: '12/24', number: "4401 2103 1231 xxxx" },
    { id: 2, name: 'ANDERSON', stock: 6000, EXP: '11/24', number: "3301 2102 1131 xxxx" },
]

export default class RoomDetails extends React.Component {
    state = {
        isSelected: null,
		bookingInfo:{},
    }
    renderCard = ({ item }) => (
        <CreditCard item={item} />
    );
    render() {
        return (
            <View style={{ alignItems: 'center', height: "100%", backgroundColor: '#fff' }}>
                <Header title="Details Confirmation"/>
                <View style={[styles.centerContent, styles.contentRowSpaceBetween]}>
                    <Text style={{ fontSize: 15 }}>
                        Selected Card
                    </Text>
                    <TouchableOpacity>
                        <Text style={{ color: '#eb5757' }}>
                            Change
                        </Text>

                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 20 }}>
                    <CreditCard single={true} item={cards[0]} />
                </View>
                <View style={[styles.dotBorderBottom]}>
                    <View><Text style={{ color: "#9e9e9e", fontSize: 16 }}>{this.state.bookingInfo.hotemname}, {this.state.bookingInfo.country}</Text></View>
                    <View style={styles.contentRowSpaceBetween}>
                        <Text style={{ fontSize: 16 }}>{this.state.bookingInfo.roomname}</Text>
                        <Text style={{ color: "#9e9e9e" }}>{this.state.bookingInfo.floor} Floor</Text>
                    </View>
                </View>
                <View style={[styles.dotBorderBottom]}>
                    <View><Text style={{ color: "#9e9e9e", fontSize: 14 }}>Name</Text></View>
                    <View style={styles.contentRowSpaceBetween}>
                        <Text style={{ fontSize: 16 }}>{this.state.bookingInfo.Name}</Text>
                    </View>
                </View>
                <View style={[styles.dotBorderBottom]}>
                    <View><Text style={{ color: "#9e9e9e", fontSize: 14 }}>How Long</Text></View>
                    <View style={styles.contentRowSpaceBetween}>
                        <Text style={{ fontSize: 16 }}>x{this.state.bookingInfo.HowLong} Night</Text>
                        <Text style={{ color: "#638eff", fontSize: 16 }}>${this.state.bookingInfo.howMuch}</Text>
                    </View>
                </View>
                <View style={[styles.content, { marginTop: 20, flexDirection: 'row',justifyContent:'space-between' }]}>
                    <View style={{}}>
                        <View><Text style={{ color: "#9e9e9e", fontSize: 14 }}>Check In</Text></View>
                        <View style={styles.contentRowSpaceBetween}>
                            <Text style={{ fontSize: 16 }}>{this.state.bookingInfo.checkin}</Text>
                        </View>
                    </View>
                    <View style={{ }}>
                        <View><Text style={{ color: "#9e9e9e", fontSize: 14 }}>Check Out</Text></View>
                        <View style={styles.contentRowSpaceBetween}>
                            <Text style={{ fontSize: 16 }}>{this.state.bookingInfo.checkout}</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.content, { position: 'absolute', bottom: 10 }]}>
                    <View style={[styles.continuePayment]}>
                        <Text style={{ color: "#fff", fontSize: 16 }}>
                            Continue Payment
                        </Text>
                    </View>
                </View>
            </View >
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
    },

    cardFlatlist: {
        width: '95%',
        alignSelf: 'flex-end',
        marginTop: 20,
        marginBottom: 15,
    },
    dotBorderBottom: {
        borderBottomColor: '#ebebeb',
        borderBottomWidth: 1,
        marginTop: 15,
        width: '90%',
        paddingBottom: 15,
    }

})