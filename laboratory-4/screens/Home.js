





import React from "react";
import {
    View,
    Button,
    ImageBackground,
    StyleSheet
} from "react-native";

import Profile from '../screens/Profile';

const Home = ({navigation}) => {

    return (
      
        <View style={styles.container}>
            
            <ImageBackground source={require("../img/pennywise.gif")} style={styles.background}>

                <View style={styles.profileButton}>

                    <Button color="#a30000" title="Pennywise's Profile" onPress={() => navigation.navigate('Profile')}/>

                </View>

            </ImageBackground>

        </View>
    );
}

export default Home;

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
        }
        
    }
)