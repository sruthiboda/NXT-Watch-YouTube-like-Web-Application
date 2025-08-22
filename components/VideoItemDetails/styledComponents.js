import styled from 'styled-components'

export const Button12 = styled.button`
  margin: 9px;
  background-color: transparent;
  border: 0px;
  color: ${props => (props.toggleColor ? '#2563eb' : '#64748b')};
`
export const GameDiv = styled.div`
  background-color: ${props => (props.bgColor ? 'white' : 'black')};

  width: calc(100% - 250px);

  margin-left: 250px;
  border: 1px solid blue;
`
export const RightGameContainer = styled.div`
  color: ${props => (props.colorMode ? 'black' : 'white')};
  padding: 12px;

  margin-bottom: 0px;
`
export const TextDiv = styled.div`
  color: ${props => (props.color12 ? 'black' : 'white')};
`
