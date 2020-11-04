import React,{useState} from 'react';
import { Container, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ChatList from 'components/ChatList';

const useStyles = makeStyles({
  wrap:{
    display:'flex',
  },
  container: {
    // padding:'10px',
    // paddingTop:'30px',
     background:'#eae8ed', 
    padding:0,
    
  },
  chatInput:{
    display:'flex',
    backgroundColor: '#fff',
    // borderRadius: '5px',
    // position:'absolute',
    // bottom: 0,
   // left: 0;
   
    '& input' : {
         width:'100%',
        // height:'100%',
         padding: '0 5px',
         border: 0,
         outline: 'none',
        backgroundColor: '#fff',
    },
    '& button':{
      borderRadius : 0,
      // width:'100%',
      // float: 'right',
    }
    
  }
});

const ChatAddForm = ({onAddChat}) => {
  const classes = useStyles();
  return (
       <form onSubmit={onAddChat}  className={classes.chatInput}>
          <input
              type="text"
             // onChange={(e) =>
             //     this.setState({
             //         txtValue: e.target.value
             //     })
             // }
            //  value={this.state.txtValue}
          />
          <Button variant="contained" color="primary">전송</Button>
        </form> 
    )
  };

const ChatBlock = ({chats,isEdit}) => {
  const classes = useStyles();
  const [txtValue, setTxtValue] = useState("");
  
  const onAddChat = (e) => {
        // e.preventDefault();
        // //const { txtValue, chatMessageLists } = this.state;

        // if (txtValue) {
        //     const id = chatList[chatList.length - 1].id + 1;
        //     const newChat = {
        //         id,
        // talker:'테스트',
        //         type:'msg',
        // position:'right',
        //         content:'Test!!!!'
        //     };

        //     // this.setState({
        //     //     chatMessageLists: chatMessageLists.concat([newMessage]),
        //     //     txtValue: ""
        //     // },
        //     //     () => this.chatMessageListRef.current.scrollBy(0, 500)
        //     // );
        // }
    }
                                                           
  return (
    <Container maxWidth="xs" className={classes.container}>
      <ChatList chats={chats} />
      {isEdit && <ChatAddForm onAddChat={onAddChat}/>}
    </Container>
  );
}

const ChapterList = ({chapters}) => {
  const list = chapters.map(chapter=> <div>{chapter.content}</div>);
  return (
    <div>{list}</div>
  );
}

const ChatContainer = ({chats,isEdit}) => {
  const classes = useStyles();
  
  const chapters = chats.filter(chat => chat.type === 'chapter');
  
  return (
    <div className={classes.wrap}>
      <ChapterList chapters={chapters} isEdit={isEdit}/>
      <ChatBlock chats={chats} isEdit={isEdit}/>
    </div>
  );
};

export default ChatContainer;
