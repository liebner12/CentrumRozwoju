import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import NavbarHeader from "../components/NavbarHeader"
const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
      box-sizing: border-box;
    }
    body {
      margin: 0;
      padding: 0;
      font-family: Segoe UI, 'Open Sans', sans-serif;
      overflow-x: hidden;
    }
    html {
      scroll-behavior: smooth;
      overflow-x: hidden;
    }
    h1 {
      text-rendering: optimizeLegibility;
      font-size: 3rem;
      line-height: 1;
      font-weight: 900;
      margin-bottom: 1.45rem; 
      color: rgba(40, 40, 40,0.9);
    }
    h2 {
      text-rendering: optimizeLegibility;
      font-size: 2.3rem;
      line-height: 1.1;
      font-weight: 900;
      margin-bottom: 1.45rem; 
      color: rgba(40, 40, 40,0.9);
    }
    
    h4{
      text-rendering: optimizeLegibility;
      font-weight: 700; 
      font-family: 'Source Sans Pro', sans-serif;
      text-decoration: none !important;
    }
   
    
`

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <NavbarHeader />
    {children}
  </>
)
export default Layout
