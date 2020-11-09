import React , {useState} from 'react';
import MainLayout from 'components/MainLayout';
import CourseList from 'components/CourseList';

const coursesArr = [
    {
      id: 1,
      title: '파이썬 자연어처리 배우기',
      instrName: '에이림/이재화강사님',
      image: 'https://source.unsplash.com/user/ilyapavlov/600x400',
      tags: ['#파이썬', '#자연어처리'],
      lineIntro1: '#텐서플로 200% 활용',
      lineIntro2: '#직관적인  언어PYTHON',
      lineIntro3: '인공지능의 시작과 끝맺음이 있는 공간',
      desc:
        '인공지능의 시작과 끝맺음이 있는 공간 여기는 소개글을 쓰는공간입니다.앞에 두칸은 띄고 시작합니다.최대4줄까주요지 보여줍니다',
      estmtTime: '2시간 31분',
      instrDesc: '우렁이는 귀엽고, 착하고, 스마트하고 치킨을 좋아합니다!',
    },
    {
      id: 2,
      title: 'R머신러닝 자연어처리 배우기',
      instrName: '에이림/이재화강사님',
      image: 'https://source.unsplash.com/user/erondu/600x400',
      tags: ['#R머신러닝', '#자연어처리'],
      lineIntro1: '#텐서플로 200% 활용',
      lineIntro2: '#직관적인  언어PYTHON',
      lineIntro3: '인공지능의 시작과 끝맺음이 있는 공간',
      desc:
        '인공지능의 시작과 끝맺음이 있는 공간 여기는 소개글을 쓰는공간입니다.앞에 두칸은 띄고 시작합니다.최대4줄까주요지 보여줍니다',
      estmtTime: '2시간 31분',
      instrDesc: '우렁이는 귀엽고, 착하고, 스마트하고 치킨을 좋아합니다!',
    },
    {
      id: 3,
      title: '파이썬 텐서플로우 배우기',
      instrName: '에이림/이재화강사님',
      image: 'https://source.unsplash.com/user/_vickyreyes/600x400',
      tags: ['#파이썬', '#텐서플로우', '#이거이거'],
      lineIntro1: '#텐서플로 200% 활용',
      lineIntro2: '#직관적인  언어PYTHON',
      lineIntro3: '인공지능의 시작과 끝맺음이 있는 공간',
      desc:
        '인공지능의 시작과 끝맺음이 있는 공간 여기는 소개글을 쓰는공간입니다.앞에 두칸은 띄고 시작합니다.최대4줄까주요지 보여줍니다',
      estmtTime: '2시간 31분',
      instrDesc: '우렁이는 귀엽고, 착하고, 스마트하고 치킨을 좋아합니다!',
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

const Home = () => {
  
  const [tags, setTags] = useState(tagsArr);
  const [courses, setCourses] = useState(coursesArr);
  
  const onTagChange = (selectTag) => {
    setTags(
      tags.map(
        (tag) =>
          tag.text === selectTag ? { ...tag, active: !tag.active } : tag,
        // : { ...tag, active: false },
      ),
    );
  };
  
  return (
    <MainLayout header={{noBackBtn: true}}>
      <CourseList tags={tags} courses={courses} onTagChange={onTagChange}/>
    </MainLayout>
  ); 
};

export default Home;
