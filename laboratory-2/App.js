// BSCS 3-1
// MAGPANTAY, RENZ JOHN 
// ONOFRE, JOHN OLIVER
// SARABUSAB, ROSS
// AURE, PRINCE DARWIN

import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Styles} from 'react-native';

export default function App() {
    const [text, settext] = useState();
    const [list, setlist] = useState([]);

  const listText = () =>{
    setlist(currentText =>[...currentText,text]);
    this.addText.clear();
  }

return (
  <View>

    <View style={styles.design}>
        <TextInput
        title="addText"
        style = {styles.bar}
        placeholder="Enter Item"
        onChangeText={(enteredtext) => settext(enteredtext)}
        ref={input =>{this.addText = input}} />
    
    <Button title="Add" onPress={listText} />
    </View>

    <View style={{flexDirection:'column'}}>
      {list.map((item) => <Text style={styles.container}>{item} </Text>)}
    </View>

  </View>
  );
}

const styles = StyleSheet.create({

  container:{
    padding:20, 
    backgroundColor: '#bababa',
    borderWidth:3,
    margin: 3,
    borderRadius:10,
    textAlign:'center',
  },

  bar:{
    width:200,
    borderWidth: 2,
    padding:10,
    borderColor:'black',
  },

  design:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:40,
    alignItems: 'center',
  },


});
