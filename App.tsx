import { View, Text, SafeAreaView, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'

//Icons
// import Entypo from 'react-native-vector-icons/Entypo'
const App = () => {
  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <ImageBackground
          source={require('../spotifyclone//assets/images/highklassified.jpg')}
          style={{ flex: 1, height: '210%', width: '100%' }}
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

        </View>
        <View style={styles.songListContainer}>

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
    justifyContent:'space-between',
    

  },
  backIconContainer: {
    backgroundColor: 'pink',
    position:'absolute',
    top:'10%',
    left:'5%',
    height:40,
    width:40,
    borderRadius:20,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  headerBackIcon:{

  },
  headerTextContainer: {
    display:'flex',
    alignItems:'center',
    // backgroundColor: 'magenta',

  },
  headerText:{
    fontSize:60,
    color:'white'
  },
  bodyContainer: {
    backgroundColor: 'blue',
    flex: 1
  },
  nextContainer: {
    backgroundColor: 'dodgerblue',
    flex: 1
  },
  songListContainer: {
    backgroundColor: 'lightblue',
    flex: 1
  }
})
export default App
