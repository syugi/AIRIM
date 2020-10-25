import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const AfterLogin = () => (
  <div>
    <h3>
      에이림님
      <br />
      환영합니다.
    </h3>
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
  </div>
);

const BeforeLogin = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          경연에 입장하여
          <br />
          다양한 지식과
          <br />
          함께하세요
        </Typography>
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
            //className={classes.submit}
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
      </div>
      {/* <h3>
      경연에 입장하여
      <br />
      다양한 지식과
      <br />
      함께하세요
    </h3>
    <input
      type="text"
      name="id"
      placeholder="ID"
      onChange={(e) => {
        //console.log(e.target.value);
      }}
    />
    <input
      type="password"
      name="password"
      placeholder="Password"
      onChange={(e) => {
        console.log(e.target.value);
      }}
    />
    <div>
      <Link to="/">아이디/비밀번호 찾기</Link>
      <Link to="/">회원가입</Link>
    </div>
    <button onClick={() => {}}>로그인</button> */}
    </div>
  );
};

const DrawerMenu = ({ toggleDrawer }) => {
  const classes = useStyles();
  const isLogin = false;

  return (
    <div
      className={classes.list}
      //role="presentation"
      //onClick={toggleDrawer(false)}
      //onKeyDown={toggleDrawer(false)}
    >
      {isLogin ? <AfterLogin /> : <BeforeLogin />}
    </div>
  );
};

export default DrawerMenu;
