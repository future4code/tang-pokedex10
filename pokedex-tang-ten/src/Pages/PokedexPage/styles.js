import styled from 'styled-components';

export const PokedexWraper = styled.div`
display: flex;
flex-direction: row;
text-align: center;
height: 308px;
width: 250px;
background-color: #f1f1f1;
margin: 1em;
padding: 1em;
border-radius: 10%;
/* border: 3px solid orange; */
`

export const NavBar = styled.div`
  display: flex;
  height: 5vh;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: #30a7d7;
  color: white;
  /* margin: 4px; */
  
  /* border: 3px solid green; */
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