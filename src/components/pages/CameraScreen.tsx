import styled from "styled-components/native";
import React, { useRef } from "react";
import { RNCamera } from "react-native-camera";


export const CameraScreen = () => {
  const camera = useRef<RNCamera>(null);

  const takePicture = async () => {
    if (camera.current) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.current.takePictureAsync(options);
      console.log(data.uri);
    }
  };

  return (
    <RootView>
      <Camera
        ref={camera}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
      >
        <Snap onPress={takePicture} />
      </Camera>
    </RootView>
  );
};

const RootView = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: black;
`;

const Camera = styled(RNCamera)`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

const Snap = styled.TouchableOpacity`
  flex: 0;
  border: 3px solid #fff;
  border-radius: 5px;
  padding: 15px;
  align-self: center;
  margin-bottom: 60px;
  width: 240px;
`;

