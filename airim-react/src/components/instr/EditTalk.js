import React, { useState, useEffect } from 'react';
import useInputs from 'components/common/useInputs';
import styled, { css } from 'styled-components';
import Layout from 'components/common/Layout';
import Button from '@material-ui/core/Button';

const TalkListBlock = styled.div`
`;

const EditTalkBlock = styled.div`
  width: 400px;
  height: 700px;
background: #ffff;
  padding: 1em;
margin: 10px;
`;
const TalkBlock = styled.div`
`;
const InputBlock = styled.div`
  display:flex;
`;
const EditTalk = () => {
  const [talker, setTalkers] = useState([
   { 
    id:11,
    name:'선생님',
    position:'left',
    },
   {
    id:22,
    name:'학생',
    position:'right',
  }
]);
  const [talks, setTalks] = useState([
    {
      id: 1,
      type:'msg',
      content:'안녕하세요',  
      talkerId: 11,
      talkerName:'선생님',
      position:'left',
    },
    {
      id: 2,
      type:'msg',
      content:'네 안녕하세요',
      talkerId: 22,
      talkerName:'학생',
      position:'right',
    },
    {
      id: 3,
      type:'msg',
      content:'잘부탁드립니다',
      talkerId: 22,
      talkerName:'학생',
      position:'right',
    }
  ]);
                        
  const [inputText, setInputText] = useState('');
  const [nextTalkId, setNextTalkId] = useState(4);

  const handleAddTalk = () => {
    
    const nextTalks = talks.concat({
      id:nextTalkId,
      type:'msg',
      content:inputText,
      talkerId : 11,
      talkerName:'선생님',
      position: 'left',
    });
    setNextTalkId(nextTalkId+1);
    setTalks(nextTalks);
    setInputText('');
   
  };
  
  const onChange = (e) => {
    setInputText(e.target.value);
  };
  
  const onChangeTalk = (e) => {
    //alert("id : "+e.target.key+" value : "+e.target.value);
    //talks.map(talk => (talk.id === id ? {...talk, content:}))
  };
  
  return (
    <Layout title="톡만들기">
      <div style={{display:'flex'}}>
        <TalkListBlock>
          {/*{talks.map((talk) => (
              <input key={talk.id} type="text" value={talk.content} onChange={onChangeTalk(talk.id)}/>
            ))} */}
        </TalkListBlock>
        <EditTalkBlock>
          <TalkBlock>
            <ul>
              {talks.map((talk) => (
                <li key={talk.id}>
                  <div style={{display:'flex', }}>
                    <div>{talk.talkerName} : </div>
                    {talk.content}
                  </div>
                </li>    
              ))}
            </ul>
          </TalkBlock>
          <InputBlock>
          <input
              name="inputText"
              onChange={onChange}
              value={inputText}
            />
            <button className="btn gray" onClick={handleAddTalk}>등록</button>
          </InputBlock>
          <Button variant="contained" color="primary">
      Hello World
    </Button>
        </EditTalkBlock>
      </div>
    </Layout>
  );
};

export default EditTalk;
