import { OColor } from "./colors"

export const THEMES: Record<ThemeType, Theme> = {
  light: {
    "--text-color": OColor.TextWhite,
    "--main-text-color": OColor.TextMainWhite,
    "--background-color": OColor.BackgroundWhite,
    "--menu-background-color": OColor.MenuBackgroundWhite,
    "--menu-background-highlighted": OColor.MenuBackgroundHighlightedWhite,
    "--separator-color": OColor.Separator,
    "--highlight-color": OColor.HighlightWhite,
    "--name-color": OColor.NameWhite,
    "--text-background-color": OColor.TextBackgroundColorWhite,
    "--sidebar-circle-inactive": OColor.SidebarCircleInactiveWhite,
    "--sidebar-circle-active": OColor.SidebarCircleActiveWhite,
    "--scrollbar-track": OColor.ScrollbarTrackWhite,
    "--scrollbar-thumb": OColor.ScrollbarThumbWhite,
  },
  dark: {
    "--text-color": OColor.TextDark,
    "--main-text-color": OColor.TextMainDark,
    "--background-color": OColor.BackgroundDark,
    "--menu-background-color": OColor.MenuBackgroundDark,
    "--menu-background-highlighted": OColor.MenuBackgroundHighlightedDark,
    "--separator-color": OColor.Separator,
    "--highlight-color": OColor.HighlightDark,
    "--name-color": OColor.NameDark,
    "--text-background-color": OColor.TextBackgroundColorDark,
    "--sidebar-circle-inactive": OColor.SidebarCircleInactiveDark,
    "--sidebar-circle-active": OColor.SidebarCircleActiveDark,
    "--scrollbar-track": OColor.ScrollbarTrackDark,
    "--scrollbar-thumb": OColor.ScrollbarThumbDark,
  },
}
