import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DrawerMenu from 'components/DrawerMenu';

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import Drawer from '@material-ui/core/Drawer';

const useStyles = makeStyles((theme) => ({
  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },
  title: {
    flexGrow: 1,
  },
}));

const HomeTitleBar = () => (
  <div>
    <div>
      <Link>경연</Link>
      <Link>내강좌관리</Link>
    </div>
    <div>
      #경연: 고려·조선시대에, 임금이 학문이나 기술을 강론·연마하던일. 또는
      그런자리.
    </div>
  </div>
);

const TitleBar = ({ title }) => {
  const classes = useStyles();

  return (
    <Typography variant="h6" align="center" className={classes.title}>
      <Link to="/">{title}</Link>
    </Typography>
  );
};

const Header = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState('AIRIM');
  const [isHome, setIsHome] = useState(false);

  // const handleChangeTitleText = (titleText) => {
  //   setTitleText(titleText);
  // };

  // const handleChangeIsHome = (isHome) => {
  //   setIsHome(isHome);
  // };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  return (
    <div>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="goBack"
         // onClick={toggleDrawer(true)}
        >
          <ArrowBackIos />
        </IconButton>
        {isHome ? <HomeTitleBar /> : <TitleBar title={title} />}
        <IconButton
          edge="start"
          //className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <DrawerMenu toggleDrawer={toggleDrawer} />
      </Drawer>
    </div>
  );
};

export default Header;
