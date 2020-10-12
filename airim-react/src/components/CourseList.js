import React from 'react';
import { Link } from 'react-router-dom';

const CourseList = () => {
  
  return (
    <div className="CourseList">
      <div>
        <Link to="/Course">#파이썬 강의</Link>
      </div>
      <div>
        <Link to="/Course">#자연어처리 강의</Link>
      </div>
      
    </div>
  );
};

export default CourseList;