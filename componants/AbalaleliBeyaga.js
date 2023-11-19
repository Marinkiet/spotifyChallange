import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import { themeFonts, themeTextColor } from '../theme';
const AbalaleliBeyaga = () => {
    return (
        <LinearGradient
            colors={["#282828", "#1f1f1f", "#121212"]}
            style={styles.upNextContainer}>
            <View style={styles.upNextDetails}>

                <View style={styles.upNextDetailsSongCount}>
                    <Text style={[styles.themeTextSecondary]}>Abalaleli benyanga anbangu-<Text style={{ fontSize: 15 }}>166,307</Text></Text>
                </View>

                <View style={styles.upNextDetailsButtonAndIconContainer}>
                    <TouchableOpacity>
                        <View style={styles.upNextDetailsButtonContainer}>
                            <Text style={styles.upNextDetailsButton}>OBALANDELAYO</Text>

                        </View>
                    </TouchableOpacity>

                    <View style={styles.upNextDetailsIconContainer}>
                        <TouchableOpacity>
                            <Feather
                                name="more-horizontal" size={23} color={themeTextColor.secondary(1)}></Feather>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
            <View style={styles.upNextIconsContainer}>
                <TouchableOpacity>
                    <View style={styles.upNextPlayIconContainer}>

                        <Entypo
                            style={{ position: 'relative', left: '5%' }}
                            name="controller-play"
                            size={34}
                            color={themeTextColor.primary(1)}></Entypo>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.upNextShuffleIconContainer}>
                    <Entypo
                        style={{ position: 'relative', left: '5%' }}
                        name="shuffle"
                        size={11}
                        color={themeTextColor.IconGreen(1)}></Entypo>


                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    themeTextPrimary: {
        fontFamily: themeFonts.circularBook,
        color: themeTextColor.primary(1)
    },
    themeTextSecondary: {
        color: themeTextColor.secondary(1),
        fontSize: 14,
        fontFamily: themeFonts.circularBook,

    },
    upNextIconsContainer: {
        // backgroundColor: 'lightblue',
        width: '20%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',

    },
    upNextPlayIconContainer: {
        backgroundColor: themeTextColor.IconGreen(1),
        height: 57,
        width: 57,
        borderRadius: 35,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    upNextShuffleIconContainer: {
        position: 'absolute',
        top: '65%',
        left: '54%',
        backgroundColor: themeTextColor.primary(1),
        height: 22,
        width: 22,
        borderRadius: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    upNextContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '1%'
    },
    upNextDetails: {
        // backgroundColor: 'orange',
        flex: 1,
        marginLeft: '4%'
    },
    upNextDetailsSongCount: {
        flex: 1,
        // backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'center',

    },
    upNextDetailsButtonAndIconContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor:'red', 

    },
    upNextDetailsButtonContainer: {
        height: '75%',
        // backgroundColor: 'purple',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderColor: 'white',
        borderWidth: 1.5,
        paddingHorizontal: 10,

    },
    upNextDetailsButton: {
        fontFamily: themeFonts.circularBlack,
        fontSize: 11,
        fontWeight: '700',
        color: 'white',
        letterSpacing: 1,


    },
    upNextDetailsIconContainer: {
        flex: 1,
        display: 'flex',
        left: '60%',



    },
})
export default AbalaleliBeyaga