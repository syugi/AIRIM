import React from 'react';

const CreateTalk = ({ type, content, onChange, onCreate }) => {
//function CreateTalk({ type, content, onChange, onCreate }) {
  return (
    <div>
      <input
        name="type"
        placeholder="타입"
        onChange={onChange}
        value={type}
      />
      <input
        name="content"
        placeholder="내용"
        onChange={onChange}
        value={content}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default CreateTalk;