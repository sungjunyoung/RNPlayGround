import {Button, Text} from "react-native";
import React from "react";
import styled from "styled-components/native";
import {StackNavigationProp} from "@react-navigation/stack";

interface IProps {
    navigation: StackNavigationProp<any>
}

export const HomeScreen = (props: IProps) => {
    const {navigation} = props

    const navigateTo = (page: string): void => {
        navigation.navigate(page)
    }

    return (
        <RootView>
            <Text>RNPlayground</Text>
            <Button title={"Details"}
                    onPress={() => navigateTo("Details")}/>
            <Button title={"Camera"}
                    onPress={() => navigateTo("Camera")}/>
        </RootView>
    )
}

const RootView = styled.View`
  flex: 1;
  background-color: #ecf0f1;
  align-items: center;
  justify-content: center
`