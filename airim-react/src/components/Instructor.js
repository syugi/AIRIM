import React from 'react';
import CourseList from 'components/InstructorCourseList';
import Header from 'components/Header';

const Instructor = () => {
  return (
    <div>
      <Header title={'내강의 관리'} />
      <div>내 강의 페이지입니다</div>
      <CourseList />
    </div>
  );
};

export default Instructor;
