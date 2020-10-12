import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './common/Layout';

const CreateCourse = () => {
  return (
     <div className="CreateCourse">
      <Layout >
        <header>
          <div>강의만들기</div>
        </header>

        <button ><Link to="/CreateTalk">톡 만들기</Link></button>   
       </Layout>
    </div>
  );
}

export default CreateCourse;