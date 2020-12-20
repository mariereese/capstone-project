import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap');
  
  * {
    box-sizing: border-box;
    font-size: 16px;
  }

  body {
    margin: 0 auto;
    padding: 0;
    max-width: 400px;
    height: 100%;
    font-family: 'Rubik', sans-serif;
    background-color: var(--light-green)
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
    --light-green: #9AC1AD;
    --green: #5d987b;
    --yellow: #ebda58;
    --orange: #e07a5f;
  }
`
