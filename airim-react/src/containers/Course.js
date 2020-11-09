import React from 'react';
import MainLayout from 'components/MainLayout';
import CourseInfo from 'components/CourseInfo';

const Home = () => {
  return (
    <MainLayout header={{title: "course"}}>
      <CourseInfo />
    </MainLayout>
  ); 
};

export default Home;
