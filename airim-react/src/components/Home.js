import React, { useState } from 'react';
import CourseList from './CourseList';
import styled from 'styled-components';
import Layout from './common/Layout';

const Home = () => {
  return (
    <Layout home>
      <div className="Home">
        <CourseList />
      </div>
    </Layout>
  );
};

export default Home;
