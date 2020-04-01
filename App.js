import React from 'react';
import { StyleSheet, Text, View,TextInput,Picker} from 'react-native';
import { Button } from 'react-native-elements';
import {Image} from 'react-native';

export default function App() {
  return (
     <View>
         <View style={styles.container}>
            <Button style={{alignItems:'flex-start'}}  title="Profile"/>
            <Text style={{color:'brown',fontFamily:'cursive',marginRight:4}}>Conductor Portal</Text>
         </View>
<View style={{backgroundColor:'#FFF8DC'}}>


          <View style={styles.picker}>
             <Picker>
                 <Picker.Item label="Next Destination" value="0"> </Picker.Item>
                 <Picker.Item label="Pimpri" value="10"></Picker.Item>
                 <Picker.Item label="Chinchwad" value="20"></Picker.Item>
                 <Picker.Item label="Nigdi" value="30"></Picker.Item>

            </Picker>

         </View>

         <View style={styles.passengers}>
            <Text style={styles.text}>Passengers on board</Text>
            <TextInput style={styles.passengers1} />
         </View>

         <View style={styles.pass}>
             <Text style={styles.text}>  Pass holders </Text>
             <Text style={styles.text}>People with expiry ticket</Text>
         </View>

         <View style={styles.pass1}>
            <TextInput style={styles.passengers3}/>
            <TextInput style={styles.passengers3}/>
         </View>

         <View style={styles.collection}>
           <Text style={styles.text}>Money Collected</Text>
           <TextInput style={styles.passengers1} placeholder='Rs'/>
         </View>


   <Button style={styles.button}
      title="Scan QR"
    />
</View>
      <View  style={{paddingBottom:50, paddingTop:50,backgroundColor:'#DEB887'}}>


      </View>

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DEB887',
    flexDirection:'row',
    justifyContent: 'space-between',
    paddingBottom:20,
  },
  picker:{
    paddingTop:50,
    paddingBottom:30,
    paddingLeft:2,
    alignItems:'flex-start',
    },
passengers:{

  alignItems:'flex-end',

},

passengers1:{
  borderWidth:1,
  borderColor:'#777',
  width:90,
  marginRight:20,
  padding:2,
  borderRadius:10,
},
passengers2:{
  borderWidth:1,
  borderColor:'#777',
  //border:10,
  width:100,
  margin:15,
  paddingRight:50,
  paddingLeft:50,
  //paddingTop:0,
  //paddingBottom:0,
},
passengers3:{
  borderWidth:1,
  borderColor:'#777',
  width:70,
  margin:7,
  borderRadius:10,
  marginLeft:18,
},

pass:{
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-between',
  marginTop:25,
},
text:{
  fontSize:14,
  fontFamily:'cursive',
  fontStyle:'italic',
  fontWeight:'bolder',
  color:'brown',
  margin:8,
},
pass1:{
  flexDirection:'row',
  justifyContent:'space-between',
},

collection:{

   alignItems:'flex-start',
   paddingLeft:14,
},

button:{

   //alignItems:'flex-end',
   //paddingRight:30,
   paddingBottom:0,
   paddingTop:110,
   //marginBottom:40,

},

});
