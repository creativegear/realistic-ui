import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { createGlobalStyle, GlobalStyleComponent } from 'styled-components';
import { useColorScheme } from 'react-native-appearance';

const GlobalStyle = createGlobalStyle`
  /* CSS Remedy */
  *,::after,::before{box-sizing:border-box}html{line-sizing:normal}body{margin:0}h1{font-size:2rem}h2{font-size:1.5rem}h3{font-size:1.17rem}h4{font-size:1rem}h5{font-size:.83rem}h6{font-size:.67rem}h1{margin:.67em 0}pre{white-space:pre-wrap}hr{border-style:solid;border-width:1px 0 0;color:inherit;height:0;overflow:visible}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle;max-width:100%}canvas,img,svg,video{height:auto}audio{width:100%}img{border-style:none}svg{overflow:hidden}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}
`;

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
  const theme =
    props.theme != undefined && props.theme != null
      ? isDarkMode
        ? props.theme.dark
        : props.theme.light
      : isDarkMode
      ? defaultTheme.dark
      : defaultTheme.light;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      {props.children}
    </ThemeProvider>
  );
};

export default Theme;
