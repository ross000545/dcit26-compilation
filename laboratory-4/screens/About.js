





import React from "react";
import {
    View,
    Button,
    StyleSheet,
    ImageBackground,
    Text
} from "react-native";

const About = ({navigation}) => {
  
    return (

        <View style={styles.container}>

            <ImageBackground source={require("../img/pennywiseee.gif")} style={styles.background}>

                <View style={styles.containerCenter}>

                        <Text style={styles.textStyle1}> No one knows the true form of IT since it first existed in an inter-dimensional realm referred to as "deadlights". Bill Denbrough comes close to see the "deadlights", but defeats IT before this happens. The true form of the "deadlights" exists outside the physical realm. Any living being that sees the "deadlights" goes insane almost instantly. Bill comes dangerously close to seeing the deadlights and the shape behind the shape for a brief moment. He described IT as an endless, crawling hairy creature made of orange light. </Text>
                </View>

                <View style={styles.profileButton}>
                      <Button color="#a30000" title="Back" onPress={() => navigation.goBack()}/>
                </View>

            </ImageBackground>

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

        background:
        {
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center"

        },

        profileButton:
        {
            flex:1,
            alignItems: 'center',
            justifyContent: 'center'
        },

        textStyle1:
        {
            justifyContent: "center",
            color:'#FF0000',
            marginTop: 5,
            fontWeight:'bold',
            fontSize:25
            
        },

        containerCenter:
        {
            textAlign:'center',
            alignItems:'center'
        }
    }
)