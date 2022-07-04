import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    inherit: Palette['primary'];
    white: Palette['primary'];
    purple: Palette['primary'];
    blue: Palette['primary'];
    danger: Palette['primary'];
    black: Palette['primary'];
  }
  interface PaletteOptions {
    white: PaletteOptions['primary'];
    purple: PaletteOptions['primary'];
    blue: PaletteOptions['primary'];
    danger: PaletteOptions['primary'];
    black: PaletteOptions['primary'];
  }
  interface PaletteColor {
    lighter?: string;
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
  }
  interface TypographyVariants {
    lg: React.CSSProperties;
    sm: React.CSSProperties;
    xs: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    lg?: React.CSSProperties;
    sm?: React.CSSProperties;
    xs?: React.CSSProperties;
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    lg: true,
    sm: true,
    xs: true,
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    inherit: true;
    white: true;
    purple: true;
    blue: true;
    danger: true;
    black: true;
  }
}
declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsColorOverrides {
    inherit: true;
    white: true;
    purple: true;
    blue: true;
    danger: true;
    black: true;
  }
}

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
      light: '#64b5f6',
    },
    secondary: {
      dark: '#103A30',
      main: '#0F604C',
      light: '#9ED8C3',
    },
    white: {
      main: '#FFFFFF',
    },
    black: {
      main: '#000000',
    },
    purple: {
      main: '#7A3AE1',
    },
    blue: {
      main: '#1250F0',
    },
    success: {
      main: '#42D04F',
    },
    danger: {
      main: '#EA3030',
    },
  },
  typography: {
    fontFamily: [
      'Nunito',
      'sans-serif',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
    ].join(','),
    h1: { 
      fontSize: '2.125rem',
      lineHeight: '34px',
    },
    h2: { 
      fontSize: '1.5rem',
      lineHeight: '24px',
    },
    h3: { 
      fontSize: '1.5rem',
      lineHeight: '20px',
    },
    lg: {
      fontSize: '1.125rem',
      lineHeight: '24px',
    },
    sm: {
      fontSize: '.875rem',
      lineHeight: '18px',
    },
    xs: {
      fontSize: '.75rem',
      lineHeight: '16px',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: '22px',
    },
  },
});

export default theme;