import React, { useState }  from 'react';
import { Link } from 'react-router-dom';

const CourseList = () => {
  
  const [tags, setTags] = useState([
    { id: 1, text: '파이썬' },
    { id: 2, text: '자연어처리' },
    { id: 3, text: 'R머신러닝' },
    { id: 4, text: '이거이거' },
  ]);

  const tagList = tags.map((tag) => <li key={tag.id}>{tag.text}</li>);
  
  return (
    <div className="CourseList">
        
      <div>
        <ul>{tagList}</ul>
      </div>       
                             
      <div>
        <Link to="/Course">#파이썬 강의</Link>
        <Link to="/Course">#자연어처리 강의</Link>
      </div>
      
    </div>
  );
};

export default CourseList;