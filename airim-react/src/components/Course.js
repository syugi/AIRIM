import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import Layout from './common/Layout';

const backImg = "https://source.unsplash.com/user/erondu/600x400"

const CoursHeader = styled.div`
  color:white;
  margin-bottom: 4em;
  width:400px;
  margin-left:-1em;
  
  div{ 
  }
  .main{
    font-size:1.3em;
    font-weight: bold;
    background:black;
    padding: 0.4em 2em; 
    margin-bottom: 0.5em;
    
  }

  .sub{
    margin-top:-0.5em;
    text-align:right;
    
  }
`;

const CourseInfo = styled.div`
  background:#ffff;

`;

const Course = ({ match }) => {

  
  const [course, setCourse] = useState({
    id: 1,
    title: '파이썬 자연어처리 배우기',
    thumb_path: 'https://source.unsplash.com/user/ilyapavlov/600x400',
    tags: ['#파이썬', '#자연어처리'],
    line_intro_1:'#텐서플로 200% 활용',
    line_intro_2:'#직관적인  언어PYTHON',
    line_intro_3:'인공지능의 시작과 끝맺음이 있는 공간',
    desc:`인공지능의 시작과 \n끝맺음이 있는 공간\n여기는 소개글을  쓰는공간입니다.\n앞에 두칸은 띄고 시작합니다<br/>최대4줄까주요지 보여줍니다`,
    estmt_time:'2시간 31분',
    instr_desc:'우렁이는 귀엽고, 착하고, 스마트하고 치킨을 좋아합니다!',
   instr_name:'에이림/이재화강사님',
  });
  
  const { courseId } = match.params;
  
  return (
    <Layout backImg = {backImg} title={course.tags.map((tag, i) => (i < 2 ? tag + ' ' : ''))}>
      <div className="Course">
        <CoursHeader>
          <div className="main">{course.line_intro_1}</div>
          <div className="main">{course.line_intro_2}</div>
          <div className="sub">{course.line_intro_3}</div> 
        </CoursHeader>
        <CourseInfo>
          <div>{course.title}</div>
          <div>{course.instr_name}</div>
          <div>{course.desc}</div>
        </CourseInfo>
        {/*<textarea value={JSON.stringify(location,null,2)} readOnly />*/}
      </div>
    </Layout>
  );
};

export default Course;
