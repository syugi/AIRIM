import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import SideMenu from './SideMenu';

const LayoutBlock = styled.div`
   width: 512px;
   height: 768px;
   
   padding: 1em;
  // position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
    background: #f2f3f5;
  // border-radius: 16px;
  // box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  // margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  // margin-top: 96px;
  // margin-bottom: 32px;
  // display: flex;
  // flex-direction: column;
`;

const header = styled.div`
  display: flex; 
`;

const Nav = styled(NavLink)`
//background: red;
font-weight: bold;
font-size: 24px;
color: black;
  &:hover {
     color: gray;
}
`;

const Layout = ({children}) => {
  return (
    <LayoutBlock>
      <header>
        <Nav
          to="/"
          //activeStyle={{ background: 'black', color: 'white' }}
          >
          경연
        </Nav>
        <SideMenu />
      </header>
      {children}
    </LayoutBlock>
  );
};

export default Layout;
