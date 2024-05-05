import React from 'react'

const Header = (props) => {
  //U can use distrection: const Header = ({title}) => {
  return (
    <header>
 <h1>{props.title}</h1> 
 {/*  <h1>{title}</h1>  */}

    </header>
  )
}

//This title will be applied when we don't send a prop in the parent app:  <Header  />  
Header.defaultProps = {
  title: "Default Title"
}



export default Header;


