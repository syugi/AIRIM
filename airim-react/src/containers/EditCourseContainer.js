import React, { useState, Fragment } from 'react';
import MainLayout from 'components/MainLayout';
import EditCourse from 'components/EditCourse';

const EditCourseContainer = ({ match }) => {
  const { courseId } = match.params;
  const [course, setCourse] = useState({
    id: 1,
    title: '파이썬 자연어처리 배우기aaa', 
    image: 'https://source.unsplash.com/user/ilyapavlov/600x400',
    tags: ['#파이썬', '#자연어처리'],
    lineIntro1: '#텐서플로 200% 활용',
    lineIntro2: '#직관적인  언어PYTHON',
    lineIntro3: '인공지능의 시작과 끝맺음이 있는 공간',
    desc:
      '인공지능의 시작과 끝맺음이 있는 공간 여기는 소개글을 쓰는공간입니다.앞에 두칸은 띄고 시작합니다.최대4줄까주요지 보여줍니다',
    estmtTime: '2시간 31분',
    instrDesc: '우렁이는 귀엽고, 착하고, 스마트하고 치킨을 좋아합니다!',
    instrName: '에이림 / 이재화 강사님',
  });
  
  return (
    <MainLayout header>
      <EditCourse course={course}/>
    </MainLayout>
  );
};

export default EditCourseContainer;
