import React, { useState } from 'react';
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

  const [tags, setTags] = useState([
    { id: 1, text: '파이썬' },
    { id: 2, text: '자연어처리' },
    { id: 3, text: 'R머신러닝' },
    { id: 4, text: '이거이거' },
  ]);

  const tagList = tags.map((tag) => <li key={tag.id}>{tag.text}</li>);

  return (
    <div className="Home">
      <Layout history={history}>
        <nav>
          <div>경연</div>
        </nav>
        <ul>{tagList}</ul>
        <CourseList />
        <button style={style}>
          <Link to="/CreateCourse">내강의 만들기</Link>
        </button>
           
      </Layout>{' '}
       
    </div>
  );
};

export default Home;
