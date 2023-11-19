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
      <StatusBar barStyle="light-content" hidden={false} backgroundColor="#00BCD4" translucent={true} />
      {/* Header */}
      <SeshaHeader/>
      {/* Body */}
      <View style={styles.bodyContainer}>
        <View style={styles.nextContainer}>
          {/* Abalaleli Benyanaga abangu Linear grdient secion */}
         <AbalaleliBeyaga/>
          {/* Liked Songs Section */}
          <LikedSongs/>
        </View>    
        <Songs/>
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
    fontSize: 16,
    fontFamily: themeFonts.circularBook,
    // fontWeight:'500'
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
