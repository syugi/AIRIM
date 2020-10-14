import React, { useState } from 'react';
import CourseList from './CourseList';
import styled from 'styled-components';

const Home = () => {
  const IntroText = styled.div`
    width: 270px;
  `;
  return (
    <div className="Home">
           
      <IntroText>
        #경연: 고려·조선시대에, 임금이 학문이나 기술을 강론·연마하던일. 또는
        그런자리.
      </IntroText>
           <CourseList />
    </div>
  );
};

export default Home;
