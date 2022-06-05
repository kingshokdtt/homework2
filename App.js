import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <SafeAreaView>
      <View style={{marginTop:100}}>

      <StatusBar style="auto"/>

    <View style={{paddingLeft:30, borderWidth:3, marginStart:50,marginEnd:770}}>
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


      <View style={{paddingLeft:30, borderWidth:3,marginStart:50,marginEnd:560}}>
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
    
    width:100,
    height:320,
    backgroundColor:'aliceblue',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',

  },


  boxContainer2:{
    
    width:300,
    height:130,
    backgroundColor:'aliceblue',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',

  },

  boxStyle: {
    width:100,
    height:100,
    justifyContent:'center',
    alignItems:'center'
  },



});


