import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';


const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
});


const ChapterRow = ({chapter, children}) => {
  return (
    <TreeItem nodeId={chapter.id} label={chapter.title}>
      {children}
    </TreeItem>
  );
}


const ChapterTree = ({chapters}) => {
  const classes = useStyles();
  
  function getChildren(chapter){
    const children = chapters.filter(ch=> ch.upperTalkId === chapter.id); 
    if(children.length){
      return (
        <ChapterRow chapter={chapter}>
          {children.map((ch) => (
             getChildren(ch)
          ))}
        </ChapterRow>
      );
    }else{
       return (<ChapterRow chapter={chapter}/>);
    }
   // return <TreeItem nodeId={chapter.id} label={chapter.title}></TreeItem>;  
  }
  
  return (
  <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    
    >
      {chapters.map((chapter) => {
        return !chapter.upperTalkId  && getChildren(chapter);
      })}
    </TreeView>
  );
}


export default ChapterTree;