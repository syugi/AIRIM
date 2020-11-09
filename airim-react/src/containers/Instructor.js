import React, { useState } from 'react';
import MainLayout from 'components/MainLayout';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  button: {
    marginBottom: theme.spacing(2),
  },
}));

const CourseList = ({ course }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href={'/editcourse/' + course.id}>
        <Card className={classes.card}>
          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={course.image}
              title={course.imageTitle}
            />
          </Hidden>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h6">
                {course.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {course.instr_name}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                description{course.description}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                <Link to={'/chat/' + course.id + '?edit=true'}>톡수정</Link>
              </Typography>
            </CardContent>
          </div>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

const Instructor = () => {
  const coursesArr = [
    {
      id: 1,
      title: '파이썬 자연어처리 배우기',
      instr_name: '에이림/이재화강사님',
      image: 'https://source.unsplash.com/user/ilyapavlov/600x400',
      tags: ['#파이썬', '#자연어처리'],
    },
    {
      id: 2,
      title: 'R머신러닝 자연어처리 배우기',
      instr_name: '에이림/이재화강사님',
      image: 'https://source.unsplash.com/user/erondu/600x400',
      tags: ['#R머신러닝', '#자연어처리'],
    },
    {
      id: 3,
      title: '파이썬 텐서플로우 배우기',
      instr_name: '에이림/이재화강사님',
      image: 'https://source.unsplash.com/user/_vickyreyes/600x400',
      tags: ['#파이썬', '#텐서플로우', '#이거이거'],
    },
  ];
  const [courses, setCourses] = useState(coursesArr);

  const classes = useStyles();
  return (
    <MainLayout header>
      <Container maxWidth="md">
        <Link to={'/editcourse/new'}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
          >
            새 강의 등록
          </Button>
        </Link>

        <Grid container spacing={3}>
          {courses.map((course) => (
            <CourseList key={course.id} course={course} />
          ))}
        </Grid>
      </Container>
    </MainLayout>
  );
};

export default Instructor;
