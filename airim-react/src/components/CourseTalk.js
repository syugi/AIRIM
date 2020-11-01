import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ChapterTree from 'components/ChapterTree';

const useStyles = makeStyles({
  // root: {
  //   height: 240,
  //   flexGrow: 1,
  //   maxWidth: 400,
  // },
});

const chapterArr = [
  {
    id: 1,
    title: '1.파이썬',
    upperTalkId: '',
    sortSeq: 1,
  },
  {
    id: 2,
    title: '1-1.파이썬문법',
    upperTalkId: 1,
    sortSeq: 1,
  },
  {
    id: 3,
    title: '1-2.파이썬실습',
    upperTalkId: 1,
    sortSeq: 2,
  },
  {
    id: 5,
    title: '1-2-1.개발환경 세팅',
    upperTalkId: 3,
    sortSeq: 2,
  },
  {
    id: 4,
    title: '2.머신러닝',
    upperTalkId: '',
    sortSeq: 2,
  },
];

const Talk = () => {
  return <div>ㅇㅇ</div>;
};

const CourseTalk = () => {
  const [talks, setTalks] = useState([]);
  const [chapters, setChapters] = useState(chapterArr);

  return (
    <div>
      <ChapterTree chapters={chapters} />
      <Talk />
    </div>
  );
};

export default CourseTalk;
