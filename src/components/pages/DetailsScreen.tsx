import { Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

export const DetailsScreen = () => {
  return (
    <RootView>
      <Text>Details</Text>
    </RootView>
  );
};

const RootView = styled.View`
  flex: 1;
  background-color: #ecf0f1;
  align-items: center;
  justify-content: center;
`;
