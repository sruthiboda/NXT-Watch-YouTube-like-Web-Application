import styled from 'styled-components'

export const NavBar = styled.div`
  background-color: ${props => (props.colorBg ? '#e2e8f0' : '#383838')};
  width: 100%;
  display: flex;
  padding: 8px;
  margin-left: 0px;
  align-items: center;
  height: 100px;

  color: ${props => (props.colorBg ? 'black' : 'white')};
`
export const Heading = styled.h1`
  margin-left: 16px;
`
export const NoSavedVidContainer = styled.div`
  background-color: ${props => (props.bgColor9 ? 'white' : 'black')};

  display: flex;
  justify-content: center;

  height: calc(100% - 60px);
  color: ${props => (props.bgColor9 ? 'black' : 'white')};
  width: calc(100% - 250px);
  margin-left: 250px;
  margin-top: 60px;
`

export const VideosBg = styled.div`
  background-color: ${props => (props.bgColor89 ? 'white' : 'black')};

  margin: 0px;
  height: calc(100% - 120px);

  margin-top: 60px;

  display: flex;
  width: calc(100% - 250px);
  margin-left: 250px;

  margin-right: 0px;
  height: 100%;

  flex-direction: column;
  justify-content: start;
`
export const RightTextVid = styled.div`
  margin-left: 12px;

  color: ${props => (props.colorBg ? 'black' : 'white')};
`
