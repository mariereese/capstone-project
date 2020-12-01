import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap');
  
  * {
    box-sizing: border-box;
    font-size: 16px;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Rubik', sans-serif;
    background-color: var(--green)
  }

  h2 {
    font-weight: 300;
    font-size: 1.5rem;
    color: var(--dark-grey);
    margin: 13px;
  }

  :root {
    --dark-grey: #3f3f3b;
    --light-grey: #767670;
    --green: #5d987b;
    --orange: #e07a5f;
  }
`
