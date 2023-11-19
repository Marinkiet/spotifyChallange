import { View, Text, StyleSheet, FlatList, StatusBar, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

import { themeFonts, themeTextColor } from '../theme';

import SeshaHeader from '../componants/SeshaHeader';
import AbalaleliBeyaga from '../componants/AbalaleliBeyaga';
import LikedSongs from '../componants/LikedSongs';
import Songs from '../componants/Songs';

const Shesha = () => {
  return (
    <View style={styles.container}>
      {/* Used a light status bar to make it easier to see and read the text as the 
      contrast between the text and the status bar background is higher.*/}
      <StatusBar barStyle="light-content" hidden={false} backgroundColor="#00BCD4" translucent={true} />
      {/* Header Section with Album Art as background easily identify and connect 
      with the artist they are listening to, fostering a sense of familiarity and connection */}
      <SeshaHeader/>
      {/* Body Section with Details as the obalandelayo/next songs and users liked songs list
      to change horizonatal selection to the next song*/}
      <View style={styles.bodyContainer}>
      
        <View style={styles.nextContainer}>
      {/* Monthly listers count section for users to see the listener count which an generate excitement
      and anticipation among users, making them more likely to listen to the featured artist or song */}
         <AbalaleliBeyaga/>

      {/* Liked Next Songs Section with the users most recent favourite eliminates the 
      need to search through their entire music library or playlists, saving time and effort */}
          <LikedSongs/>
        </View>    
      {/* Popular song section to serve as a gateway to new music discovery. By exposing users to popular songs, 
      the app can encourage them to explore similar artists or genres, broadening their musical horizons and 
      potentially leading to new musical favorites. */}
        <Songs/>
      </View>
    </View>
  )
}

//Set commented out backgrounf colors to viualise sectioning of each View
// and how it was flexed
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
  container: {
    // backgroundColor: 'pink',
    flex: 1
  },
  
  bodyContainer: {
    backgroundColor: '#121212',
    flex: 1,
  },
  nextContainer: {
    // backgroundColor: 'dodgerblue',
    flex: 1,
  },
})

export default Shesha
