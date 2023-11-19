import { View, Text,ImageBackground, StyleSheet} from 'react-native'
import React from 'react'
import { themeFonts } from '../theme'
import { themeTextColor } from '../theme'
import Entypo from 'react-native-vector-icons/Entypo'

const SeshaHeader = () => {
  return (
    <View style={styles.headerContainer}>
    <ImageBackground
      source={require('../assets/images/highklassified.jpg')}
      style={{ flex: 1, height: '220%', width: '100%' }}
    >
    </ImageBackground>

    <View style={styles.backIconContainer}>
      <Entypo
        style={styles.headerBackIcon}
        name="chevron-thin-left"
        size={18}
        color="#fff"></Entypo>
    </View>
    <View style={styles.headerTextContainer}>
      <Text style={styles.headerText}>High Klassified</Text>
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

    },
    headerContainer: {
        // backgroundColor: 'orange',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    
      },
      backIconContainer: {
        backgroundColor: '#404040',
        position: 'absolute',
        top: '10%',
        left: '5%',
        height: 37,
        width: 37,
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.4,
        borderColor: 'black',
        borderWidth: 1
      },
      headerBackIcon: {
        padding: 0,
        margin: 0
      },
      headerTextContainer: {
        display: 'flex',
        alignItems: 'center'
    
      },
      headerText: {
        fontSize:55,
        color: 'white',
        fontWeight: '800',
        fontFamily: themeFonts.circularBold,
        letterSpacing: -3,    
      },
    })
export default SeshaHeader