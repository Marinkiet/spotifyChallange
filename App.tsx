import { View, Text, StyleSheet, ImageBackground, FlatList,StatusBar, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'


const App = () => {
  const [song, setSong] = useState([
    {
      songName: "I'm fine - IMANU Remix",
      viewCount: '823,428',
      imageUrl: (require("../spotifyclone/assets/images/image2.jpg")),
      key: "1"
    },
    {
      songName: "I'm fine",
      viewCount: '823,428',
      imageUrl: (require("../spotifyclone/assets/images/image1.jpg")),
      key: "2"
    },
    {
      songName: "I'm fine",
      viewCount: '823,428',
      key: "3"
    },
    {
      songName: "I'm fine",
      viewCount: '823,428',
      key: "4"
    },
  ])
  return (
    <View style={styles.container}>
      <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>

      <View style={styles.headerContainer}>
        <ImageBackground
          source={require('../spotifyclone//assets/images/highklassified.jpg')}
          style={{ flex: 1, height: '200%', width: '100%' }}
        >
        </ImageBackground>
        <View style={styles.backIconContainer}>
          {/* <Entypo name="chevron-thin-left" size={20} color={'black'}></Entypo> */}
          <Text style={styles.headerBackIcon}>Icon</Text>

        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>High Klassfied</Text>
        </View>

      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.nextContainer}>
          <View style={styles.upNextContainer}>
            <View style={styles.upNextDetails}>

              <View style={styles.upNextDetailsSongCount}>
                <Text>Abalaleli benyanga anbangu-166,307</Text>
              </View>

              <View style={styles.upNextDetailsButtonAndIconContainer}>
                <TouchableOpacity style={styles.upNextDetailsButtonContainer}>
                  <View>
                    <Text>Button</Text>
                  </View>
                </TouchableOpacity>

                <View style={styles.upNextDetailsIconContainer}>
                  <Text>icon</Text>
                </View>

              </View>

            </View>
            <View style={styles.upNextIconsContainer}>
              <View style={styles.upNextPlayIconContainer}>
                <Text>icon</Text>
              </View>
              <View style={styles.upNextShuffleIconContainer}>
                <Text>icon</Text>
              </View>

            </View>
          </View>

          <View style={styles.likedSongsontainer}>
            <View style={styles.likedSongsAlbumArtContainer}>
              <View style={styles.likedSongAlbumArtImage}>
                <Text>icon</Text>
              </View>
              <View style={styles.likedSongIconBadge}>
                <Text>icon</Text>
              </View>
            </View>
            <View style={styles.likedSongArtistDetailsContainer}>
              <View style={styles.likedSongTitleContainer}>
                <Text>Liked Songs Title</Text>
              </View>
              <View style={styles.likedSongSongCountandArtistNameContainer}>
                <Text>5 liked - Songs</Text>
              </View>
            </View>
            <View style={styles.upNextNextIconContainer}>

              <Text>Icon</Text>
            </View>

          </View>

        </View>
        <View style={styles.songListContainer}>

          <View style={styles.songListTitleContainer}>
            <Text>SongListTitle</Text>
          </View>
          <View style={styles.songListSongsContainer}>
            <FlatList

              data={song}
              //destrucuture the item
              renderItem={({ item }) => (
                //must have key as flatlist finds it
                <View style={styles.songListSongContainer}>
                  <View style={styles.songListNumberAndAlbum}>
                    <View style={styles.songListNumberContainer}>
                      <Text>{item.key}</Text>
                    </View>
                    <View style={styles.songListAlbumContainer}>
                     <Image
                     style={styles.songListAlbumImage}
                     source={item.imageUrl}
                     />
                    </View>

                  </View>
                  <View style={styles.songListNumberSongNameAndViewCountContainer}>
                    <View style={styles.songListNumberSongNameContainer}>
                    <Text>{item.songName}</Text>
                    </View>
                    <View style={styles.songListNumberSongViewCountContainer}>
                      <Text>{item.viewCount}</Text>
                    </View>
                  </View>
                  <View style={styles.songListMoreIcon}>
                    <Text>Icon</Text>
                  </View>
                </View>

              )} />
          </View>



        </View>



      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 1
  },
  headerContainer: {
    // backgroundColor: 'orange',
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',

  },
  backIconContainer: {
    backgroundColor: 'pink',
    position: 'absolute',
    top: '10%',
    left: '5%',
    height: 40,
    width: 40,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerBackIcon: {

  },
  headerTextContainer: {
    display: 'flex',
    alignItems: 'center',
    // backgroundColor: 'magenta',

  },
  headerText: {
    fontSize: 60,
    color: 'white'
  },
  bodyContainer: {
    backgroundColor: 'blue',
    flex: 1,
  },
  nextContainer: {
    backgroundColor: 'dodgerblue',
    flex: 1,

  },
  upNextContainer: {
    backgroundColor: 'pink',
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: '2%'
  },
  upNextDetails: {
    backgroundColor: 'orange',
    flex: 1,
  },
  upNextDetailsSongCount: {
    flex: 1,
    backgroundColor: 'pink',
    display: 'flex',
    justifyContent: 'center'
  },
  upNextDetailsButtonAndIconContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

  },
  upNextDetailsButtonContainer: {
    flex: 1,
    backgroundColor: 'purple',
    height: '62%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    borderColor: 'white',
    borderWidth: 1.5,
  },
  upNextDetailsIconContainer: {
    flex: 1,
    backgroundColor: 'yellow',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  upNextIconsContainer: {
    backgroundColor: 'lightblue',
    width: '30%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  upNextPlayIconContainer: {
    backgroundColor: 'green',
    height: 70,
    width: 70,
    borderRadius: 35,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  upNextShuffleIconContainer: {
    position: 'absolute',
    top: '65%',
    left: '64%',
    backgroundColor: 'white',
    height: 23,
    width: 23,
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  likedSongsontainer: {
    backgroundColor: 'tan',
    flex: 1,
    marginHorizontal: '2%',
    display: 'flex',
    flexDirection: 'row'
  },
  likedSongsAlbumArtContainer: {
    backgroundColor: 'pink',
    width: '20%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  likedSongAlbumArtImage: {
    backgroundColor: 'white',
    height: 50,
    width: 50,
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'

  },
  likedSongIconBadge: {
    backgroundColor: 'pink',
    height: 30,
    width: 30,
    borderRadius: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    bottom: 25,
    left: 20,
    borderWidth: 2,
    borderColor: 'white'

  },
  likedSongArtistDetailsContainer: {
    backgroundColor: 'lightgreen',
    flex: 1,
    marginVertical: 30
  },
  likedSongTitleContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  likedSongSongCountandArtistNameContainer: {
    backgroundColor: 'blue',
    flex: 1,
  },
  upNextNextIconContainer: {
    backgroundColor: 'red',
    width: '15%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  songListContainer: {
    backgroundColor: 'orange',
    flex: 1,
    marginHorizontal: '2%'
  },
  songListTitleContainer: {
    backgroundColor: 'white',
    flex: 1
    // height: '20%',
    // width:'100%'
  },
  songListSongsContainer: {
    backgroundColor: 'lightgreen',
    flex: 4
  },
  songListSongContainer: {
    backgroundColor: 'lightblue',
    height: '70%',
    display: 'flex',
    flexDirection: 'row'
  },
  songListNumberAndAlbum: {
    backgroundColor: 'lightgray',
    width: '25%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row'
  },
  songListAlbumImage:{
    width:'100%',
    height:'100%'
  },
  songListNumberSongNameAndViewCountContainer: {
    backgroundColor: 'yellow',
    flex: 1,
  },
  songListNumberSongNameContainer: {
    backgroundColor: 'grey',
    flex: 1,
  },
  songListNumberSongViewCountContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  songListNumberContainer: {
    backgroundColor: 'lightblue',
    width: '30%',
    height: '100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  songListAlbumContainer: {
    // backgroundColor: 'orange',
    flex: 1,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  songListMoreIcon: {
    backgroundColor: 'red',
    width: '15%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

})

export default App

// <View style={styles.songListSongsContainer}>
// <View style={styles.songListSongContainer}>
//   <View style={styles.songListNumberAndAlbum}>
//     <View style={styles.songListNumberContainer}></View>
//     <View style={styles.songListAlbumContainer}></View>
//   </View>
//   <View style={styles.songListNumberSongNameAndViewCountContainer}>
//     <View style={styles.songListNumberSongNameContainer}></View>
//     <View style={styles.songListNumberSongViewCountContainer}></View>
//   </View>
//   <View style={styles.songListMoreIcon}>
//     <Text>Icon</Text>
//   </View>
// </View>
// </View>