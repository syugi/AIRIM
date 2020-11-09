import React,{useState} from 'react';
import MainLayout from 'components/MainLayout';
import { Container, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CourseChat from 'components/CourseChat'; 
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

const Chat = ({ location }) => {
  const classes = useStyles();
  const [chats, setChats] = useState(chatsArr);
  const [inputText, setInputText] = useState("");
  const [selectType, setSelectType] = useState(['msg']);
  
  const onAddChat = (e) => {
        // e.preventDefault();
        // //const { txtValue, chatMessageLists } = this.state;
       
       // if (txtValue) {
            const id = chats[chats.length - 1].id + 1;
            const newChat = {
                id,
                talker:'테스트',
                type:selectType,
                position:'right',
                content:inputText,
            };

            setChats(
              chats.concat([newChat]),
            );
            setInputText(
              ""
            );
          
            // this.setState({
            //     chatMessageLists: chatMessageLists.concat([newMessage]),
            //     txtValue: ""
            // },
            //     () => this.chatMessageListRef.current.scrollBy(0, 500)
            // );
       // }
    }
  
  const onTextChange = (e) => {
    setInputText(e.target.value);
  }
  
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  const isEdit = query.edit === 'true'; 
  
  return (
    <MainLayout header={{title: "course title"}}>
      <CourseChat chats={chats} isEdit={isEdit} onAddChat={onAddChat} inputText={inputText} onTextChange={onTextChange}/>
    </MainLayout>
  );
};

export default Chat;
