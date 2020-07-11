import React, { useContext, useState, useRef } from 'react';
import styled, { ThemeContext } from 'styled-components/native';
import { ActivityIndicator, StyleProp, View, ViewStyle } from 'react-native';
import HideDelay from '../../component/hide-delay';
import ColorUtil from '../../util/ColorUtil';
import { IStyleTheme, IThemePart } from '../../theme';
import { useSpring, useChain, config, animated } from 'react-spring/native';

interface IColumnProps {
  show: boolean;
  flex: number;
  style?: StyleProp<ViewStyle>;
  zIndex?: number;
}

const Animated = animated(View);

const AnimatedColumn: React.FC<IColumnProps> = (props) => {
  const springRef = useRef();
  const { flex } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { flex: 0 },
    to: {
      flex: props.show ? props.flex : 0,
    },
  });
  useChain([springRef]);

  return (
    <Animated
      style={[
        props.zIndex
          ? {
              zIndex: props.zIndex,
              height: '100vh',
              shadowColor: '#555555',
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowRadius: 10,
              shadowOpacity: 0.2,
              elevation: 2,
              backgroundColor: '#FFFFFF',
            }
          : {},
        { flex: flex },
        props.style,
      ]}>
      {props.children}
    </Animated>
  );
};

const Container = styled.View`
  display: flex;
  flex-direction: row;
`;

const FirstColumn = styled.View`
  flex: 1;
  background-color: '#00ffff';
`;

const SecondColumn = styled.View`
  flex: 2;
  height: '100vh';
  zindex: 10;
  backgroundcolor: '#FFffff';
  box-shadow: 0 5px 15px rgba(55, 55, 55, 0.2);
`;

interface IProps {
  testID?: string;
  height?: string;
  constainerStyle?: ViewStyle;
  firstColumn: any;
  firstColumnStyle?: ViewStyle;
  secondColumn: any;
  secondColumnStyle?: ViewStyle;
  thirdColumn?: any;
  thirdColumnStyle?: ViewStyle;
  showThirdColumn?: boolean;
  forthColumn?: any;
  forthColumnStyle?: ViewStyle;
  showForthColumn?: boolean;
}

const AcordiionContainer: React.FC<IProps> = (props) => {
  const heightStyle = props.height ? { height: props.height } : {};
  return (
    <Container testID={props.testID} style={[props.constainerStyle, heightStyle]}>
      <FirstColumn style={[props.firstColumnStyle, heightStyle]}>{props.firstColumn}</FirstColumn>
      <SecondColumn style={[props.secondColumnStyle, heightStyle]}>
        {props.secondColumn}
      </SecondColumn>
      {props.thirdColumn && (
        <HideDelay isShow={props.showThirdColumn || false} milliSeconds={5}>
          <AnimatedColumn
            style={[props.thirdColumnStyle || {}, heightStyle]}
            flex={2}
            show={props.showThirdColumn || false}
            zIndex={20}>
            {props.thirdColumn}
          </AnimatedColumn>
        </HideDelay>
      )}
      {props.forthColumn && (
        <HideDelay isShow={props.showForthColumn || false} milliSeconds={5}>
          <AnimatedColumn
            style={[props.forthColumnStyle || {}, heightStyle]}
            flex={2}
            show={props.showForthColumn || false}
            zIndex={30}>
            {props.forthColumn}
          </AnimatedColumn>
        </HideDelay>
      )}
    </Container>
  );
};

export default AcordiionContainer;
