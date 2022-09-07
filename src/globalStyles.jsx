import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Qwitcher+Grypen&display=swap');  
  } 

  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    & > #root {
      width: 100%;
      height: 100%;
    }
  }

  body {
   position: relative;
   
  }

  #root {
    display: flex;
  }
`
