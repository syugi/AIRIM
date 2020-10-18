import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './common/Layout';

const InstrCourseList = ({ history }) => {
  return (
    <Layout history={history}>
      <button>
        <Link to="/CreateCourse">새강좌 만들기</Link>
      </button>
      <div>
        <ul>
          <li>파이썬 배우기</li>
          <li>R 배우기</li>
        </ul>
      </div>
    </Layout>
  );
};

export default InstrCourseList;
