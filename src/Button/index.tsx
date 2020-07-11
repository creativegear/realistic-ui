import React, { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components/native';
import Ripple from 'react-native-material-ripple';
import { ActivityIndicator, TextStyle, ViewStyle } from 'react-native';
import ColorUtil from '../util/ColorUtil';
import { IStyleTheme, IThemePart } from '../theme';

const StyledButton = styled.View`
  align-self: center;
  width: 320px;
  height: 52px;
  border-color: ${(props: IStyleTheme) => ColorUtil.darken(props.theme.colors.primary, 50)};
  border-radius: 5px;
  background-color: ${(props: IStyleTheme) => props.theme.colors.primary};
  align-items: center;
  justify-content: center;
  flex-direction: row;
  cursor: pointer;
`;

const StyledDisabled = styled(StyledButton)`
  border-color: ${(props: IStyleTheme) => ColorUtil.darken(props.theme.colors.primary, 90)};
  background-color: ${(props: IStyleTheme) => ColorUtil.darken(props.theme.colors.primary, 50)};
`;

const StyledText = styled.Text`
  font-size: 16px;
  color: ${(props: IStyleTheme) => props.theme.colors.butttonTextColor};
`;

const StyledDisabledText = styled(StyledText)`
  color: ${(props: IStyleTheme) => ColorUtil.darken(props.theme.colors.butttonTextColor, 50)};
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
  const themeContext: IThemePart = useContext(ThemeContext);
  console.log(themeContext);

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
  return (
    <Ripple
      testID={testID}
      rippleColor={ColorUtil.lignten(themeContext.colors.primary, 20)}
      disabled={loading}
      onPress={loading ? null : onPress}
      style={[{ cursor: loading ? 'not-allowed' : 'pointer' }, style]}>
      {leftElement || null}
      <StyledButton>
        {loading ? (
          <ActivityIndicator
            size="small"
            color={indicatorColor || themeContext.colors.butttonTextColor}
          />
        ) : (
          <StyledText style={textStyle}>{text}</StyledText>
        )}
      </StyledButton>
      {rightElement || null}
    </Ripple>
  );
}

export default Button;
