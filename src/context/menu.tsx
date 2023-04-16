import { useRouter } from 'next/router'
import { createContext, useContext, useEffect, useState } from 'react'

const MenuStateContext = createContext<[boolean, () => void]>([false, () => {}])

export const MenuStateContextProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const toggleMenuState = () => setIsMenuOpen((isMenuOpen) => !isMenuOpen)

  useEffect(() => {
    if (isMenuOpen) toggleMenuState()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname])

  return (
    <MenuStateContext.Provider value={[isMenuOpen, toggleMenuState]}>
      {children}
    </MenuStateContext.Provider>
  )
}

export const useMenuStateContext = () => useContext(MenuStateContext)
