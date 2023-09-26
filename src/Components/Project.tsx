import React from 'react'
import { ThemeProvider } from 'styled-components'
import App from './App';
import theme from '../Styles/theme'

const Project = () => {

 

  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  )
}

export default Project