import React, { useState, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import TagRow from 'components/TagRow';

const CourseSaveForm = () => {
  const tagsArr = [
    { id: 1, text: '#파이썬', active: false },
    { id: 2, text: '#자연어처리', active: false },
    { id: 3, text: '#R머신러닝', active: false },
    { id: 4, text: '#텐서플로우', active: false },
    // { id: 5, text: '#파이썬', active: false },
    // { id: 6, text: '#자연어처리', active: false },
    // { id: 7, text: '#R머신러닝', active: false },
    { id: 8, text: '#이거이거', active: false },
  ];
  const [tags, setTags] = useState(tagsArr);

  const handleTagChange = (selectTag) => {
    setTags(
      tags.map((tag) =>
        tag.text === selectTag ? { ...tag, active: !tag.active } : tag,
      ),
    );
  };

  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        강의 정보
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="title"
            name="title"
            label="강의 제목"
            fullWidth
            autoComplete="course title"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="instrName"
            name="instrName"
            label="강사 명"
            fullWidth
            //placeholder=""
            autoComplete="instructor name"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">카테고리</Typography>
          <TagRow tags={tags} onClick={handleTagChange} />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default CourseSaveForm;
