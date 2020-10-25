import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Main from 'components/Main';
import Header from 'components/Header';
import reset from 'styles/reset.scss';
import utils from 'styles/utils.scss';

const GlobalStyle = createGlobalStyle`
  body {
    // background:  #011627;
  }
`;

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Main />
    </div>
  );
};

export default App;
