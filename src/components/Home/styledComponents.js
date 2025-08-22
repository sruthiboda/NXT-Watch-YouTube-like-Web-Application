import styled from 'styled-components'

export const RightBg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: calc(100% - 250px);
  margin-left: 250px;
  flex: 1;
  padding: 20px;
  padding-top: 60px;
  overflow-y: auto;
  min-height: 0;

  background-color: ${props => (props.lightMode ? '#f8fafc' : '#181818')};
`

export const LiItem1 = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  list-style-type: none;
  text-decoration: none;
  margin-bottom: 29px;
  width: 350px;
  margin-right: 39px;
  margin-left: 0px;
  color: ${props => (props.tColor ? 'black' : 'white')};
`
export const ButtonSearch = styled.button`
  padding: 9px;
  width: 50px;
  background-color: ${props => (props.searchBg ? ' #ebebeb' : '#606060')};
  color: ${props => (props.searchBg ? 'black' : '#7e858e')};
  border: 1px solid;
  border-color: ${props => (props.searchBg ? ' #ebebeb' : '#7e858e')};
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 16px;
`
export const NoVidContainer = styled.div`
  display: flex;
  margin-top: 0px;
  flex-direction: column;
  justify-content: center;

  color: ${props => (props.tColor1 ? 'black' : 'white')};
`
export const InputEl = styled.input`
  padding: 9px;
  width: 100%;
  max-width: 400px;
  border-radius: 0px;
  background: transparent;
  border: 1px solid;
  border-color: ${props => (props.inputBg ? ' #ebebeb' : '#7e858e')};
  color: ${props => (props.inputBg ? '#606060' : 'white')};
`
