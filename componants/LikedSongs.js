import { View, Text, StyleSheet, Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import { themeFonts, themeTextColor } from '../theme';

const LikedSongs = () => {
    return (
        <View style={styles.likedSongsontainer}>

            <View style={styles.likedSongsAlbumArtContainer}>
                <View >

                    <View >
                        <Image
                        style={styles.likedSongAlbumArtImage}
                            source={require('../assets/images/highklassified.jpg')}
                        />
                    </View>
                </View>
                <View style={styles.likedSongIconBadge}>
                        <AntDesign 
                        name="heart" 
                        size={11} 
                        color={themeTextColor.primary(1)}></AntDesign>
                    </View>

            </View>

            <View style={styles.likedSongArtistDetailsContainer}>
                <View style={styles.likedSongTitleContainer}>
                    <Text style={[styles.themeTextPrimary, styles.likedSongTitle]}>Izingoma Ezithandiwe
                    </Text>
                </View>
                <View style={styles.likedSongSongCountandArtistNameContainer}>
                    <Text style={[styles.themeTextSecondary, styles.likedSongSongCountandArtistName]}> 5 izingoma <Text style={{ fontSize: 9 }}>•</Text> High Klassified</Text>
                </View>
            </View>

            <View style={styles.upNextNextIconContainer}>
               <TouchableOpacity>
               <Entypo
                    style={styles.headerBackIcon}
                    name="chevron-thin-right"
                    size={20}
                    color={themeTextColor.secondary(1)}></Entypo>
               </TouchableOpacity>
            </View>
        </View>
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

    likedSongsontainer: {
        // backgroundColor: 'tan',
        flex: 1,
        paddingLeft: '2%',
        display: 'flex',
        flexDirection: 'row',
        display: 'flex',
    },
    upNextNextIconContainer: {
        // backgroundColor: 'red',
        width: '15%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    likedSongsAlbumArtContainer: {
        // backgroundColor: 'pink',
        width: '20%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position:'relative',
        top:10
    },
    likedSongAlbumArtImage: {
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 35, 
        width: 35, 
        borderRadius: 25,
    },
    likedSongIconBadge: {
        backgroundColor: themeTextColor.IconGreen(1),
        height: 23,
        width: 23,
        borderRadius: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        bottom: 18,
        left: 13,
        borderWidth: 2,
        borderColor: '#121212'

    },
    likedSongArtistDetailsContainer: {
        // backgroundColor: 'lightgreen',
        flex: 1,
        display: 'flex',
        display: 'flex',
        justifyContent: 'center',
    },
    likedSongTitleContainer: {
        // backgroundColor: 'orange',
        justifyContent: 'center',
    },
    likedSongTitle: {
        fontSize: 18,
        fontFamily: themeFonts.circularBook,
    },
    likedSongSongCountandArtistNameContainer: {
        // backgroundColor: 'blue',
        justifyContent: 'flex-start',
    },
    likedSongSongCountandArtistName: {
        fontSize: 15,
        fontWeight: '400',
        position: 'relative',
        right: 4,
    }
})

export default LikedSongs