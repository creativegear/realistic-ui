import React, { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components/native';
import Ripple from 'react-native-material-ripple';
import { ActivityIndicator, TextStyle, ViewStyle } from 'react-native';
import ColorUtil from '../../../src/util/ColorUtil';
import { IStyleTheme, IThemePart } from '../../../src/theme';

const StyledSafeAreaView = styled.SafeAreaView`
  display: flex;
`;

interface Props {
  testID?: string;
  style?: ViewStyle;
}

const Container: React.FC<Props> = (props) => {
  return <StyledSafeAreaView style={props.style} />;
};

export default Container;
