import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./components/pages/HomeScreen";
import { DetailsScreen } from "./components/pages/DetailsScreen";
import { CameraScreen } from "./components/pages/CameraScreen";

const Stack = createStackNavigator();

export const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"Home"} component={HomeScreen} />
        <Stack.Screen name={"Details"} component={DetailsScreen} />
        <Stack.Screen name={"Camera"} component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
