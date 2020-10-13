import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Roster from './Roster';
import Layout from './components/common/Layout';
import './App.css';
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
      <Layout>
        <Roster /> 
      </Layout>
    </div>
  
  );
};

export default App;
