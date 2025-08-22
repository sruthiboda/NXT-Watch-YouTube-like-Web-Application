import styled from 'styled-components'

export const NavBar12 = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: beige;
  position: fixed;
  padding: 3px;
  width: 100vw;
  z-index: 2;
  background-color: ${props => (props.bgColor ? 'white' : '#313131')};
`

export const Button = styled.button`
  background: transparent;
  color: ${props => (props.colorBg89 ? 'black' : 'white')};
  padding: 10px;
  border: 2px solid;
  padding: 7px;
  width: 69px;
  border-radius: 6px;

  border-color: ${props => (props.colorBg89 ? 'black' : 'white')};
`
