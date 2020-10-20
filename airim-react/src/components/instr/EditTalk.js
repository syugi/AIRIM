import React, { useState, useEffect } from 'react';
import useInputs from 'components/common/useInputs';
import styled, { css } from 'styled-components';
import Layout from 'components/common/Layout';


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
  
  const [state, onChange] = useInputs({
      talks : [{
        talker: '',
        type:'',
        content:'',
        //file_path:'',
      }]
  });

  const { name, nickname } = state;

  return (
    <Layout title="톡만들기">
      <EditTalkBlock>
        <TalkBlock>
        
        </TalkBlock>
        <InputBlock>
        <input
            name="inputTalk"
            //onChange={onChange}
            //value={nickname}
          />
          <button className="btn gray">등록</button>
        </InputBlock>
      </EditTalkBlock>
    </Layout>
  );
};

export default EditTalk;
