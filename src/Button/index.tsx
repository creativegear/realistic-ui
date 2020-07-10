import { ActivityIndicator, TextStyle, ViewStyle } from 'react-native';

import React, { useState } from 'react';
import styled from 'styled-components/native';
import Ripple from 'react-native-material-ripple';
import ColorUtil from '../util/ColorUtil';

const StyledButton = styled.View`
  align-self: center;
  width: 320px;
  height: 52px;
  border-color: blue;
  background-color: #eeeeee;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  cursor: pointer;
`;

const StyledDisabled = styled(StyledButton)`
  background-color: #cccccc;
  border-color: rgb(200, 200, 200);
`;

const StyledText = styled.Text`
  font-size: 16px;
  color: #069ccd;
`;

const StyledDisabledText = styled(StyledText)`
  color: #969696;
`;

interface Props {
  testID?: string;
  text?: string;
  onPress?: (setErrorMessage?: (message: string) => void) => Promise<any>;
  isDisabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabledStyle?: ViewStyle;
  disabledTextStyle?: TextStyle;
  rippleColor?: string;
  indicatorColor?: string;
  leftElement?: React.ReactElement;
  rightElement?: React.ReactElement;
}

function Button(props: Props): React.ReactElement {
  const {
    testID,
    text,
    isDisabled,
    style,
    textStyle,
    disabledStyle,
    disabledTextStyle,
    rippleColor,
    indicatorColor,
    leftElement,
    rightElement,
  } = props;

  const [loading, setLoading] = useState(false);

  const onPress = async (e: any) => {
    if (props.onPress) {
      setLoading(true);
      await props.onPress((errorMessage) => {
        //TODO
        console.log(errorMessage);
      });
      setLoading(false);
    }
  };

  if (isDisabled) {
    return (
      //@ts-ignore
      <StyledDisabled testID={testID} style={[{ cursor: 'not-allowed' }, disabledStyle]}>
        <StyledDisabledText style={[textStyle, disabledTextStyle]}>{text}</StyledDisabledText>
      </StyledDisabled>
    );
  }
  if (loading) {
    return (
      //@ts-ignore
      <StyledButton testID={testID} style={[{ cursor: 'not-allowed' }, style]}>
        <ActivityIndicator size="small" color={indicatorColor} />
      </StyledButton>
    );
  }
  return (
    <Ripple
      testID={testID}
      rippleColor={ColorUtil.lignten(rippleColor || '#d85050', 20)}
      onPress={onPress}
      style={[{ cursor: 'pointer' }, style]}>
      <StyledButton>
        {leftElement || null}
        <StyledText style={textStyle}>{text}</StyledText>
        {rightElement || null}
      </StyledButton>
    </Ripple>
  );
}

export default Button;
