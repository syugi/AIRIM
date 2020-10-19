import React, { useState } from 'react';
import CourseList from 'components/CourseList';
import styled from 'styled-components';
import Layout from 'components/common/Layout';

const Home = () => {
  return (
    <Layout home>
      <div>
        <CourseList />
      </div>
    </Layout>
  );
};

export default Home;
