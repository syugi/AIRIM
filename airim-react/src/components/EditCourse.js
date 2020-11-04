import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CourseInfo from 'components/CourseInfo';
import CourseForm from 'components/CourseForm';
import CourseInfoForm from 'components/CourseInfoForm';

const chatsArr = [
  {
     id:0,
    talker:'',
    type:'chapter',
    position:'center',
    content:'1.소개',
  },
  {
     id:1,
    talker:'선생님',
    type:'msg',
    position:'left',
    content:'안녕하세요,'
  },
  {
     id:2,
  talker:'선생님',
  type:'msg',
    position:'left',
  content:'여기 오신것을 환영합니다'
  },
  {
     id:3,
    talker:'학생',
    type:'msg',
    position:'right',
    color:'yellow',
    content:'잘부탁드립니다'
  },
  {
     id:4,
  talker:'',
  type:'notice',
    position:'center',
  content:'이제시작합니다!'
  },
  {
     id:5,
  talker:'',
  type:'chapter',
    position:'center',
  content:'2.강의'
  },
] 

const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['강의정보', '강의소개', '미리보기'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <CourseForm />;
    case 1:
      return <CourseInfoForm />;
    case 2:
      return <CourseInfo />;
    default:
      throw new Error('Unknown step');
  }
}

const EditCourse = ({ match }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const { courseId } = match.params;
  
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h4" align="center">
          새 강의 등록 {courseId}
        </Typography>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Fragment>
          {activeStep === steps.length ? (
            <Fragment>
              <Typography variant="h5" gutterBottom>
                강의 등록이 완료되었습니다.
              </Typography>
              <Typography variant="subtitle1">
                <Link href="/instructor">강의 관리 페이지</Link>에서 확인
                가능합니다.
              </Typography>
            </Fragment>
          ) : (
            <Fragment>
              {getStepContent(activeStep)}
              <div className={classes.buttons}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} className={classes.button}>
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? 'Save' : 'Next'}
                </Button>
              </div>
            </Fragment>
          )}
        </Fragment>
      </Paper>
    </div>
  );
};

export default EditCourse;
