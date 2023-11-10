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

                <View style={styles.upNextDetailsButtonContainer}>
                  <Text>Button</Text>
                </View>

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
          <View style={styles.upNextSongContainer}>

          </View>

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
    marginHorizontal:'2%'
  },
  upNextDetails: {
    backgroundColor: 'orange',
    flex: 1,
  },
  upNextDetailsSongCount:{
    flex:1,
    backgroundColor:'pink',
    display:'flex',
    justifyContent:'center'
  },
  upNextDetailsButtonAndIconContainer:{
    flex:1,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
   
  },
  upNextDetailsButtonContainer:{
    flex:1,
    backgroundColor:'purple',
    height:'90%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:7,
    borderColor:'white',
    borderWidth:2,
  },
  upNextDetailsIconContainer:{
    flex:1,
    backgroundColor:'yellow',
    height:'100%',
    display:'flex',
    justifyContent:'center',
  },
  upNextIconsContainer: {
    backgroundColor: 'lightblue',
    width: '30%',
    height: '100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  upNextPlayIconContainer:{
    backgroundColor:'green',
    height:70,
    width:70,
    borderRadius:35,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  upNextShuffleIconContainer:{
    position:'absolute',
    top:'65%',
    left:'60%',
    backgroundColor:'white',
    height:23,
    width:23,
    borderRadius:15,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  upNextSongContainer: {
    backgroundColor: 'tan',
    flex: 1,
    marginHorizontal:'2%'
  },
  songListContainer: {
    backgroundColor: 'orange',
    flex: 1,
    marginHorizontal:'2%'
  }
})
export default App
