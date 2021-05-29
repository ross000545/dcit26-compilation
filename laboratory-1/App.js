// BSCS 3-1
// MAGPANTAY, RENZ JOHN F
// SARABUSAB, ROSS
// AURE, PRINCE
// MORANTE, JOHN OLIVER

import * as React from 'react';
import { Text, View, Image , StyleSheet } from 'react-native';
  
export default function App(){
  return (
      <View style={styles.container}>
        <Text style={styles.paragraph}> Hello World! </Text>
      </View>
    );
   }
  

  


const styles = StyleSheet.create({
  container: {

    justifyContent: 'center',
    marginTop: 250,
    padding: 25,
    margin: 70,
    

  },

  paragraph: {

    margin: 24,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",

  },
});
