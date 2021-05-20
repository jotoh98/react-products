import styled from "styled-components";

const StyledButton = styled.button `
  border-radius: .2rem;
  color: white;
  border: 1px solid;
  padding: .4rem 1rem;
  background: transparent;
  &:hover {
    color: #eee;
  }
  &:active {
    color: #ccc;
  }
`


const Button = props => <StyledButton onClick={props.onClick} children={props.children}/>

export default Button;