import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ImageUpload from 'components/ImageUpload';

const useStyles = makeStyles((theme) => ({
  textArea: {
    width: '100%',
    border: '1px solid #CCC',
    background: '#FFF',
    margin: '5px 0',
    padding: '10px',
  },
}));

const EditCourseDetail = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        강의 요약
      </Typography>
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
          <Typography variant="h6">강의 상세내용</Typography>
          <TextareaAutosize
            className={classes.textArea}
            rowsMin={6}
            rowsMax={6}
            aria-label="maximum height"
            placeholder="강의 상세내용을 입력해주세요."
            defaultValue=""
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">저자 소개</Typography>
          <TextareaAutosize
            className={classes.textArea}
            rowsMin={6}
            rowsMax={6}
            aria-label="maximum height"
            placeholder="저자 소개를 입력해주세요."
            defaultValue=""
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">대표 이미지</Typography>
          <ImageUpload />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">배경 이미지</Typography>
          <ImageUpload />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default EditCourseDetail;
