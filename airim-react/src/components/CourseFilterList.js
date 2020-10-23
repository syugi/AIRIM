import React, { useState }  from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({course}) => (
    <div>
      <Link>
        <image>
          <div>{course.tags.map((tag, i) => (i < 2 ? tag + ' ' : ''))}</div>
        </image>
      </Link>

      <div>
        <div>{course.title}</div>
        <div>{course.instrName}</div>
        <Link to={'/course/'+course.id}><button>학습하기</button></Link>
      </div>
    
    </div>
);

const CourseGrid = ({courses, tags}) => {
  
  const rows = [];
  const filterTags = tags.filter(tag => tag.active);
  
  courses.forEach( course => {
    let isfilter = false; 
    filterTags.forEach(tag => {
      if(course.tags.indexOf(tag.text) > -1){
        isfilter = true;
        return;
      }
    });
    
    if(isfilter){
      rows.push(<CourseCard key={course.id} course={course}/>);
    }
  });
  
  return (
    <div>{rows}</div>
  );
};


const FilterRow = ({tags, onClick}) => (
  <div>
    {tags.map((tag) => (
        <div
          key={tag.id}
          onClick={() => onClick(tag.text)}
          active={tag.active}
        >
          {tag.text}{JSON.stringify(tag.active)}
          {/*{tag.active && <MdClose style={{marginLeft:'0.1em'}}/>}*/}
        </div>
      ))}
  </div>
);


const CourseFilterList = () => {  
  
  const coursesArr = [
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
  
  const tagsArr = [
    { id: 1, text: '#파이썬', active: false },
    { id: 2, text: '#자연어처리', active: false },
    { id: 3, text: '#R머신러닝', active: false },
     { id: 4, text: '#텐서플로우', active: false },
    // { id: 5, text: '#파이썬', active: false },
    // { id: 6, text: '#자연어처리', active: false },
    // { id: 7, text: '#R머신러닝', active: false },
    { id: 8, text: '#이거이거', active: false },
  ];
  
  const [tags, setTags] = useState(tagsArr);
  const [courses, setCourses] = useState(coursesArr); 
    
  const handleTagChange = (selectTag) => {
    setTags(
      tags.map((tag) =>
        tag.text === selectTag
          ? { ...tag, active: !tag.active }
          : tag
          // : { ...tag, active: false },
      ),
    );
  };
  
  return (
    <div>
      <FilterRow tags={tags} onClick={handleTagChange}/>
      <CourseGrid courses={courses} tags={tags} />
    </div>
  
  );
};

export default CourseFilterList;
