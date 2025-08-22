import styled from 'styled-components'

export const VideoContainer = styled.div`
  display: flex;
  margin-bottom: 8px;
  padding: 7px;

  margin-left: 23px;
  margin-top: 29px;
`

export const RightContainer = styled.div`
  width: calc(100%-250px);
  margin-left: 250px;

  background-color: ${props => (props.bgColor ? '#f8fafc' : 'black')};
  overflow-y: auto;

  padding: 0px;
`
export const HeadTag = styled.h1`
  padding-left: 29px;
  color: ${props => (props.tcolor ? 'black' : 'white')};
`
export const NavBar1 = styled.nav`
  display: flex;
  align-items: center;
  background-color: ${props => (props.bgcolor ? '#f4f4f4' : '#383838')};
  margin-top: 0px;
  padding: 10px;

  width: 100%;
`
export const TextContainer = styled.div`
  color: ${props => (props.textcolor ? 'black' : 'white')};
  margin-left: 32px;
`
