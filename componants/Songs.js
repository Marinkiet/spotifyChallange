import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { themeFonts, themeTextColor } from '../theme';
import Feather from 'react-native-vector-icons/Feather'

const Songs = () => {
    const [song, setSong] = useState([
        {
            songName: "I'm Fine - IMANU Remix",
            viewCount: '823,428',
            imageUrl: (require("../assets/images/image2.jpg")),
            key: "1"
        },
        {
            songName: "I'm Fine",
            viewCount: '123,456',
            imageUrl: (require("../assets/images/image2.jpg")),
            key: "2"
        },

    ])

    return (
        <View style={styles.songListContainer}>
            <View style={styles.songListTitleContainer}>
                <Text style={[styles.themeTextPrimary, styles.songListTitle]}>Okudumile</Text>
            </View>

            <FlatList
                data={song}
                //destrucuture the items
                style={styles.songListSongsContainer}
                renderItem={({ item }) => (
                    //must have identifire named "key" or use key extractor option as flatlist auto finds "key"
                    <View style={styles.songListSongContainer}>
                        <View style={styles.songListNumberAndAlbum}>
                            <View style={styles.songListNumberContainer}>
                                <Text style={[styles.themeTextPrimary, styles.songListNumber]}>{item.key}</Text>
                            </View>
                            <View style={[styles.songListAlbumContainer]}>
                                <Image
                                    style={styles.songListAlbumImage}
                                    source={item.imageUrl}
                                />
                            </View>

                        </View>
                        <View style={styles.songListNumberSongNameAndViewCountContainer}>

                            <View style={styles.songListNumberSongNameContainer}>
                                <Text style={[styles.themeTextPrimary, styles.songListNumberSongName]}>{item.songName}</Text>
                            </View>

                            <View style={styles.songListNumberSongViewCountContainer}>
                                <Text style={[styles.themeTextSecondary, styles.songListNumberSongViewCount]}>{item.viewCount}</Text>
                            </View>

                        </View>
                        <View style={styles.songListMoreIcon}>
                            <TouchableOpacity>
                                <Feather
                                    name="more-horizontal" size={20} color={themeTextColor.secondary(1)}></Feather>
                            </TouchableOpacity>

                        </View>
                    </View>
                )} />
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
        fontSize: 16,
        fontFamily: themeFonts.circularBook,
    },
    songListTitleContainer: {
        // backgroundColor: 'white',
        paddingLeft: '5%',
        position: 'relative',
        top: '8%',
    },
    songListTitle: {
        fontSize: 19,
        fontFamily: themeFonts.circularBold,
        fontWeight: '700',
    },
    songListContainer: {
        // backgroundColor: 'pink',
        flex: 1,
    },
    songListSongsContainer: {
        // backgroundColor: 'lightgreen',
        flex: 1,
        marginLeft: '2%',
        position: 'relative',
        top: '16%',
    },
    songListSongContainer: {
        // backgroundColor: 'lightblue',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '-2%'

    },
    songListNumberAndAlbum: {
        // backgroundColor: 'lightgray',
        display: 'flex',
        flexDirection: 'row',
        width: '30%'
    },
    songListAlbumImage: {
        width: 50,
        height: 50,
    },
    songListNumberSongNameAndViewCountContainer: {
        // backgroundColor: 'yellow',
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        marginLeft: -16
    },
    songListNumberSongName: {
        fontSize: 17,
        fontWeight: '500',
    },
    songListNumberSongNameContainer: {
        // backgroundColor: 'blue',
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end'
    },
    songListNumberSongViewCountContainer: {
        // backgroundColor: 'white',
        flex: 1,
        display: 'flex',
    },
    songListNumberSongViewCount: {
        fontSize: 15,
        fontWeight: '400'
    },
    songListNumberContainer: {
        // backgroundColor: 'lightblue',
        width: '30%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    songListNumber: {
        fontSize: 16
    },
    songListAlbumContainer: {
        // backgroundColor: 'orange',
        // width: '35%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    songListMoreIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: '3%'
    }
})

export default Songs