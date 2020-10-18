import React, { useState, useEffect } from 'react';
import useInputs from './common/useInputs';
import Layout from './common/Layout';

const CreateTalk = ({ history }) => {
  //렌더링 될때마다 호출됨
  useEffect(() => {
    console.log('렌더링이 완료되었습니다!');
    console.log({
      name,
      nickname,
    });
  });

  const [state, onChange] = useInputs({
    name: '',
    nickname: '',
  });

  const { name, nickname } = state;

  return (
    <Layout history={history}>
      <div>
        <div>
          <input
            name="name"
            placeholder="이름"
            onChange={onChange}
            value={name}
          />
          <input
            name="nickname"
            placeholder="닉네임"
            onChange={onChange}
            value={nickname}
          />
        </div>
        <div>
          <div>
            <b>이름: </b>
            {name}
          </div>
          <div>
            <b>닉네임: </b>
            {nickname}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateTalk;
