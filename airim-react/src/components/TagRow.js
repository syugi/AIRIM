import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styled, { css } from 'styled-components';

const Tag = styled.div`
  
  background:  #ececec;
  display: flex;
  align-items: center;
  padding: 0.5em;
  color:  #666;
  cursor: pointer;
  margin-right: 0.3em;
  margin-bottom: 0.3em;

  &:hover {
    // transform: scale(1.1);
  }

  ${(props) =>
    props.active &&
    css`
      background:blue;
      color:#ffff
    `}
`;

const useStyles = makeStyles((theme) => ({
  tagGrid:{
     paddingTop: theme.spacing(2),
  },
}));

const TagRow = ({ tags, onClick }) => {
   const classes = useStyles();
  
  return (
   
    <Grid className={classes.tagGrid} container spacing={1}>
      {tags.map((tag) => (
        <Grid item>
        <Tag key={tag.id} onClick={() => onClick(tag.text)} active={tag.active}>
          {tag.text}
          {/*{tag.active && <MdClose style={{marginLeft:'0.1em'}}/>}*/}
        </Tag></Grid>
      ))}
    </Grid>

  );
};

export default TagRow;
