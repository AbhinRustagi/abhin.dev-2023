export interface ThemeColors {
  background: string
  title: string
  body: string
  cardBackground: string
  gray: string
  graySelection: string
  accent: string
  accentTranslucent: string
}

const lightThemeColors: ThemeColors = {
  background: '#F0F0F0',
  title: '#282828',
  body: '#6C6C6C',
  cardBackground: '#E6E6E6',
  gray: '#afafaf',
  graySelection: '#e1e1e1',
  accentTranslucent: '#007cff26',
  accent: '#007cff',
}

const darkThemeColors: ThemeColors = {
  background: '#1a1a1a',
  title: '#E9E9E9',
  body: '#979797',
  gray: '#515151',
  cardBackground: '#222222',
  graySelection: '#2b2b2b',
  accentTranslucent: '#007cff26',
  accent: '#007cff',
}

export const colorPalette = {
  light: lightThemeColors,
  dark: darkThemeColors,
}

export interface Theme {
  colors: ThemeColors
}
