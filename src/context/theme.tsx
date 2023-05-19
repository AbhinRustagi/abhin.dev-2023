import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { createContext, useContext, useEffect, useState } from 'react'
import { Theme, colorPalette } from '~/theme'
import { ReactFCWithChildren } from '~/types'

type ThemeName = 'light' | 'dark'

const ThemeContext = createContext<[ThemeName, () => void, boolean]>([
  'dark',
  () => {},
  true,
])

export const ThemeProvider: React.FC<ReactFCWithChildren> = ({ children }) => {
  const [themeName, setThemeName] = useState<ThemeName>('dark')
  const [themeValues, setThemeValues] = useState<Theme>({
    colors: colorPalette[themeName],
  })

  const toggleTheme = () =>
    setThemeName((theme) => (theme === 'dark' ? 'light' : 'dark'))

  useEffect(() => {
    setThemeValues({ colors: colorPalette[themeName] })
  }, [themeName])

  return (
    <ThemeContext.Provider
      value={[themeName, toggleTheme, themeName === 'dark']}
    >
      <EmotionThemeProvider theme={themeValues}>
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)
