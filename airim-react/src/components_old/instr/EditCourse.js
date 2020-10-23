import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import Layout from 'components/common/Layout';
import Course from 'components/Course';

const FormContent = styled.form`
  max-width: 800px;  
background: #ffff;
  padding: 1em;
//display: inline-block;
	//width: auto;
//	vertical-align: middle;
margin: 0 auto;
  h4{
    margin:25px 0 10px 0;
    font-size:17px;
font-weight: bold;
  }

input{
  background:#f2f3f5;
  outline: none;
  //display: block;
 // background: rgba(#f2f3f5, 0.1);
  width: 80%;
  border: 0;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 10px 15px;
}

textarea{
  width: 80%;
height:100px;
}

button{
  margin-right: 10px;
}
`;

const FormGroup= styled.form`
`;


const TagsBlock = styled.div`
  //background:red;
  display: flex;
  margin: 1em 0;
  flex-wrap: wrap;
  //justify-content:space-between;
`;
const Tag = styled.div`
  //background: #011627;
  display: flex;
  align-items: center;
  //display:inline-block;
  padding: 0.5em;
  //margin: 0.4em;
 / /color: #ffff;
  cursor: pointer;
  margin-right: 0.3em;
  margin-bottom: 0.3em;
border: 1px solid transparent;
background-color: #f7f7f7;
  border-color: #dedede;
&:hover {
    //background: #83949e;
  }

  ${(props) =>
    props.active &&
    css`
      background: #011627;
color: #ffff;
    `}
`;

const ButtonBlock = styled.div`
 display: flex;
 text-align:center;
  margin:20px 0 10px 0;
  width:100%;
  justify-content:center;
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
          : tag//{ ...tag, active: false },
      ),
    );
  }
   
  return (
      <Layout title="새 강좌 만들기">
        <FormContent>
          <h4>강의 제목</h4>
          <input type="text" placeholder="강의 제목을 입력해 주세요"/>
          
          <h4>강사명</h4>
          <input style={{width:'150px'}} type="text"/> / 이재화 강사님      
          
          <h4>소개페이지 한줄 태그</h4>
          <input style={{marginBottom:'10px'}} type="text" placeholder="내용을 입력해주세요"/>
          <input type="text" placeholder="내용을 입력해주세요"/>
          
          <h4>한줄 설명</h4>
          <input type="text" placeholder="내용을 입력해주세요"/>
          
          <h4>강의 카테고리 태그 (최대 2개)</h4>
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

          <h4>배경이미지 선택</h4>
          <input type="file" name="myfiles"/>
          
          <h4>썸네일 등록</h4>
          <input type="file" name="myfiles"/>

          <h4>완톡예상시간</h4>
          <input style={{width:'150px'}} type="text" placeholder="예) 2시간 30분 "/>
          
          <h4>사전톡소개</h4>
          <textarea />
          
          <h4>저자소개</h4>
          <textarea />
       
          <ButtonBlock>
            <button className="btn gray">미리보기</button>
            <Link to= "/instr/EditTalk"><button className="btn blue">저장 후 다음이동               </button></Link> {/*type="submit"*/}
          </ButtonBlock>
        </FormContent>
      
      </Layout>
  );
};

export default EditCourse;
