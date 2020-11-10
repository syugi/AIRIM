import React, { useState } from 'react';
import MainLayout from 'components/MainLayout';
import Instructor from 'components/Instructor'

const InstructorContainer = () => {
  const coursesArr = [
    {
      id: 1,
      title: '파이썬 자연어처리 배우기',
      instr_name: '에이림/이재화강사님',
      image: 'https://source.unsplash.com/user/ilyapavlov/600x400',
      tags: ['#파이썬', '#자연어처리'],
    },
    {
      id: 2,
      title: 'R머신러닝 자연어처리 배우기',
      instr_name: '에이림/이재화강사님',
      image: 'https://source.unsplash.com/user/erondu/600x400',
      tags: ['#R머신러닝', '#자연어처리'],
    },
    {
      id: 3,
      title: '파이썬 텐서플로우 배우기',
      instr_name: '에이림/이재화강사님',
      image: 'https://source.unsplash.com/user/_vickyreyes/600x400',
      tags: ['#파이썬', '#텐서플로우', '#이거이거'],
    },
  ];
  const [courses, setCourses] = useState(coursesArr);

  return (
    <MainLayout header>
      <Instructor courses={courses}/>
    </MainLayout>
  );
};

export default InstructorContainer;
