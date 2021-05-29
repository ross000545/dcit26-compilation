





import React from "react";

import {
    View,
    Button,
    StyleSheet,
    ImageBackground,
    Text
} from "react-native";

import {
    Drawer,
    Avatar,
    Paragraph,
    Title,
    Caption, 
} from 'react-native-paper';


const About = ({navigation}) => {

  return (

          <View style={styles.container}>

            <Text style={styles.textFormat}> GROUP MEMBERS: </Text>
            <Text> </Text>
            <Text style={styles.textFormat1}> ONOFRE, John Oliver M. </Text>
            <Text style={styles.textFormat1}> MAGPANTAY, Renz John </Text>
            <Text style={styles.textFormat1}> SARABUSAB, Ross M. </Text>
        </View>
  );
}

export default About;

const styles = StyleSheet.create (
    {

        container:
        {
            flex: 1,
            justifyContent: 'center'
        },

        textFormat1:
        {
            textAlign: "center",
            fontSize: 25,
        },
        
        textFormat: 
        { 
            fontWeight: "bold",
            fontSize: 25,
            textAlign: "center",
        }
        
    }
)