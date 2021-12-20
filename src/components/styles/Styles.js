import styled from 'styled-components';

export const CalculatorStyles = styled.div`
  background-color: #0d1770;
  width: 100%;
  min-height: 100vh;
  display: grid;
  justify-items: center;
  grid-template-rows: minmax(200px 350px) 1fr;
  grid-template-columns: 1fr;
  .display {
    font-family: 'Orbitron', serif;
    margin: 0 !important;
    width: 100%;
    h1 {
      font-size: 50px;
      color: #ff043e;
      text-align: center;
    }
  }
  .number-pad {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(4, 1fr);
    padding: 0px 0px 30px;
    width: 600px;
    margin: 0 auto;
    button {
      width: 100%;
      height: 80px;
      border-radius: 0;
      border: 3px solid black;
      font-size: 45px;
      color: white;
      font-family: 'Orbitron', serif;
      background: red;
      &:focus {
        outline: none;
      }
      &:hover {
        border: 3px solid #dfe6e9;
        font-weight: 600;
      }
    }
    button.function-button {
      background-color: #2d3436;
    }
    button.white-button {
      color: #2d3436;
      background-color: white;
    }
  }
  .zero-button {
    grid-column: 1/3;
  }
`;

export const DisplayStyles = styled.div`
  display: grid;
  grid-template-rows: 90px 50px;
  grid-template-columns: 1fr;
  border: 4px solid white;
  max-width: 700px;
  margin: 10px auto;
  align-items: center;
  border-radius: 20px;
  background: #e17055;
  h2,
  p {
    text-align: center;
    color: black;
    font-size: 22px;
  }
  h2 {
    font-size: 2.5rem;
    margin: 0;
    text-align: right;
    border-bottom: 4px solid white;
    padding: 15px 20px;
    @media (max-width: 500px) {
      font-size: 1.5rem;
      padding: 10px;
    }
  }
  h2.long-main-display {
    font-size: 1.2rem;
  }
`;
