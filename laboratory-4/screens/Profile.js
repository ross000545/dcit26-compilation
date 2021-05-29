





import React from "react";
import {
    View,
    Button,
    StyleSheet,
    Text,
    ImageBackground
} from "react-native";

import About from '../screens/About';

const Profile = ({navigation}) => {

    return (

        <View style={styles.container}>

            <ImageBackground source={require("../img/pennywisee.gif")} style={styles.background}>

                <View style={styles.containerCenter}>

                        <Text style={styles.textStyle1}> PENNYWISE </Text>

                        <Text> </Text>

                        <Text style={styles.textStyle2}> It is a shape-shifting creature known as a Glamour who is billions of years old. Although It lived on planet Earth for many years, It originated in a void/dimension outside the regions of space known as the Macroverse. Since Its true identity is unclear, due to its shape-shifting abilities and being from another universe, Its real name and species are called Deadlights, but few know this, which is why it is referred to as IT. The form of a female spider seems to be Its true physical form on Earth (or at least that is the closest thing the human mind can comprehend), living deep below the fictional town of Derry, Maine. It can morph into any other human animal, nonhuman animal or object (including combinations thereof). This ability is useful for, A) appearing as the target's loved ones or friends to manipulate them or lure them into a trap or B) appearing as the target's worst psychological fear. However, Its favorite and most common form is that of a circus performer named "Pennywise the Dancing Clown," as most small children love a clown and generally, it seems that the people in Derry happily accepted the presence of a stray circus performer. At the same time, many people are afraid of clowns, making them an easy fear to exploit. </Text>
                </View>

                <View style={styles.profileButton}>
                      <Button color="#a30000" title="More Information" onPress={() => navigation.navigate('About')}/>
                </View>

            </ImageBackground>

        </View>

    );
    
}

export default Profile;

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
            color:'#a30000',
            marginTop: 5,
            fontWeight:'bold',
            fontSize:40
            
        },

        textStyle2:
        {
            justifyContent: "center",
            color:'white',
            //
            fontWeight:'bold',
            fontSize:15
        },

        containerCenter:
        {
            textAlign:'center',
            alignItems:'center'
        }


    }
)