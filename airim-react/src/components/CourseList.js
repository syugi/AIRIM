import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaPython } from 'react-icons/fa';

const CourseList = () => {
  const [tags, setTags] = useState([
    { id: 1, text: '파이썬' },
    { id: 2, text: '자연어처리' },
    { id: 3, text: 'R머신러닝' },
    { id: 4, text: '텐서플로우' },
    { id: 5, text: '파이썬' },
    { id: 6, text: '자연어처리' },
    { id: 7, text: 'R머신러닝' },
    { id: 8, text: '이거이거' },
  ]);

  const [courses, setCourses] = useState([
    {
      id: 1,
      title: '파이썬 자연어처리 배우기',
      thumb_path: 'https://source.unsplash.com/user/ilyapavlov/600x400',
      tag_1: '파이썬',
      tag_2: '자연어처리',
    },
    {
      id: 2,
      title: 'R머신러닝 자연어처리 배우기',
      thumb_path: 'https://source.unsplash.com/user/erondu/600x400',
      tag_1: 'R머신러닝',
      tag_2: '자연어처리',
    },
    {
      id: 3,
      title: '파이썬 텐서플로우 배우기',
      thumb_path: 'https://source.unsplash.com/user/_vickyreyes/600x400',
      tag_1: '파이썬',
      tag_2: '텐서플로우',
    },
  ]);

  const TagsBlock = styled.div`
    //background:#011627;
    display: flex;
    margin: 1em 0;
    flex-wrap: wrap;
    //justify-content:space-between;
  `;
  const Tag = styled.div`
    background: #011627;
    //display:inline-block;
    padding: 0.5em;
    margin: 0.4em;
    color: #ffff;
    cursor: pointer;
    &:hover {
      background: #83949e;
    }
  `;

  const Course = styled.div`
    margin-bottom: 1em;
  `;

  const CoursBlock = styled.div`
     display:inline-block;
     width:100%;
      // float:right;
     margin:0;
     min-height: 75vh;
     white-space:normal;
     overflow-x: scroll;
      // margin-top:-70px;
     }`;

  const CourseImg = styled.div`
    display: block;
    padding: 30px;
    h4 {
      color: #ffff;
      font-size: 36px;
      background: #011627;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 0.5em;
      //word-break:keep-all;
    }
  `;

  const CourseInfo = styled.div`
    h2 {
      margin-bottom: 6px;
    }
    p {
      font-weight: 300;
      font-size: 13px;
      margin: 0;
      //margin-top:-15px;
    }

    button {
      color: white;
      font-weight: bold;
      outline: none;
      border: none;
      cursor: pointer;
      background: #011627;
      padding: 0.5em 1em;
      margin-top: 1em;
    }
  `;

  return (
    <div>
      <TagsBlock>
        {tags.map((tag) => (
          <Tag key={tag.id}>#{tag.text}</Tag>
        ))}
      </TagsBlock>
      <CoursBlock>
        {courses.map((course) => (
          <Course key={course.id}>
                         
            <CourseImg
              style={{ backgroundImage: 'url(' + course.thumb_path + ')' }}
            >
              <h4>
                #{course.tag_1} #{course.tag_2}
              </h4>
            </CourseImg>
            <CourseInfo>
              <h2>{course.title}</h2>
              <p>에이림/이재화강사님</p>
              <Link to="/Course">
                <button>학습하기</button>
              </Link>
            </CourseInfo>
          </Course>
        ))}
      </CoursBlock>
         
    </div>
  );
};

export default CourseList;
