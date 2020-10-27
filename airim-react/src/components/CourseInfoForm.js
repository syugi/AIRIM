import React,{useState,Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const CourseSaveForm = () => {
  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>강의 소개</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="lineIntro1"
            name="lineIntro1"
            label="한줄 소개 1"
            fullWidth
            autoComplete="line intro 1"
          />
          <TextField
            required
            id="lineIntro2"
            name="lineIntro2"
            label="한줄 소개 2"
            fullWidth
            autoComplete="line intro 2"
          />
          <TextField
            required
            id="lineIntro3"
            name="lineIntro3"
            label="한줄 소개 3"
            fullWidth
            autoComplete="line intro 3"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="estmtTime"
            name="estmtTime"
            label="예상 강의 시간"
            fullWidth
            placeholder="예)2시간 30분"
            autoComplete="instructor name"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" >카테고리</Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default CourseSaveForm;
