import React, { useState, useEffect } from 'react';
import useInputs from 'components/common/useInputs';
import Layout from 'components/common/Layout';

const EditTalk = () => {
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
    <Layout title="톡만들기">
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

export default EditTalk;
