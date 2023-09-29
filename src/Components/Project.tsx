import React from 'react'
import { ThemeProvider } from 'styled-components'
import Container from './Container';
import theme from '../Styles/theme'

const Project = () => {

 

  return (
    <ThemeProvider theme={theme}>
      <Container />
    </ThemeProvider>
  )
}

export default Project