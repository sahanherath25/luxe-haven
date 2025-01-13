import styled, {css} from "styled-components";

const MyFlexRow = styled.div`
  
  display: flex;
  
  
  ${(props) => props.type === "horizontal" && css`
    justify-content: space-between;
    
  `}  
  
  ${(props) => props.type === "vertical" && css`
    flex-direction: column;
    gap: 1.5rem;
  `}
`

export default MyFlexRow

