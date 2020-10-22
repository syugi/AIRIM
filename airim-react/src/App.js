import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Roster from './Roster';
import './App.css';
import reset from './styles/reset.scss';
import utils from './styles/utils.scss';


const GlobalStyle = createGlobalStyle`
  body {
     background:  #011627;
  }
`;

const App = () => {
  return (
    <div >
      <GlobalStyle />
      <Roster /> 
    </div>
  
  );
};

export default App;
