import React from 'react';
import styled ,{css}from 'styled-components';
import { NavLink , withRouter} from 'react-router-dom';
import SideMenu from './SideMenu';
import { MdKeyboardArrowLeft } from 'react-icons/md';

const IntroText = styled.div`
  width: 70%;
  padding-top:0.5em;
`;

const LayoutBlock = styled.div`
  width: 100%;
  //width: 512px;
   min-height: 768px;
  padding: 0 1em;
  // position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
//  background: #f2f3f5;
 background: ${(props) => (!props.backImg ? '#f2f3f5' : 'url('+props.backImg+')')};
//https://source.unsplash.com/user/_vickyreyes/600x400

// border-radius: 16px;
  // box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  // margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  // margin-top: 96px;
  // margin-bottom: 32px;
  // display: flex;
  // flex-direction: column;
`;

const Header = styled.div`
  //display:inline-box;
  //margin-bottom: 2em;
 //border-bottom: 1px solid #e9ecef;
`;

const Nav = styled(NavLink)`
  font-weight: bold;
  font-size: 24px;
  color: black;
  &:hover {
    color: gray;
  }
`;

const TitleBlock = styled.div`
  display:flex;
  justify-content:space-between;
  //background:red;
  align-items:center;
  .title-text{
      font-weight: 700;
  }
`;


const Layout = ({ children , history, home, title , backImg }) => {

  return (
    <LayoutBlock backImg={backImg}>
      <Header>
         {title
      ? (
         <TitleBlock>
            <div onClick={()=> history.goBack()}>
              <MdKeyboardArrowLeft className="md-icon" />
            </div>
            <div className="title-text">{title}</div>
            <SideMenu />
         </TitleBlock> 
        )
      : (
        <div>
          <Nav
            to="/" //activeStyle={{ background: 'black', color: 'white' }}
          >
            경연   
          </Nav>
          <SideMenu />
        </div>
        )}
        
        {home &&
        <IntroText>
            #경연: 고려·조선시대에, 임금이 학문이나 기술을 강론·연마하던일. 또는
            그런자리.
        </IntroText>
          }
      </Header>
     
      {children}
      
    </LayoutBlock>
  );
};

export default withRouter(Layout);
