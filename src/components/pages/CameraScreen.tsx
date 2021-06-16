import {Text, StyleSheet, View, TouchableOpacity} from "react-native"
import {StackNavigationProp} from "@react-navigation/stack";
import styled from "styled-components/native";
import React from "react";
import {RNCamera} from "react-native-camera";

interface IProps {
    navigation: StackNavigationProp<any>
}

export const CameraScreen = (props: IProps) => {
    const takePicture = async () => {
        const options = {quality: 0.5, base64: true};
        const data = await this.camera.takePictureAsync(options);
        console.log(data.uri)
    }

    return (
        <RootView>
            <RNCamera
                ref={ref => this.camera = ref}
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
            />
            <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableOpacity onPress={takePicture} style={styles.capture}>
                    <Text style={{fontSize: 14}}> SNAP </Text>
                </TouchableOpacity>
            </View>
        </RootView>
    )
}


const RootView = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: black;
`

const styles = StyleSheet.create({
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
})