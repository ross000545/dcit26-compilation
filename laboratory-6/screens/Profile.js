




import React from "react";

import {
    Button,
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";

const Profile = ( {route} ) => {

    const data = route.params;

    return (

        //<ScrollView>

        <View style={styles.container}>

            <View style={styles.textCenter}>
            <Image style={styles.imageStyle} source={{uri: data.picture.large}}></Image>
            </View>
            

            <Text style={styles.textFormat}> {data.name.title} {data.name.first} {data.name.last}</Text>

            <Text style={styles.textFormat1}> ABOUT </Text>

            <Text> Age: {data.dob.age} </Text>
            <Text> Birthday: {data.dob.date} </Text>
            <Text> Gender: {data.gender} </Text>
            <Text style={styles.textFormat2}> Address: {data.location.street.number} {data.location.street.name}, {data.location.city}, {data.location.state}, {data.location.country}</Text>
            

            <Text style={styles.textFormat1}> CONTACT </Text>
            <Text> Email: {data.email} </Text>
            <Text style={styles.textFormat2}> Phone: {data.phone} </Text>

            <Text style={styles.textFormat1}> OTHER </Text>
            <Text style={styles.textFormat2}> Date Registered: {data.registered.date} </Text>


        </View>
        //</ScrollView>
            
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

        imageStyle:
        {
            alignItems: 'center',
            resizeMode: "cover",
            height: 275,
            width: 275
        },
        
        textCenter:
        {
            flex:1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        
        textFormat: 
        { 
            fontWeight: "bold",
            fontSize: 25,
            textAlign: "center",
            marginBottom: 50,
            justifyContent: "center"
        },

        textFormat1:
        {
            color: "#a9a9a9",
            fontSize: 20,
        },

        textFormat2:
        {
            marginBottom: 50
        }
    }
)
