import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const backImg = 'https://source.unsplash.com/user/erondu/600x400';

const Layout = styled.div`
  background: ${(props) =>
    !props.backImg ? '#f2f3f5' : 'url(' + props.backImg + ')'};
  padding: 1em 0;
`;
const CoursHeader = styled.div`
  color: white;
  margin: 1em 0 2em -1em;
  width: 400px;
  padding: 2em 0;

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

const CourseBody = styled.div`
  background: #ffff;
  margin: 2em;
  padding: 2em;

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
    max-width: 400px;
    margin: auto;

    h3,
    h1 {
      margin: 10px;
    }
  }
`;

const Course = ({ course }) => {
  return (
    <Layout backImg={backImg}>
      <CoursHeader>
        <div className="main">{course.lineIntro1}</div>
        <div className="main">{course.lineIntro2}</div>
        <div className="sub">{course.lineIntro3}</div>
      </CoursHeader>
      <CourseBody>
        <div className="center">
          <h2>{course.title}</h2>
          <p className="name">{course.instrName}</p>
        </div>
        <div className="contents">
          <div className="center">
            <img src={course.image} alt="" />
          </div>

          <p>
            <h3># 사전 완톡 시간</h3>
            <div className="time">
              <h3>완톡 예상 시간</h3>
              <h1>{course.estmtTime}</h1>
            </div>
          </p>

          <p>
            <h3># 사전 톡 소개</h3>
            <div>{course.desc}</div>
          </p>

          <p>
            <h3># 저자 소개</h3>
            <div>{course.instrDesc}</div>
          </p>
          <div className="center">
            <Link to={'/chat/' + course.id}>
              <Button variant="contained" color="primary">
                학습하기
              </Button>
            </Link>
          </div>
        </div>
      </CourseBody>
      {/*<textarea value={JSON.stringify(location,null,2)} readOnly />*/}
    </Layout>
  );
};

export default Course;
