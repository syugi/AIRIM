import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import DrawerMenu from 'components/DrawerMenu';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import Drawer from '@material-ui/core/Drawer';

const DEFAULT_TITLE = 'AIRIM';

const useStyles = makeStyles((theme) => ({
  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
  },
}));

const Header = ({ title, noBackBtn }) => {
  //backFunc, params
  const classes = useStyles();

  const history = useHistory();
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
      <Toolbar>
        {!noBackBtn && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="goBack"
            onClick={() => history.goBack(2)}
          >
            <ArrowBackIos />
          </IconButton>
        )}
        <Typography variant="h5" align="center" className={classes.title}>
          <Link to="/">{!title ? DEFAULT_TITLE : title}</Link>
        </Typography>
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
