import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { useColorScheme } from 'react-native-appearance';

export interface IThemePart {
  colors: {
    primary: string;
    baseColor: string;
    textColor: string;
    butttonTextColor: string;
  };
}

export interface ITheme {
  light: IThemePart;
  dark: IThemePart;
}

export interface IStyleTheme {
  theme: IThemePart;
}

export const defaultTheme: ITheme = {
  light: {
    colors: {
      primary: '#d85050',
      baseColor: '#e7e7e7',
      textColor: '#565955',
      butttonTextColor: '#FEFEFE',
    },
  },
  dark: {
    colors: {
      primary: '#5050d8',
      baseColor: '#666666',
      textColor: '#FEFEFE',
      butttonTextColor: '#FEFEFE',
    },
  },
};

interface IThemeProps {
  theme?: ITheme;
}

const Theme: React.FC<IThemeProps> = (props) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  return (
    <ThemeProvider
      theme={
        props.theme != undefined && props.theme != null
          ? isDarkMode
            ? props.theme.dark
            : props.theme.light
          : isDarkMode
          ? defaultTheme.dark
          : defaultTheme.light
      }>
      {props.children}
    </ThemeProvider>
  );
};

export default Theme;
