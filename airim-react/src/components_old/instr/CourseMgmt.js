import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import Layout from 'components/common/Layout';

const Course = styled.div`
  display:flex;
  padding: 0.5em;
`;

const CoursMgmt = () => {
  
  const courseArr = [
    {
      id: 1,
      title: '파이썬 자연어처리 배우기',
      thumb_path: 'https://source.unsplash.com/user/ilyapavlov/600x400',
      tags: ['#파이썬', '#자연어처리'],
    },
    {
      id: 2,
      title: 'R머신러닝 자연어처리 배우기',
      thumb_path: 'https://source.unsplash.com/user/erondu/600x400',
      tags: ['#R머신러닝', '#자연어처리'],
    },
    {
      id: 3,
      title: '파이썬 텐서플로우 배우기',
      thumb_path: 'https://source.unsplash.com/user/_vickyreyes/600x400',
      tags: ['#파이썬', '#텐서플로우', '#이거이거'],
    },
  ];
  const [courses, setCourses] = useState(courseArr);
  
  return (
    <Layout title="내강좌 관리">
      <div style={{margin: '2em 1em'}}>
        <button>
          <Link to="/instr/editCourse">새강좌 만들기</Link>
        </button>
        <div>
          {courses.map((course) => (
            <Course key={course.id}>
              <div>
                <div>제목 : {course.title}</div>
                <div>태그 : {course.tags.map((tag, i) => (i < 2 ? tag + ' ' : ''))}</div>
              </div>
             <Link to={'/instr/editCourse/' + course.id}><button>수정</button></Link>
             {/* </Link> */}  
            </Course>
          ))} 
        </div>
      </div>
    </Layout>
  );
};

export default CoursMgmt;
