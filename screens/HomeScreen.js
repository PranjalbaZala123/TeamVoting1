import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

import AppHeader from '../components/AppHeader';
import firebase from '../config';

export default class HomeScreen extends Component {

  gotoTeamScreen=(TeamScreenColor)=>{
    this.props.navigation.navigate("TeamScreen",{color:TeamScreenColor});
  }

  teamA(){
   firebase.ref('/').update({
     'teamA':1
   })
 }

 teamB(){
   console.log(firebase);
   firebase.ref('/').update({
     'teamB':2
   })
 }

  render() {
    return (
      <View>
        <AppHeader />
        <View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity>
              <Image
                style={{ width: 300, height: 220, marginLeft: 5 }}
                source={require('../assets/TeamImage.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonsContainer}>
            <Text style={{textAlign: 'center',fontSize:25,fontWeight:'bold'}}>Vote Here</Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.gotoTeamScreen('yellow')}>
              <Text style={{ fontSize:20,color:'black'}}>Team A</Text>
            </TouchableOpacity>

            <TouchableOpacity
                 style={styles.buttons}
              onPress={() => this.gotoTeamScreen('blue')}>
              <Text style={{ fontSize:20,color:'black'}}>Team B</Text>
            </TouchableOpacity>

          </View>
          <View style={styles.ratingContainer}>
            <Text style={{  fontSize:22,textAlign: 'center', margin:5 }}>Rate us</Text>
            <TouchableOpacity>
            <Image
                style={{ width: 50, height: 50, marginRight: 100, }}
                source={require('../assets/thumbs-up-hand-symbol.png')}
              />
            </TouchableOpacity>
               <TouchableOpacity>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  marginTop: -35,
                  marginLeft: 100,
                }}
                source={require('../assets/thumbs-down-silhouette.png')}
              />
            </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 buttonsContainer: {
   alignSelf: 'center',
  marginTop: 30,
    
 },
  buttons: {
    backgroundColor:"coral",
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 15,
    margin:10,
    width: 150,
    height: 50,
  },
  ratingContainer: {
   alignSelf: 'center',
   marginTop: -0,
    
  },
});
