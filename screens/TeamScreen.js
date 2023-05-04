import React,{Component0} from 'react';
import {Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import AppHeader from '../components/AppHeader';

export default class TeamScreen extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
      

      <Text style = {{fontSize : 30,margin :10 }}>Your Vote has been marked successfully!!!</Text>
       <Text>  </Text>
       <Text style = {{fontSize : 30,margin:10 }}>Thanks for Voting here,the results will be out very soon..</Text>
         <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={{ fontSize:20, color:"white",fontWeight:'bold'}}>Back</Text>
        </TouchableOpacity>

      </View>
      
    )
  }
}

const styles = StyleSheet.create({

  container:{ 
     alignItems: 'center',
     justifyContent: 'center',
     marginTop: 100 
    },

    buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"black",
    margin: 30,
    width: 200,
    height: 50,
  }
   
})

