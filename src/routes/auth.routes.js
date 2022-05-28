import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../pages/Home";

const stackRoutes = createNativeStackNavigator();

const MainPages = () => (
    <stackRoutes.Navigator  >
        <stackRoutes.Screen name="Home" component={Home} />
    </stackRoutes.Navigator>
)

export { MainPages };
