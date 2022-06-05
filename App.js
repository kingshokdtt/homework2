import React from "react"
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <View style={{marginTop:60}}>

      <StatusBar style="auto"/>

    <View style={{paddingLeft:20, borderWidth:3, marginStart:50,marginEnd:180}}>
          <Text>Column</Text>
        

      <View style={styles.boxContainer1}>
        
        <View style={[styles.boxStyle, {borderWidth:3, backgroundColor:'aquamarine'}]}>
            <Text>Child</Text>
        </View>

        <View style={[styles.boxStyle, {borderWidth:3,backgroundColor:'gray'}]}>
            <Text>Child</Text>
        </View>

        <View style={[styles.boxStyle, {borderWidth:3,backgroundColor:'cyan'}]}>
            <Text>Child</Text>
          </View>
        </View>
    </View>

      <View>
        <Text> </Text>
      </View>


      <View style={{paddingLeft:30, borderWidth:3,marginStart:50,marginEnd:15}}>
        <Text>Row</Text>
      

      <View style={styles.boxContainer2}>
        
        <View style={[styles.boxStyle, {borderWidth:3,backgroundColor:'aquamarine'}]}>
            <Text>Child</Text>
        </View>

        <View style={[styles.boxStyle, {borderWidth:3,backgroundColor:'gray'}]}>
            <Text>Child</Text>
        </View>

        <View style={[styles.boxStyle, {borderWidth:3,backgroundColor:'cyan'}]}>
            <Text>Child</Text>
          </View>
        </View>
      </View>


      </View>

      
   
    </SafeAreaView>
  );
}



const styles=StyleSheet.create({

  boxContainer1:{
    
    width:80,
    height:300,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',

  },


  boxContainer2:{
    
    width:230,
    height:130,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',

  },

  boxStyle: {
    width:80,
    height:80,
    justifyContent:'center',
    alignItems:'center'
  },



});


