import React from 'react';
import CourseFilterList from 'components/CourseFilterList';
import Header from 'components/Header';

const Home = () => {
  return (
    <div>
      <Header isHome />
      <div>홈입니다</div>
      <CourseFilterList />
    </div>
  );
};

export default Home;
