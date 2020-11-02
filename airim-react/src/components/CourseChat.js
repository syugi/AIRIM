import React,{useState} from 'react';
import { Container, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

// import reset from 'styles/chat.scss';

const chatListArr = [
  {
     id:0,
    talker:'',
    type:'chapter',
    position:'center',
    content:'1.소개',
  },
  {
     id:1,
    talker:'선생님',
    type:'msg',
    position:'left',
    content:'안녕하세요,'
  },
  {
     id:2,
  talker:'선생님',
  type:'msg',
    position:'left',
  content:'여기 오신것을 환영합니다'
  },
  {
     id:3,
  talker:'학생',
  type:'msg',
    position:'right',
  content:'잘부탁드립니다'
  },
  {
     id:4,
  talker:'',
  type:'notice',
    position:'center',
  content:'이제시작합니다!'
  },
] 
const useStyles = makeStyles({
  container: {
    background:'blue', 
    minHeight:'600px',
    padding:'10px',
    paddingTop:'30px',

  },
  chatRowList:{
   
  },
  chatRow:{
    paddingBottom: '15px',
    // transform: 'translateY(100px)',
    // opacity: '0',
    // animationName: 'testanim',
    // animationDelay: '0.3s',
    // animationDuration: '0.5s',
    // animationFillMode: 'forwards',
  },
  bubbleRow:{
    display:'flex',
    background:'red',

  },
  textRow:{
    textAlign:'center',
  },
  talker:{
    margin:'0 5px',
  },
  
  talkerImg:{
    '& img':{
      height: '45px',
      width: '45px',
      borderRadius: '50%',
    }
  },
  
  
  msg :{
    //font-size: $regularFontSize;
    // max-width: 300px;
    // height: 30px;
     borderRadius: '0.1rem 1rem 1rem 1rem',
    // color: #454d57;
     background: '#eae8ed',
    // display: inline-block;
     padding: '7px',
    margin:'0 5px',
     // margin:'0px 70px 15px',
    // display: table-cell;
    // vertical-align: middle;
    },
  
  addChatForm:{
    backgroundColor: '#eceff1',
    // borderRadius: '5px',
    // position:'absolute',
    // bottom: 0,
   // left: 0;
    '& input' : {
        width:'100%',
        height:'100%',
         padding: '0 10px',
         border: 0,
         outline: 'none',
        backgroundColor: '#eceff1',
    },
    '& button':{
      // float: 'right',
    }
    
  }
});


const ChatContainer = () => {
  const classes = useStyles();
  const [chatMsgList, setChatMsgList] = useState(chatListArr);
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
   
  const ChatRow = ({ chat, idx }) => {
            return (
              <>
              {chat.talker?
               (
                <div className={classes.bubbleRow}>
                 <div className={classes.talkerImg}>
                    <img  src="https://images.unsplash.com/photo-1429117257281-73c32df3dcdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80" alt="" />
                 </div>
                 <div>
                   <div className={classes.talker}>
                     {chat.talker}
                   </div>
                   <div className={classes.msg}>
                     {chat.content}
                   </div>
                 </div>
               </div>
               ):(
               <div className={classes.textRow}>
                 {chat.content}
               </div>
               )}
              </>
            );
        }
  
  const chatRowList = chatMsgList.map((chat, idx) =>
      <div key={chat.id} className={classes.chatRow}>
            <ChatRow chat={chat} />
      </div>
  );
                                                           
  return (
    <Container maxWidth="xs" className={classes.container}>
       <div className={classes.chatRowList}
           // className="scroll"
           // ref={this.chatMessageListRef}
        >
            {chatRowList}
        </div>

        <form onSubmit={onAddChat()}>
            <Grid container className={classes.addChatForm}>
              <Grid item xs={1}>
                <Button >
                  타입
                </Button>
              </Grid>
               <Grid item xs={9}>
                    <input
                        type="text"
                       // placeholder="Type a message..."
                       // onChange={(e) =>
                       //     this.setState({
                       //         txtValue: e.target.value
                       //     })
                       // }
                      //  value={this.state.txtValue}
                    />
               </Grid>
               <Grid item xs={2}>
                 <Button >
                   전송
                 </Button>
                 </Grid>
               
            </Grid>
        </form>
      
    </Container>
  );
}

const CourseChat = () => {
  const [chats, setChats] = useState([]);
  
  return (
    <div>
      <ChatContainer>
      </ChatContainer>
    </div>
  );
};

export default CourseChat;
