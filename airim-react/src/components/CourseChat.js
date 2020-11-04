import React,{useState} from 'react';
import { Container, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ChatContainer from 'components/ChatContainer'; 
import qs from 'qs';
// import reset from 'styles/chat.scss';

const chatsArr = [
  {
     id:0,
    talker:'',
    type:'chapter',
    position:'center',
    content:'1.소개',
    talkerImg: "https://images.unsplash.com/photo-1429117257281-73c32df3dcdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80",
  },
  {
     id:1,
    talker:'선생님',
    type:'msg',
    position:'left',
    content:'안녕하세요,',
    talkerImg: "https://images.unsplash.com/photo-1429117257281-73c32df3dcdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80",
  },
  {
     id:2,
  talker:'선생님',
  type:'msg',
    position:'left',
  content:'여기 오신것을 환영합니다',
    talkerImg: "https://images.unsplash.com/photo-1429117257281-73c32df3dcdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80",
  },
  {
     id:3,
    talker:'학생',
    type:'msg',
    position:'right',
    color:'yellow',
    content:'잘부탁드립니다',
    talkerImg: "https://images.unsplash.com/photo-1429117257281-73c32df3dcdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80",
  },
  {
     id:4,
  talker:'',
  type:'notice',
    position:'center',
  content:'이제시작합니다!',
    talkerImg: "https://images.unsplash.com/photo-1429117257281-73c32df3dcdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80",
  },
  {
     id:5,
  talker:'',
  type:'chapter',
    position:'center',
  content:'2.강의',
    talkerImg: "https://images.unsplash.com/photo-1429117257281-73c32df3dcdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80",
  },
] 

const useStyles = makeStyles({
});

const CourseChat = ({ location }) => {
  const [chats, setChats] = useState(chatsArr);
  const classes = useStyles();
  
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  const isEdit = query.edit === 'true'; 
  
  return (
    <ChatContainer chats={chats} isEdit={isEdit}/>
  );
};

export default CourseChat;
