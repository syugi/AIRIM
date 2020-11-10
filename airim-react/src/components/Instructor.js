import React from 'react';
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

const Instructor = ({ courses }) => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Link to={'/editcourse/new'}>
        <Button className={classes.button} variant="contained" color="primary">
          새 강의 등록
        </Button>
      </Link>

      <Grid container spacing={3}>
        {courses.map((course) => (
          <CourseList key={course.id} course={course} />
        ))}
      </Grid>
    </Container>
  );
};

export default Instructor;
