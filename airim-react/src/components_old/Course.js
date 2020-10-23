import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import Layout from 'components/common/Layout';

const backImg = 'https://source.unsplash.com/user/erondu/600x400';

const CoursHeader = styled.div`
  color: white;
  margin: 1em 0 2em -1em;
  width: 400px;
  padding: 1em 0;
  div {
  }
  .main {
    font-size: 1.3em;
    font-weight: bold;
    background: black;
    padding: 0.4em 2em;
    margin-bottom: 0.5em;
  }

  .sub {
    text-align: right;
  }
`;

const CourseInfo = styled.div`
  background: #ffff;
  padding: 1em;

  .name {
    font-weight: 300;
    font-size: 13px;
    margin: 0;
    margin-top: -0.5em;
  }

  .contents {
    margin: 1em 0;
  }

  .contents > img,
  p {
    padding: 1em 0;
  }

  .time {
    text-align: center;
    background: #e5e8ea;
    padding: 0.1em;
    border-radius: 10px;

    h3,
    h1 {
      margin: 10px;
    }
  }
`;

const Course = ({ match }) => {
  const [course, setCourse] = useState({
    id: 1,
    title: '파이썬 자연어처리 배우기',
    thumb_path: 'https://source.unsplash.com/user/ilyapavlov/600x400',
    tags: ['#파이썬', '#자연어처리'],
    line_intro_1: '#텐서플로 200% 활용',
    line_intro_2: '#직관적인  언어PYTHON',
    line_intro_3: '인공지능의 시작과 끝맺음이 있는 공간',
    desc:
      '인공지능의 시작과 끝맺음이 있는 공간 여기는 소개글을 쓰는공간입니다.앞에 두칸은 띄고 시작합니다.최대4줄까주요지 보여줍니다',
    estmt_time: '2시간 31분',
    instr_desc: '우렁이는 귀엽고, 착하고, 스마트하고 치킨을 좋아합니다!',
    instr_name: '에이림 / 이재화 강사님',
  });

  const { courseId } = match.params;

  return (
    <Layout
      backImg={backImg}
      title={course.title}
      //title={course.tags.map((tag, i) => (i < 2 ? tag + ' ' : ''))}
    >
      <div className="Course">
        <CoursHeader>
          <div className="main">{course.line_intro_1}</div>
          <div className="main">{course.line_intro_2}</div>
          <div className="sub">{course.line_intro_3}</div>
        </CoursHeader>
        <CourseInfo>
          <div className="center">
            <h2>{course.title}</h2>
            <p className="name">{course.instr_name}</p>
          </div>
          <div className="contents">
            <div className="center">
              <img src={course.thumb_path} alt="" />
            </div>

            <p>
              <h3># 사전 완톡 시간</h3>
              <div className="time">
                <h3>완톡 예상 시간</h3>
                <h1>{course.estmt_time}</h1>
              </div>
            </p>

            <p>
              <h3># 사전 톡 소개</h3>
              <div>{course.desc}</div>
            </p>

            <p>
              <h3># 저자 소개</h3>
              <div>{course.instr_desc}</div>
            </p>
          </div>
        </CourseInfo>
        {/*<textarea value={JSON.stringify(location,null,2)} readOnly />*/}
      </div>
    </Layout>
  );
};

export default Course;
