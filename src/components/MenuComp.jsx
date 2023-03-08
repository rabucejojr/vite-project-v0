import * as React from 'react'
import { ThemeProvider } from '@mui/system'
import { AppBar, Box, CssBaseline, IconButton, Toolbar } from '@mui/material'

  const LoginComp = () => {
    const customMenuTheme = createTheme({
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
    return (
      <>
        <ThemeProvider theme={customMenuTheme}>
          <MenuTheme>Styled div with theme</MenuTheme>
        </ThemeProvider>
      </>
    )
  }
 export default LoginComp
