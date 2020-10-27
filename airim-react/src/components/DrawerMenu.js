import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  menu: {
    width: 260,
  },
  box : {
    background: '#e5e8ea',
  },
  text : {
    fontWeight: 'bold',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const AfterLogin = () => {
  const classes = useStyles();
  return (
    <Box pt={6}>
      <Container maxWidth="lg">
        <Box className={classes.box} px={2} py={5} my={4}>
          <Typography className={classes.text} variant="h5" >
            에이림님
            <br />
            환영합니다.
          </Typography>
        </Box>
      </Container>
      <List component="nav">
        <ListItemLink href="/">
          <ListItemText primary="홈" />
        </ListItemLink>
        <ListItemLink href="/">
          <ListItemText primary="나의정보 확인" />
        </ListItemLink>
        <ListItemLink href="/instructor">
          <ListItemText primary="강좌 관리" />
        </ListItemLink>
        <ListItem button>
          <ListItemText primary="로그아웃" />
        </ListItem>
      </List>
    </Box>
  );
};

const BeforeLogin = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.paper}>
        <Container maxWidth="sm">
          <Box mt={10} mb={4}>
            <Typography className={classes.text} variant="h5">
              경연에 입장하여
              <br />
              다양한 지식과
              <br />
              함께하세요
            </Typography>
          </Box>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="id"
              label="ID"
              name="id"
              autoComplete="id"
              autoFocus
              size="small"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              size="small"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              로그인
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  아이디/비밀번호 찾기
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {'회원가입'}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Container>
      </div>
    </div>
  );
};

const DrawerMenu = ({ toggleDrawer }) => {
  const classes = useStyles();
  const isLogin = true;

  return (
    <div
      className={classes.menu}
      //role="presentation"
      //onClick={toggleDrawer(false)}
      //onKeyDown={toggleDrawer(false)}
    >
      {isLogin ? <AfterLogin/> : <BeforeLogin/>}
    </div>
  );
};

export default DrawerMenu;
