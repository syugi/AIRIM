import React from 'react';
import { Link } from 'react-router-dom';
import SideMenu from 'components/SideMenu';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
      <div>#경연: 고려·조선시대에, 임금이 학문이나 기술을 강론·연마하던일. 또는
          그런자리.</div>
    </div>
);
  
const TitleBar = (props) => {
  const titleText = props.titleText; 
  
  const classes = useStyles();
  
  return (
    <div>
      <Toolbar>
        <Typography variant="h6" align="center" className={classes.title}>
          {titleText}
        </Typography>
        <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </div>
  );
};
  
const Header = () => {  

  const isHome = false; 
  const titleText = 'AIRIM';
  
  return (
    <div>
      {isHome ? <HomeTitleBar /> : <TitleBar titleText={titleText}/>}
      <SideMenu />
    </div>
  
  );
};

export default Header;