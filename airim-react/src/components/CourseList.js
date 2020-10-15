import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CourseList = () => {
  const [tags, setTags] = useState([
    { id: 1, text: '#파이썬' },
    { id: 2, text: '#자연어처리' },
    { id: 3, text: '#R머신러닝' },
    { id: 4, text: '#텐서플로우' },
    { id: 5, text: '#파이썬' },
    { id: 6, text: '#자연어처리' },
    { id: 7, text: '#R머신러닝' },
    { id: 8, text: '#이거이거' },
  ]);
  
  
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: '파이썬 자연어처리 배우기',
      thumb_path: 'https://source.unsplash.com/user/ilyapavlov/600x400',
      tags: ['#파이썬','#자연어처리'],
      visible:true,
    },
    {
      id: 2,
      title: 'R머신러닝 자연어처리 배우기',
      thumb_path: 'https://source.unsplash.com/user/erondu/600x400',
      tags: ['#R머신러닝','#자연어처리'],
      visible:true,
    },
    {
      id: 3,
      title: '파이썬 텐서플로우 배우기',
      thumb_path: 'https://source.unsplash.com/user/_vickyreyes/600x400',
      tags: ['#파이썬','#텐서플로우','#이거이거'],
      visible:true,
    },
  ]);
  const orgCourses =  courses;

  const TagsBlock = styled.div`
    //background:red;
    display: flex;
    margin: 1em 0;
    flex-wrap: wrap;
    //justify-content:space-between;
  `;
  const Tag = styled.div`
    background: #011627;
    //display:inline-block;
    padding: 0.5em;
    //margin: 0.4em;
    color: #ffff;
    cursor: pointer;
    margin-right: 0.3em;
    margin-bottom: 0.3em;

    &:hover {
      background: #83949e;
    }
  `;

  const CoursBlock = styled.div`
    //background:red;
    //display:inline-block;
    display:flex;
    //justify-content:space-between;
    flex-wrap: wrap;
    width:100%;
    // float:right;
    margin:0;
    //min-height: 75vh;
    white-space:normal;
    overflow-x: scroll;
    // margin-top:-70px;
  }`;

  const Course = styled.div`
    margin-bottom: 1em;
    max-width:18em;
    width:45%;
    margin-right: 1rem;
  `;
  
  const CourseImg = styled.div`
    display: block;
    padding: 1em;
    height:12em;
    
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
   const handleTagClick = (tag) => {
    
     console.log(orgCourses);
     console.log(courses);
    setCourses(orgCourses.filter(course => course.tag_1 == tag || course.tag_2 == tag));
     
      // courses.map(course =>
       
      //  const newCouse = (course.tag_1 === tag || course.tag_2 === tag) ? { ...course, visible: true } : { ...course, visible: false }
      //  setCourses(
      //   )
      // );
    
       
   //   setCourses(orgCourses.filter(user => course.tag_1 == tag || course.tag_2 == tag));
// course
//      setCourses(
//       courses.map(course =>
//         user.id === id ? { ...user, active: !user.active } : user
//       )
//     );
     
     
//      //alert(tag);
//      courses.map(course => {
//        let visible = false; 
//        if(course.tag_1 == tag || course.tag_2 == tag){
//          visible  = true; 
//        }
//      });
     
//      setCourses([
//          ...courses,
//          { visible: visible}
//        ]);
     
   };
  // const handleTagClick =(tag) => {
  //   alert('a');
  // };

  return (
    <div>
      <TagsBlock>
        {tags.map((tag) => (
          <Tag key={tag.id} onClick={() => handleTagClick(tag.text)}>{tag.text}</Tag>
        ))}
      </TagsBlock>
      <CoursBlock>
        {courses.map((course) => (
          <Course key={course.id}>
                         
            <CourseImg
              style={{ backgroundImage: 'url(' + course.thumb_path + ')' }}
            >
              <h4>
                {course.tags.map((tag,i) => (
                  i<2 ? tag + ' ' : ''
                ))}
                
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
