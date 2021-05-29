





import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import About from '../screens/About';

const Stack = createStackNavigator();

const HeaderOptions = {
    headerStyle: {backgroundColor: '#a30000'}
}

const AboutStack = ({navigation}) => {
    return (
        <Stack.Navigator screenOptions={HeaderOptions}>
            <Stack.Screen name="About" component={About} options={{ title: 'About', headerLeft: ()  => (
                <Icon.Button name="menu" size={40} color="black" backgroundColor="#fffff" onPress={() => navigation.openDrawer()}>
                </Icon.Button> )}} />
        </Stack.Navigator>
    );
}

export default AboutStack;

