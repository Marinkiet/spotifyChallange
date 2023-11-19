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
      {/*  ----------Status Bar
        What does it do?: This Component is to control the app's status bar. 
        The status bar is the zone that displays the current time, 
        Wi-Fi and cellular network information, battery level and/or other status icons.
        Purpose: Showing the status bar to provide users with quick and easy access 
        to important information about the current state of their application or device
        Why is it here? making it easier to see and read the text as the 
        contrast between the text and the status bar background is higher.
      */}
      <StatusBar barStyle="light-content" hidden={false} backgroundColor="#00BCD4" translucent={true} />

      {/* ----------Header Component
        What does it do?: Display the artist image, name and back navigation icon.
        Purpose: The background image and Artist name is to easily identify and connect 
        with the artist they are listening to.
        Why is it here? This is to foster a sense of familiarity and connection with the artist
      */}
      <SeshaHeader />

      {/* ----------Body Container 
        What does it do?: Display details of app sections as  obalandelayo/next songs 
        and users liked songs list and popular list of songs
        Purpose: Make it easier for users to scan the page and find the information they are looking for
        Why is it here? This groups together fetures of the app. 
      */}
      <View style={styles.bodyContainer}>

        {/* ----------Next Container 
        What does it do?: Display details of app sections = obalandelayo/next songs 
        and users liked songs list only.
        Purpose: Make it easier for users to scan the page and find the information they are looking for
        Why is it here? This groups obalandelayo/next songs 
        and users liked songs list. 
      */}

        <View style={styles.nextContainer}>
          {/* ----------Montly listners
       What does it do?: Displays the monthly listers count, play button and shuffle icon, next button and
       more  options horizontal icon in a lienaer gradient background
       Purpose: Group together button actions to access more feature options
       Why is it here? For users to see the listener count which an generate excitement
      and anticipation among users, making them more likely to listen to the featured artist or song */}
          <AbalaleliBeyaga />

          {/* ----------Liked Next Songs Section Component
        What does it do?: Displays songs collection of the artist songs the user liked.
        Purpose: eliminates the need to search through their entire music library or playlists,  
        Why is it here? Saving time and effort to find these songs
      */}
          <LikedSongs />
        </View>
        {/* ----------Popular Section Component
        What does it do?: Display the popular song heading "Okudumile" and flatlist of the songs
        Purpose: To serve as a gateway to new music discovery. By exposing users to popular songs, 
        the app can encourage them to explore similar artists or genres, broadening their musical horizons and 
        potentially leading to new musical favorites.
       */}
        <Songs />

      </View>
    </View>
  )
}

// Note: Set commented out background colors to viualise sectioning of each View
// and how it was flexed
// Input [color: themeTextColor.primary(1)]: This theme text color takes number between 0 and 1 which specifies the opacity.

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
