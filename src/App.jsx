import { useState } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { FiPlus, FiSun } from 'react-icons/fi'



const ThemeButton = styled.button`
      position:fixed;
      right:20px;
      border-radius:24px;
      color: ${props=>props.theme.mode == "dark" ? props.theme.light:props.theme.dark };
      border:${props=>props.theme[props.theme.mode]};
      background-color:${props=>props.theme[props.theme.mode]};



`

const AddTodo = styled.div`
  padding:10px;
  display:flex;
  gap:4px;
  input{
    width:100%;
    padding:8px 4px;
    &:hover,&:focus-within{
      border-color:1px solid ${props=>props.theme.primary};
    }
  }

  button{
    font-size:16px;
    font-weight:bold;
    background-color:${props=>props.theme.primary};
    border:1px solid ${props=>props.theme.primary};
    color:white;

    &:hover,&:active{
      background-color:#3f016c;
    }

  }
`

const GlobalSytle = createGlobalStyle`

  body{
    margin:0;
    padding:0;
    color: ${props=>props.theme.mode == "dark" ? props.theme.light:props.theme.dark };
    background-color:${props=>props.theme[props.theme.mode]}
  }

`

function App() {
  const [count, setCount] = useState(0)
  const [darkMode, setDarkMode] = useState(false)

  const theme = {
    mode:'light',
    light:'#ffffff',
    dark: '#242323',
    primary:'indigo'
  }


  return (
   <ThemeProvider theme={{...theme,mode:darkMode?'dark':'light'}}>
     <GlobalSytle/>
     <ThemeButton onClick={()=>setDarkMode(!darkMode)}>
       <FiSun/>
     </ThemeButton>

     <div>
       <h3>Todo List</h3>
       <AddTodo>
         <input placeholder='Add Todo' />
         <button><FiPlus/></button>
       </AddTodo>
     </div>
   </ThemeProvider>
  )
}

export default App
