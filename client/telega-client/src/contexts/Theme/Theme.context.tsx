import React, { Dispatch, SetStateAction, useState } from "react"
import { THEMES } from "../../constants/themes"

interface Props {
  children: React.ReactNode
}

interface ThemeContextProps {
  themeType: ThemeType
  theme: Theme
  setCurrentTheme: Dispatch<SetStateAction<ThemeType>>
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  themeType: "dark",
  theme: THEMES["dark"],
} as ThemeContextProps)

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>("dark")

  return (
    <ThemeContext.Provider
      value={{
        themeType: currentTheme,
        theme: THEMES[currentTheme],
        setCurrentTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => React.useContext(ThemeContext)
