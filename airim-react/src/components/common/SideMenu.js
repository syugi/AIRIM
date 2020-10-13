import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css }  from 'styled-components';
import { MdMenu , MdClose } from 'react-icons/md';

const SideMenu = () => {
  const MENU_WIDTH = 300;

  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const SlideMenu = styled.div`
     background: #ffffff;
    position: fixed;

    width: ${MENU_WIDTH}px;
    height: 100%;
    top: 0;
    z-index: 1000;
    padding: 15px 20px;
    right: ${(props) => (props.open ? '0px' : MENU_WIDTH * -1 + 'px')};

    h3 {
      font-size: 1.9em;
padding-top: 3rem;
      padding-bottom: 5rem;
      margin: 0;
      font-weight: 700;
      //background: #0d77b6;
    }
 
   .slidemenu-list a{
      display: block;
      color: black;
      font-size: 1.1em;
      font-weight: 300;

      border-bottom: 1px solid #258ecd;
      padding: 1em;

      &:hover {
        background: #258ecd;
      }
    }

${props =>{
  return isLoggedIn || css`
input{
  width:100%;
height:35px;
    padding: 5px;
margin-top: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            &:hover {
              //border: 1px solid #aaf;
            }
} 


        a{
  

         color: gray;
         font-size: 0.8em;
      padding:0.6em;


         &:hover {
           color: black;
         }
      }

.login-link{
  display:flex;
  justify-content:flex-end;
}

button{
  color: white;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;

  
  font-size: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  width:100%;
  background: #339af0;

  padding-top:1em;
padding-bottom:1em;

margin-top:4em;
}
  `;
}}


   `;
   
   const MenuIcon = styled.div`
       // background: #258ecd;
       // display: block;
        position: relative;
display: inline-block;
   `;


  const handleCloseMenu = () => setOpen(false);  
    
  return (
    <div>
      <MenuIcon onClick={() => setOpen(!open)}><MdMenu className="md-icon"/></MenuIcon>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Login : {isLoggedIn ? 'true' : 'false'}
      </button>
      
      <SlideMenu open={open} isLoggedIn={isLoggedIn}>
        <div onClick={handleCloseMenu}><MdClose className="md-icon"/></div>
        {isLoggedIn ? (
          <div>
            <h3>에이림님 환영합니다.</h3>
            <div className="slidemenu-list">
              <Link to="/">나의정보 확인</Link>
              <Link to="/CreateCourse">내강의 만들기</Link>
              <Link to="/">로그아웃</Link>
            </div>
          </div>
        ) : (
          <div>
            <h3>
              경연에 입장하여<br/>다양한 지식과<br/>함께하세요
            </h3> 
            
              <input
                type="text"
                name="id"
                placeholder="ID"
                onChange={(e) => {
                  //console.log(e.target.value);
                }}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              />
              <div className="login-link">
                <Link to="/">아이디/비밀번호 찾기</Link>
                <Link to="/">회원가입</Link>
              </div>
         
            
            <button>로그인</button>
            
          </div>
        )}
      </SlideMenu>
       
    </div>
  );
};

export default SideMenu;
