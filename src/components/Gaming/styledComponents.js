import styled from 'styled-components'

export const NavBar1 = styled.nav`
  display: flex;
  align-items: center;
  background-color: ${props => (props.bgcolor ? '#f4f4f4' : '#383838')};
  margin-top: 0px;
  padding: 15px;

  width: 100%;
`
export const HeadTag = styled.h1`
  padding-left: 29px;
  color: ${props => (props.tcolor ? 'black' : 'white')};
`
export const RightContainer = styled.div`
  display: flex;
  padding: 9px;
  flex-wrap: wrap;
  overflow-y: auto;
  flex-grow: 1;
  background-color: ${props => (props.bgcolor ? 'white' : 'black')};
`

export const EachGame = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
  color: ${props => (props.color1 ? 'black' : 'white')};
  margin-bottom: 56px;
  padding: 0px;
`
