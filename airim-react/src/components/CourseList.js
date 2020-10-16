import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import {MdClose} from "react-icons/md";


  const TagsBlock = styled.div`
    //background:red;
    display: flex;
    margin: 1em 0;
    flex-wrap: wrap;
    //justify-content:space-between;
  `;
  const Tag = styled.div`
    background: #011627;
display:flex;
align-items:center;
    //display:inline-block;
    padding: 0.5em;
    //margin: 0.4em;
    color: #ffff;
    cursor: pointer;
    margin-right: 0.3em;
    margin-bottom: 0.3em;

    &:hover {
      //background: #83949e;
    }

    ${(props) =>
      props.active &&
      css`
        background: blue;
      `}
  `;

  const CoursBlock = styled.div`
    //background:red;
    //display:inline-block;
    display: flex;
    //justify-content:space-between;
    flex-wrap: wrap;
    width: 100%;
    // float:right;
    margin: 0;
    //min-height: 75vh;
    white-space: normal;
    overflow-x: scroll;
    // margin-top:-70px;
  `;

  const Course = styled.div`
    margin-bottom: 1em;
    max-width: 18em;
    width: 45%;
    margin-right: 1rem;
  `;

  const CourseImg = styled.div`
    display: block;
    padding: 1em;
    height: 12em;

    h4 {
      color: #ffff;
      font-size: 1.5em;
      background: #011627;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 0.5em;
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

const CourseList = () => {
  
  const [tags, setTags] = useState([
    { id: 1, text: '#파이썬', active: false },
    { id: 2, text: '#자연어처리', active: false },
    { id: 3, text: '#R머신러닝', active: false },
    { id: 4, text: '#텐서플로우', active: false },
    { id: 5, text: '#파이썬', active: false },
    { id: 6, text: '#자연어처리', active: false },
    { id: 7, text: '#R머신러닝', active: false },
    { id: 8, text: '#이거이거', active: false },
  ]);
  
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
  const [orgCourses, setOrgCourses] = useState(courseArr); //초기화용 

  
  const handleTagClick = (selectTag) => {
    setTags(
      tags.map((tag) =>
        tag.id === selectTag.id 
        ? { ...tag, active: !tag.active } 
        :  { ...tag, active: false },
      ),
    );
    
    setCourses(
      !selectTag.active 
      ? orgCourses.filter(course => course.tags.includes(selectTag.text)) 
      : orgCourses
    )
  };

  return (
    <div>
      <TagsBlock>
        {tags.map((tag) => (
          <Tag
            key={tag.id}
            onClick={() => handleTagClick(tag)}
            active={tag.active}
          >
            {tag.text}
            {/*{tag.active && <MdClose style={{marginLeft:'0.1em'}}/>}*/}
          </Tag>
        ))}
      </TagsBlock>
      <CoursBlock>
        {courses.map((course) =>           
            <Course key={course.id}>
              <Link to={"/Course/"+course.id}>
                <CourseImg
                  style={{ backgroundImage: 'url(' + course.thumb_path + ')' }}
                  >
                  <h4>{course.tags.map((tag, i) => (i < 2 ? tag + ' ' : ''))}</h4>
                </CourseImg>
                </Link>
              <CourseInfo>
                <h2>{course.title}</h2>
                <p>에이림/이재화강사님</p>
                <p>{JSON.stringify(course.visible)}</p>
                <Link to={"/Course/"+course.id}>
                  <button>학습하기</button>
                </Link>
              </CourseInfo>
            </Course>
        )}
      </CoursBlock>
         
    </div>
  );
};

export default CourseList;
