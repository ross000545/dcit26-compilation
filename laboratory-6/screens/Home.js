




import React, {useState, useEffect} from "react";

import {
    ActivityIndicator,
    Button,
    ImageBackground,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

import Profile from '../screens/Profile';



const Home = ({navigation}) => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    


    function fetchRandomData(){
        setLoading(true);
        fetch('https://randomuser.me/api')
        .then((response) => response.json())
        .then((json) => {
            setData(json.results[0]);
            console.log(json.results[0]);
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }

    useEffect(() => {
        fetchRandomData();
    }, []);

    return (
      
        <View style={styles.container}>

                <View style={styles.textCenter}>
                    { isLoading ? <ActivityIndicator size="large" color ="#f33ffc" /> : (
                    <TouchableOpacity onPress={() => navigation.navigate('Profile', data)}>
                    <Image style={styles.imageStyle} source={{uri: data.picture.large}}></Image>
                    </TouchableOpacity>
                    )}
                </View>


                <View style={styles.textCenter}>
                    { isLoading ? true : (
                    <Text style={styles.textFormat}>{data.name.first} {data.name.last}</Text>
                    )}
                </View>

                <View style={styles.textCenter}>
                    <View style={styles.buttonStyle}>
                    { isLoading ? true : (
                    <Button color="#a30000" title="Random User" onPress={() => {fetchRandomData();}} />
                    )} 
                    </View>
                </View>

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

        buttonStyle:
        {
            marginBottom: 200
        },

        imageStyle:
        {
            width: 225,
            height: 225,
            resizeMode: "cover",
            marginTop: 200
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
        }
        
    }
)