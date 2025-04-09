import { createTheme } from '@mui/material/styles'
import type { Shadows } from '@mui/material/styles'
import { palette } from '@/styles/palette'

declare module '@mui/material/styles' {
  // Custom color palettes
  interface Palette {
    border: Palette['primary']
    logo: Palette['primary']
    backdrop: Palette['primary']
    static: Palette['primary']
  }
  interface PaletteOptions {
    border: PaletteOptions['primary']
    logo: PaletteOptions['primary']
    backdrop: PaletteOptions['primary']
    static: PaletteOptions['primary']
  }

  interface TypeBackground {
    main: string
    light: string
  }

  // Custom color properties
  interface PaletteColor {
    background?: string
  }
  interface SimplePaletteColorOptions {
    background?: string
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    background: true
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1630,
    },
  },
  palette: {
    mode: 'dark',
    ...palette,
  },
  spacing: 8,
  shape: {
    borderRadius: 6,
  },
  shadows: ['none', `0 0 2px ${palette.primary.light}`, ...Array(23).fill('none')] as Shadows,
  typography: {
    fontFamily: 'Citerne, sans-serif',
    h1: {
      fontSize: '50px',
      lineHeight: '56px',
      fontWeight: 400,

      '@media (min-width:600px)': {
        fontSize: '90px',
        lineHeight: '100px',
      },
    },
    h2: {
      fontSize: '44px',
      lineHeight: '56px',
      fontWeight: 400,

      '@media (min-width:600px)': {
        fontSize: '60px',
        lineHeight: '64px',
      },
    },
    h3: {
      fontSize: '40px',
      lineHeight: '44px',
      fontWeight: 400,

      '@media (min-width:600px)': {
        fontSize: '48px',
        lineHeight: '56px',
      },
    },
    h4: {
      fontSize: '32px',
      lineHeight: '36px',
      fontWeight: 400,
    },
    h5: {
      fontSize: '24px',
      lineHeight: '32px',
      fontWeight: 400,
    },
    body1: {
      fontSize: '20px',
      lineHeight: '28px',
      fontWeight: 300,
    },
    body2: {
      fontSize: '15px',
      lineHeight: '24px',
      fontWeight: 300,
    },
    caption: {
      fontSize: '14px',
      lineHeight: '24px',
      letterSpacing: '0.1em',
      fontWeight: 500,
      textTransform: 'uppercase',
      color: palette.primary.light,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ':root': {
          '--mui-palette-primary-main': palette.primary.main,
          '--mui-palette-primary-light': palette.primary.light,
          '--mui-palette-primary-dark': palette.primary.dark,
          '--mui-palette-text-primary': palette.text.primary,
          '--mui-palette-text-secondary': palette.text.secondary,
          '--mui-palette-text-disabled': palette.text.disabled,
          '--mui-palette-text-dark': palette.text.dark,
          '--mui-palette-background-main': palette.background.main,
          '--mui-palette-background-paper': palette.background.paper,
          '--mui-palette-background-default': palette.background.default,
          '--mui-palette-background-dark': palette.background.dark,
          '--mui-palette-background-light': palette.background.light,
          '--mui-palette-border-main': palette.border.main,
          '--mui-palette-border-light': palette.border.light,
          '--mui-palette-border-background': palette.border.background,
          '--mui-palette-secondary-main': palette.secondary.main,
          '--mui-palette-secondary-light': palette.secondary.light,
          '--mui-palette-secondary-dark': palette.secondary.dark,
          '--mui-palette-secondary-background': palette.secondary.background,
          '--mui-palette-error-main': palette.error.main,
          '--mui-palette-error-light': palette.error.light,
          '--mui-palette-error-dark': palette.error.dark,
          '--mui-palette-error-background': palette.error.background,
          '--mui-palette-success-main': palette.success.main,
          '--mui-palette-success-light': palette.success.light,
          '--mui-palette-success-dark': palette.success.dark,
          '--mui-palette-success-background': palette.success.background,
          '--mui-palette-info-main': palette.info.main,
          '--mui-palette-info-light': palette.info.light,
          '--mui-palette-info-dark': palette.info.dark,
          '--mui-palette-info-background': palette.info.background,
          '--mui-palette-warning-main': palette.warning.main,
          '--mui-palette-warning-light': palette.warning.light,
          '--mui-palette-warning-dark': palette.warning.dark,
          '--mui-palette-warning-background': palette.warning.background,
          '--mui-palette-logo-main': palette.logo.main,
          '--mui-palette-logo-background': palette.logo.background,
          '--mui-palette-static-main': palette.static.main,
          '--mui-palette-backdrop-main': palette.backdrop.main,
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeSmall: {
          width: '1rem',
          height: '1rem',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        sizeLarge: {
          fontSize: '18px',
          lineHeight: '26px',
          padding: '15px 22px',
        },
        root: {
          textTransform: 'inherit',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: 'inherit',
        },
        root: {
          color: palette.border.main,
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        fixed: true,
        maxWidth: 'xl',
        disableGutters: true,
      },
      styleOverrides: {
        root: {
          paddingLeft: '15px',
          paddingRight: '15px',

          '@media (min-width:1630px)': {
            paddingLeft: '24px',
            paddingRight: '24px',
          },
        },
      },
    },
  },
})
