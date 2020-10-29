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

const getChapter = () => {
   return (
     <>
     {chapters.map((chapter) => { 
        return !chapter.upperTalkId  && getChildren(chapter);
      })}
     </>
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
  
const ChapterTree = () => {
  const classes = useStyles();
  
  return (
  <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    
    >
      <TreeItem nodeId="1" label="Applications">
        <TreeItem nodeId="2" label="Calendar" />
        <TreeItem nodeId="3" label="Chrome" />
        <TreeItem nodeId="4" label="Webstorm" />
      </TreeItem>
      <TreeItem nodeId="5" label="Documents">
        <TreeItem nodeId="10" label="OSS" />
        <TreeItem nodeId="6" label="Material-UI">
          <TreeItem nodeId="7" label="src">
            <TreeItem nodeId="8" label="index.js" />
            <TreeItem nodeId="9" label="tree-view.js" />
          </TreeItem>
        </TreeItem>
      </TreeItem>
      {getChapter()}
    </TreeView>
  );
}
const CourseTalk = () => {
  
  const [talks, setTalks] = useState([]);
  
  return (
    <div>
      <ChapterTree/>
      <div>톡 페이지 입니다</div>
    </div>
  );
};

export default CourseTalk;
