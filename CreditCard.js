import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import moment from 'moment';
export default class CreditCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.item
        }
    }
    render() {
        return (
            <View style={[styles.CardView, (!this.props.single) ? styles.marginRight15 : null]}
                onPress={() => {
                    // this.setState({ isSelected: item.name })
                }}>
                <View style={styles.CardContent}>
                    <View>
                        <Text style={{ color: '#fff', fontSize: 18 }}>{this.state.item.name.toUpperCase()}</Text>
                        {/* <Text style={{ color: '#fff', fontSize: 26 }}>${this.state.item.stock}</Text> */}
                    </View>
                    <View>
                        <Text style={{ color: '#fff', fontSize: 12 }}>EXP {moment(this.state.item.expire).format('YY/MM')}</Text>
                        <Text style={{ color: '#fff', fontSize: 18 }}>{this.state.item.number}</Text>

                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    marginRight15: {
        marginRight: 15
    },
    CardView: {
        height: 200,
        width: 315,
        borderRadius: 8,
        backgroundColor: '#6690ff',
        justifyContent: 'center',
        alignItems: 'center',


    },
    CardContent: {
        width: '80%',
        height: '80%',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
});