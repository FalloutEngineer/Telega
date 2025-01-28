import { OColor } from "./colors"

export const THEMES: Record<ThemeType, Theme> = {
  light: {
    "--text-color": OColor.TextWhite,
    "--main-text-color": OColor.TextMainWhite,
    "--background-color": OColor.BackgroundWhite,
    "--menu-background-color": OColor.MenuBackgroundWhite,
    "--separator-color": OColor.Separator,
    "--highlight-color": OColor.HighlightWhite,
    "--name-color": OColor.NameWhite,
  },
  dark: {
    "--text-color": OColor.TextDark,
    "--main-text-color": OColor.TextMainDark,
    "--background-color": OColor.BackgroundDark,
    "--menu-background-color": OColor.MenuBackgroundDark,
    "--separator-color": OColor.Separator,
    "--highlight-color": OColor.HighlightDark,
    "--name-color": OColor.NameDark,
  },
}
