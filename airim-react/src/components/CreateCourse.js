import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './common/Layout';

const CreateCourse = ({ history }) => {
  return (
    <div className="CreateCourse">
      <Layout history={history}>
        <header>
          <div>강의만들기</div>
        </header>
        <button>
          <Link to="/CreateTalk">톡 만들기</Link>
        </button>
      </Layout>
         
    </div>
  );
};

export default CreateCourse;
