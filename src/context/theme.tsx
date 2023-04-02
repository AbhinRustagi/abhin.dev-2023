import { createContext, useContext, useEffect, useState } from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { darkThemeColors, lightThemeColors, Theme } from '~/theme'

type ThemeName = 'light' | 'dark'

const ThemeContext = createContext<[ThemeName, () => void]>(['light', () => {}])

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [themeName, setThemeName] = useState<ThemeName>('light')
  const [themeValues, setThemeValues] = useState<Theme>({
    colors: lightThemeColors,
  })

  const toggleTheme = () =>
    setThemeName((theme) => (theme === 'dark' ? 'light' : 'dark'))

  useEffect(() => {
    if (themeName === 'light') {
      setThemeValues({ colors: lightThemeColors })
    } else if (themeName === 'dark') {
      setThemeValues({ colors: darkThemeColors })
    }
  }, [themeName])

  return (
    <ThemeContext.Provider value={[themeName, toggleTheme]}>
      <EmotionThemeProvider theme={themeValues}>
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)
