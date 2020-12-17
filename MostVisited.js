import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground, FlatList } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Hotel } from '../../../../../Data/data';
import { Button } from 'react-native-paper';
import axios from "axios";
import Loading from '../../../Stack/Loading';
export default class MostVisited extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        Hotel: [],
        isLoaded: false
    }

    async componentDidMount() {
        const Hotel = await axios.get('http://babaei.gyhj.com/api/hotel');
        this.setState({ Hotel: Hotel.data, Hotel: Hotel, isLoaded: true });
    }
    renderItem = ({ item }) => (

        <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('HotelDetails', { hotelid:item.id })
        }}>
            <View style={styles.MainCadr}>
                <ImageBackground source={require("../../../../../Assets/Image/Singapore-Hotel2.jpg")} style={styles.ImageBack}>
                    <View style={styles.TopDetails}>
                        <View style={styles.informationBox}>
                            <MaterialCommunityIcons name="information" size={24} color='#27ae60' style={{ marginLeft: 5 }} />
                            <Text style={styles.informationText}> {item.visitedCount} Vizited</Text>
                        </View>
                        <View style={{ position: 'relative' }}>
                            {
                                item.likeCount > 0 ?
                                    <MaterialCommunityIcons name="heart" size={24} color='#ff0000' style={styles.like} />
                                    :
                                    <MaterialCommunityIcons name="heart-outline" size={24} color='#ffffff' style={styles.like} />
                            }

                        </View>

                    </View>
                    <View style={styles.BottomDetails} >
                        <View style={{ width: "60%" }}>
                            <View style={styles.RowDirection}>
                                <Ionicons name="location-outline" size={16} color='#fff' style={{ marginRight: 10, }} />
                                <Text style={styles.subtitle}>{item.countryName}</Text>
                            </View>
                            <Text style={styles.headerText}>{item.name}</Text>

                        </View>
                        <View style={[{ height: "100%", width: "40%" }, styles.RowDirection]}>
                            <MaterialCommunityIcons name="star" size={24} color='#f2c94c' style={{ position: 'absolute', right: 30, bottom: 15 }} />
                            <Text style={[styles.headerText, { position: 'absolute', right: 15, bottom: 15 }]}>{item.star}</Text>

                        </View>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );

    render() {
        if (!this.state.isLoaded) {
            return (
                <Loading />
            );
        }
        return (
            <View style={styles.heightCard}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>Most Visited</Text>
                    <TouchableOpacity>
                        <MaterialCommunityIcons size={25} name="arrow-right" color="#638eff" />

                    </TouchableOpacity>
                </View>
                <FlatList
                    style={{ marginLeft: 20 }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={this.state.Hotel}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id.toString()}

                />
            </View>

        );
    }
}
const styles = StyleSheet.create({
    heightCard: {
        height: 370,
        overflow: 'hidden',
    },
    titleText: {
        color: "#000",
        fontSize: 20,

    },
    titleView: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    RowDirection: {
        flexDirection: 'row',

    },
    TopDetails: {
        height: 60,
        overflow: 'hidden',
    },
    BottomDetails: {
        height: 60,
        width: "100%",
        position: 'absolute',
        bottom: 0,
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 20,
    },
    MainCadr: {
        width: 260,
        height: 340,
        borderRadius: 10,
        overflow: 'hidden',
        marginRight: 15,


    },
    ImageBack: {
        width: 260,
        height: 340,
        position: 'relative',
        overflow: 'hidden',
    },
    informationBox: {
        width: 100,
        height: 30,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: 'white',
        position: 'absolute',
        top: 15,
        left: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

    },
    informationText: {
        fontSize: 12,
    },
    like: {
        position: 'absolute',
        right: 15,
        top: 20
    },
    headerText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '700',

    },
    subtitle: {
        color: "#fff",
        fontSize: 12,
    }

});