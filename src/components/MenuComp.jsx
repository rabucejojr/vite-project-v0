import * as React from 'react'
import { styled, createTheme, ThemeProvider } from '@mui/system'
import { AppBar, Box, CssBaseline, IconButton,Toolbar } from '@mui/material'

const customTheme = createTheme({
  palette: {
    primary: {
      main: 'blue',
      contrastText: 'white',
    },
  },
})

const MenuTheme = styled('div')(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
}))

export default function MenuComp() {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <MenuTheme>Styled div with theme</MenuTheme>
      </ThemeProvider>
    </>
  )
}
