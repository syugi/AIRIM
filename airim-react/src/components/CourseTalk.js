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

const chapters = [
    {
      id: 1,
      title:'1.파이썬',
      upperTalkId:'',
      sortSeq :1,
    },
    {
      id: 2,
      title:'1-1.파이썬문법',
      upperTalkId:1,
      sortSeq :1,
    },
    {
      id: 3,
      title:'1-2.파이썬실습',
      upperTalkId:1,
      sortSeq :2,
    },
  {
      id: 5,
      title:'1-2-1.개발환경 세팅',
      upperTalkId:3,
      sortSeq :2,
    },
    {
      id: 4,
      title:'2.머신러닝',
      upperTalkId:'',
      sortSeq :2,
    }
  ];

const ChapterRow = ({chapter, children}) => {
  return (
    <TreeItem nodeId={chapter.id} label={chapter.title}>
      {children}
    </TreeItem>
  );
}


const getChildren = (chapter) => {
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
}
  
const Chapter = ({chapters}) => {
   return (
     <>
     {chapters.map((chapter) => { 
        return !chapter.upperTalkId  && getChildren(chapter);
      })}
     </>
    );
  }

  
const ChapterTree = () => {
  const classes = useStyles();
  
  return (
  <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    
    >
      {<Chapter chapters={chapters}/>}
    </TreeView>
  );
}

const Talk = () => {
  return (
    <div></div>
  );
}

const CourseTalk = () => {
  
  const [talks, setTalks] = useState([]);
  
  return (
    <div>
      <ChapterTree/>
      <Talk />
    </div>
  );
};

export default CourseTalk;
