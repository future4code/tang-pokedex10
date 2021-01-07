import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  width: 95vw;
  margin: 4px;
  padding: 4px;
  border: 3px solid red;
`
export const PokemonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin: 4px;
  padding: 4px;
  border: 3px solid yellow;
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 200px;
  width: 200px;
  margin: 4px;
  padding: 4px;
  border-radius: 4px;
  border: 3px solid orange;
`
export const NavBar = styled.div`
  display: flex;
  height: 15vh;
  min-width: 90vw;
  align-items: center;
  justify-content: space-between;
  background-color: #30a7d7;
  color: white;
  margin: 4px;
  padding: 16px;
  border: 3px solid green;
  `
export const ButtonsContainer = styled.div`
  display: flex;
  margin: 4px;
  padding: 4px;
  border: 3px solid blue;
`
export const Button = styled.button`
  margin-left: 4px;
  margin-right: 4px;
  border-radius: 4px;
  :hover {
    cursor: pointer;
    background-color: white;
    border: 1px solid #30a7d7;
  }
`