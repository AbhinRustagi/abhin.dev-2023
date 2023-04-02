export interface ThemeColors {
  background: string
  title: string
  body: string
  cardBackground: string
  gray: string
}

export const lightThemeColors: ThemeColors = {
  background: '#F0F0F0',
  title: '#282828',
  body: '#6C6C6C',
  cardBackground: '#E6E6E6',
  gray: '#D4D4D4',
}

export const darkThemeColors: ThemeColors = {
  background: '#1a1a1a',
  title: '#E9E9E9',
  body: '#979797',
  gray: '#515151',
  cardBackground: '#222222',
}

export interface Theme {
  colors: ThemeColors
}
