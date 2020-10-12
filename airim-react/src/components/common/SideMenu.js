import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SideMenu = () => {
  
  const MENU_WIDTH = 240; 
  
  const SlideMenu = styled.div`
    background: #47a3da;
	  position: fixed;

    width: ${MENU_WIDTH}px;
    height: 100%;
    top: 0;
    z-index: 1000;

    right: ${props => props.open? '0px' : (MENU_WIDTH*-1)+'px'}; 

    h3 {
       	color: #afdefa;
        font-size: 1.9em;
        padding: 20px;
        margin: 0;
        font-weight: 300;
        background: #0d77b6;
      }

    a {
      display: block;
      color: #fff;
      font-size: 1.1em;
      font-weight: 300;

      border-bottom: 1px solid #258ecd;
    	padding: 1em;

      &:hover {
          background: #258ecd;
      }
    }
  `;
  
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(true);
  
  const onToggle = () => setOpen(!open);
  
  return (
    <div className="Menu">
      <SlideMenu open={open}>
        {login ? (
          <div>
            <h3>에이림님 환영합니다.</h3>
            <a>나의정보 확인</a>
            <a>로그아웃</a>
          </div>
        ) : 
        (
          <div>
            <h3>경연에 입장하여 다양한 지식과 함께하세요</h3>
            <div>ID</div>
            <div>Password</div>
            <a>아이디/비밀번호 찾기</a>
            <a>회원가입</a>
            <button>로그인</button>
          </div>
      )}
        
      </SlideMenu>

      <button onClick={onToggle}>Show/Hide Right Slide Menu</button>
      <button onClick={()=> setLogin(!login)}>Login : {login? 'true' : 'false'}</button>
 
    </div>
  );
};

export default SideMenu;