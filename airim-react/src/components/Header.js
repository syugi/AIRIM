import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DrawerMenu from 'components/DrawerMenu';

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
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

const TitleBar = ({ titleText }) => {
  const classes = useStyles();

  return (
    <Typography variant="h6" align="center" className={classes.title}>
      <Link to="/">{titleText}</Link>
    </Typography>
  );
};

const Header = () => {
  const classes = useStyles();

  const isHome = false;
  const titleText = 'AIRIM';
  const [open, setOpen] = useState(false);

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
      <div>
        <Toolbar>
          {isHome ? <HomeTitleBar /> : <TitleBar titleText={titleText} />}
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </div>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <DrawerMenu toggleDrawer={toggleDrawer} />
      </Drawer>
    </div>
  );
};

export default Header;
