import styled from 'styled-components'

export const LiItem = styled.li`
  background-color: ${props => (props.isactive ? '#94a3b8' : props.mode)};
  text-align: start;
  color: ${props => (props.textColor ? 'black' : 'white')};
  width: 230px;
  padding: 19px;
  margin: 0px;
  text-decoration: none;
`

export const MainContainer = styled.div`
  top: 60px;
  left: 0;
  height: calc(100vh - 60px);
  width: 250px;
  position: fixed;

  display: flex;
  flex-direction: column;
  background-color: ${props => (props.mode ? 'white' : '#313131')};
  z-index: 1;
`
export const FooterSec = styled.div`
  padding-left: 16px;
  margin-bottom: 0px;
  color: ${props => (props.tColor ? 'black' : 'white')};
`
