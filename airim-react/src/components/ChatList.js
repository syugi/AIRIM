import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  chatList:{
     height:'600px',
     overflow: 'auto',
     padding:'0 1em',
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
    // background:'red',
    justifyContent: (props) =>
      props.position === 'right' ? 'flex-end' : 'flex-start',
  },
  centerRow:{
    textAlign:'center',
  },
  talker:{
    margin:'0 5px',
    textAlign: (props) => props.position,
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
     borderRadius: (props) =>
      props.position === 'right' ? '1rem 0.1rem 1rem 1rem' : '0.1rem 1rem 1rem 1rem',
    // color: #454d57;
      // background: '#fff',
    background: (props) => props.color || '#fff',
    // display: inline-block;
     padding: '7px',
    margin:'0 5px',
     // margin:'0px 70px 15px',
    // display: table-cell;
    // vertical-align: middle;
    
    },
  
  // right:{
  // float:'right',
  // },
});

const RightBubbleRow = ({classes, chat}) => {
  return (
  <>
   {/* <div className={classes.bubbleRow}> */}
     <div>
       <div className={classes.talker}>
         {chat.talker}
       </div>
       <div className={classes.msg}>
         {chat.content}
       </div>
     </div>
      <div className={classes.talkerImg}>
        <img  src="https://images.unsplash.com/photo-1429117257281-73c32df3dcdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80" alt="" />
     </div>
   </>
  );
}

const LeftBubbleRow = ({classes, chat}) => {
  
  return (
  <>
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
   </>
  );
}

const BubbleRow = ({chat}) => {
  
  const props = { position: chat.position , color:chat.color };
  const classes = useStyles(props);
  
  return (
    <div className={classes.bubbleRow}>
      { props.position === 'right' 
        ? (<RightBubbleRow chat={chat} classes={classes}/>)
        : (<LeftBubbleRow chat={chat} classes={classes}/>)
      }
    </div>
  );
}

const ChatRow = ({ chat, idx }) => {
  const classes = useStyles();
    return (
      <>
      {chat.talker
       ? (<BubbleRow chat={chat}/>)
       : (
           <div className={classes.centerRow}>
             {chat.content}
           </div>
          )
      }
      </>
    );
}

const ChatList = ({chats}) => {
   const classes = useStyles();
  
   const list = chats.map((chat, idx) =>
      <div key={chat.id} className={classes.chatRow}>
            <ChatRow chat={chat} />
      </div>
  );
                            
  return <div className={classes.chatList}>{list}</div>;
};

export default ChatList;
