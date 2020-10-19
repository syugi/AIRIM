import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import Layout from 'components/common/Layout';
import Course from 'components/Course';


const TagsBlock = styled.div`
  //background:red;
  display: flex;
  margin: 1em 0;
  flex-wrap: wrap;
  //justify-content:space-between;
`;
const Tag = styled.div`
  background: #011627;
  display: flex;
  align-items: center;
  //display:inline-block;
  padding: 0.5em;
  //margin: 0.4em;
  color: #ffff;
  cursor: pointer;
  margin-right: 0.3em;
  margin-bottom: 0.3em;

  &:hover {
    //background: #83949e;
  }

  ${(props) =>
    props.active &&
    css`
      background: blue;
    `}
`;

const EditCourse = () => {
  
  const [tags, setTags] = useState([
    { id: 1, text: '#파이썬', active: false },
    { id: 2, text: '#자연어처리', active: false },
    { id: 3, text: '#R머신러닝', active: false },
    { id: 4, text: '#텐서플로우', active: false },
    { id: 5, text: '#파이썬', active: false },
    { id: 6, text: '#자연어처리', active: false },
    { id: 7, text: '#R머신러닝', active: false },
    { id: 8, text: '#이거이거', active: false },
  ]);
  
   const handleTagClick = (selectTag) => {
    setTags(
      tags.map((tag) =>
        tag.id === selectTag.id
          ? { ...tag, active: !tag.active }
          : { ...tag, active: false },
      ),
    );
  }
   
  return (
      <Layout title="강좌 만들기">
        <div>
          <div>
            <div>강의 제목</div>
            <input type="text"/>
            <div>강사명</div>
            <input type="text"/>
            
            
            <div>소개페이지 한줄 태그</div>
            <input type="text"/>
            <input type="text"/>
            <div>한줄 설명</div>
            <input type="text"/>
            <div>강의카테고리 선택 (최대 2개)</div>
            <TagsBlock>
              {tags.map((tag) => (
                <Tag
                  key={tag.id}
                  onClick={() => handleTagClick(tag)}
                  active={tag.active}
                >
                  {tag.text}
                  {/*{tag.active && <MdClose style={{marginLeft:'0.1em'}}/>}*/}
                </Tag>
              ))}
            </TagsBlock>
            
            <div>배경이미지 선택</div>
            <div>썸네일 등록</div>
            
            <div>완톡예상시간</div>
            <input type="text"/>
            <div>사전톡소개</div>
            <textarea />
            <div>저자소개</div>
            <textarea />
          
          </div> 
        <button>미리보기</button>
          <Link to="/instr/editTalk"><button>저장 후 다음이동</button></Link>
        </div>
      
      </Layout>
  );
};

export default EditCourse;
