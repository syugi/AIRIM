import React from 'react';
import { Link } from 'react-router-dom';

const MenuAfterLogin = () => (
  <div>
    <h3>
      에이림님
      <br />
      환영합니다.
    </h3>
    <div>
      <Link to="/">홈</Link>
      <Link to="/">나의정보 확인</Link>
      <Link to="/instr/courseMgmt">내강좌 관리</Link>
      <Link to="/" onClick={() =>{}}>로그아웃</Link>
    </div>
  </div>
);


const MenuBeforeLogin = () => (
  <div>
    <h3>
      경연에 입장하여
      <br />
      다양한 지식과
      <br />
      함께하세요
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
  <div>
    <Link to="/">아이디/비밀번호 찾기</Link>
    <Link to="/">회원가입</Link>
  </div>
    <button onClick={() => {}}>로그인</button>
  </div>
);


const SideMenu = () => {
 
  const isLogin = false;
  
  return (
    <div>
      <button>메뉴 아이콘</button>  
      {isLogin? <MenuAfterLogin /> : <MenuBeforeLogin />}
    </div>
  );
};

export default SideMenu;
