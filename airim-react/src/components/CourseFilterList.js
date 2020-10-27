import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import styled, { css } from 'styled-components';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import TagRow from 'components/TagRow';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  cardtitle:{
     color: '#ffff',
     background: '#011627',
     backgroundColor: 'rgba(0, 0, 0, 0.5)',
     padding:theme.spacing(1),
  }
}));

const CourseCard = ({ course }) => {
  const classes = useStyles();
  return (
    <Grid item key={course} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardActionArea component="a" href={'/course/'+course.id}>
          <CardMedia
            className={classes.cardMedia}
            image={course.image}
            title="Image title"
          >
            <Typography  className={classes.cardtitle}>
              {course.tags.map((tag, i) => (i < 2 ? tag + ' ' : ''))}
            </Typography>
          </CardMedia>
       
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h6" component="h2">
            {course.title}
          </Typography>
          <Typography>
            {course.instrName}
          </Typography>
        </CardContent>
       </CardActionArea>
        <CardActions>
          <Link to={'/course/' + course.id}>
            <Button variant="contained" size="small" color="primary">
              학습하기
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

const CourseGrid = ({ courses, tags }) => {
  const rows = [];
  const filterTags = tags.filter((tag) => tag.active);
  const classes = useStyles();
  
  courses.forEach((course) => {
    let isfilter = false;
    if (filterTags.length) {
      filterTags.forEach((tag) => {
        if (course.tags.indexOf(tag.text) > -1) {
          isfilter = true;
          return;
        }
      });
    } else {
      isfilter = true;
    }

    if (isfilter) {
      rows.push(<CourseCard key={course.id} course={course} />);
    }
  });

  return (
      <Grid className={classes.cardGrid} container spacing={4}>
        {rows}
      </Grid>
  );
};

const CourseFilterList = () => {
  const coursesArr = [
    {
      id: 1,
      title: '파이썬 자연어처리 배우기',
      instrName:'에이림/이재화강사님',
      image: 'https://source.unsplash.com/user/ilyapavlov/600x400',
      tags: ['#파이썬', '#자연어처리'],
    },
    {
      id: 2,
      title: 'R머신러닝 자연어처리 배우기',
      instrName:'에이림/이재화강사님',
      image: 'https://source.unsplash.com/user/erondu/600x400',
      tags: ['#R머신러닝', '#자연어처리'],
    },
    {
      id: 3,
      title: '파이썬 텐서플로우 배우기',
      instrName:'에이림/이재화강사님',
      image: 'https://source.unsplash.com/user/_vickyreyes/600x400',
      tags: ['#파이썬', '#텐서플로우', '#이거이거'],
    },
  ];

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
  const [courses, setCourses] = useState(coursesArr);

  const handleTagChange = (selectTag) => {
    setTags(
      tags.map(
        (tag) =>
          tag.text === selectTag ? { ...tag, active: !tag.active } : tag,
        // : { ...tag, active: false },
      ),
    );
  };
   
  const classes = useStyles();
  
  return (
     <Container maxWidth="md">
      <TagRow tags={tags} onClick={handleTagChange} />
      <CourseGrid courses={courses} tags={tags} />
    </Container>
  );
};

export default CourseFilterList;
