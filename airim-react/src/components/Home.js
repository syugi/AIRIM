import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './common/Layout';
import CourseList from './CourseList';

const Home = ({ history }) => {
  const style = {
    // backgroundColor: 'black',
    // color: 'aqua',
    // fontSize: 24, // 기본 단위 px
    // padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  };

  return (
    <div className="Home">
      <Layout history={history}>
        <nav>
          <div>경연</div>
        </nav>
        <ul>
          <li>#파이썬</li>
          <li>#자연어처리</li>
          <li>#R머신러닝</li>
        </ul>
        <CourseList />
        <button style={style}>
          <Link to="/CreateCourse">내강의 만들기</Link>
        </button>
           
      </Layout>{' '}
       
    </div>
  );
};

export default Home;
