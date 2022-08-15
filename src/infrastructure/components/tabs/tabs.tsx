import React from "react";
import { Image, Animated } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { styles } from './styles';
import PlanetsContainer from "../../../presentation/containers/planets/planets-container";
import HomeContainer from "../../../presentation/containers/home";
import AboutContainer from "../../../presentation/containers/about";

const Tabs = () => {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Juego' screenOptions={{ headerShown: false , tabBarShowLabel: false, tabBarStyle: styles.container }} >
                <Tab.Screen name="Planetas" component={PlanetsContainer} options={{
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <Image
                                style={focused ? { width: size * 2.3, height: size * 2.3 } : { width: size * 1.5, height: size * 1.5 }}
                                source={require('../../../application/images/icons/space.png')}
                            />
                        );
                    },
                }} />
                <Tab.Screen name="Juego" component={HomeContainer} options={{
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <Image
                            style={focused ? { width: size * 2.5, height: size * 2.5 } : { width: size * 1.5, height: size * 1.5 }}
                                source={require('../../../application/images/icons/game.png')}
                            />
                        );
                    },
                }} />
                <Tab.Screen name="Acerca de" component={AboutContainer} options={{
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <Image
                                style={focused ? { width: size * 1.7, height: size * 1.7 } : { width: size, height: size }}
                                source={require('../../../application/images/icons/info.png')}
                            />
                        );
                    },
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Tabs;