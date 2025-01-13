import styled, {css} from "styled-components";

//CSS Using Variables
const textAlign = `
text-align:left;
color:red
`

//using css function to apply CSS
const otherStyles = css`

  color: #0369a1;
  font-family: Verdana;
  
`

//TODO Applying Styles based on props


const Heading = styled.h1`
  text-align: left;
  color: #1f2937;
  ${(props)=>props.type==="h1" && css`
    font-size: 60px;
    font-family: "Poppins", sans-serif;`}  
  
  ${(props)=>props.type==="h2" && css`
    font-size: 40px;
    font-family: "Rage Italic";`} 
  
  ${(props)=>props.type==="h3" && css`
    font-size: 15px;
    font-family: "Open Sans SemiBold";`}
  
  
  
`


export default Heading

