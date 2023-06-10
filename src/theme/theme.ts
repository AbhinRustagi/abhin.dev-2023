export interface ThemeColors {
  accent: '#006de1'
  background: string
  title: string
  body: string
  cardBackground: string
  gray: string
  grayTranslucent: string
  graySelection: string
  accentTranslucent: string
}

const themeColors: ThemeColors = {
  accent: '#006de1',
  background: '#f4f4f4',
  title: '#040404',
  body: '#282828',
  cardBackground: '#E6E6E6',
  gray: '#afafaf',
  grayTranslucent: '#73737330',
  graySelection: '#e1e1e1',
  accentTranslucent: '#007cff26',
}

export interface Theme {
  colors: ThemeColors
}

export const theme = {
  colors: themeColors,
}
