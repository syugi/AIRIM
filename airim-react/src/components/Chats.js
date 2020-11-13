import React, { useState , useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Button, Chip, Avatar, IconButton } from '@material-ui/core';
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TitleIcon from '@material-ui/icons/Title';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import CloseIcon from '@material-ui/icons/Close';
import ChatAddForm from 'components/ChatAddForm';

const useStyles = makeStyles({
  wrap: {
    display: 'flex',
  },
  container: {
    // padding:'10px',
    // paddingTop:'30px',
    background: '#eae8ed',
    padding: 0,
  },
  
  chatList: {
    height: '600px',
    overflow: 'auto',
    padding: '1em',
  },

  editRow:{
    margin:'0 5px', 
    cursor: 'pointer',
    opacity: (props) => props.isEdit ? 100:0,
    '&:hover':{ 
      //background:'red',
      opacity: 100,
    }
  },
  
  chatRow: {
    paddingBottom: '15px',
    // background:'red', 
    // display:'flex', 
    // transform: 'translateY(100px)',
    // opacity: '0',
    // animationName: 'testanim',
    // animationDelay: '0.3s',
    // animationDuration: '0.5s',
    // animationFillMode: 'forwards',
  },
  
  bubbleRow: {
    display: 'flex',
    // background:'red',
    justifyContent: (props) =>
      props.position === 'right' ? 'flex-end' : 'flex-start',
  },
  centerRow: {
  display:'flex', 
    justifyContent:'center',
  },  
  talker: {
    margin: '0 5px',
    textAlign: (props) => props.position,
  },

  talkerImg: {
    '& img': {
      height: '45px',
      width: '45px', 
      minWidth: '45px',
      borderRadius: '50%',
    },
  },

  bubble: {
    //font-size: $regularFontSize;
    maxWidth: '90%',
    // height: 30px;
    borderRadius: (props) =>
      props.position === 'right'
        ? '1rem 0.1rem 1rem 1rem'
        : '0.1rem 1rem 1rem 1rem',
    // color: #454d57;
    // background: '#fff',
    background: (props) => props.color || '#fff',
    // display: inline-block;
    padding: '7px',
    margin: '0 5px',
    // margin:'0px 70px 15px', 
    // display: table-cell;
    // vertical-align: middle;
  },
});

const Chats = ({ 
  isEdit, 
  chats, 
  types, 
  talkers, 
  onInsertChat, 
  onUpdateChat,
  onDeleteChat,
  onToggleChatEdit, 
  onChangeType, 
  onChangeTalker}) => {
  
  const classes = useStyles(); 
   
  const chapters = chats.filter((chat) => chat.type === 'chapter');

  const [editChatText, setEditChatText] = useState('');
  
  const chatListRef = useRef();
  
  const EditRow = ({chat}) => {
    
    const props = { isEdit: chat.isEdit};
    const classes = useStyles(props);

    if(!isEdit){
      return <></>;
    }
    
    const handleEditClick = () => {
       setEditChatText(chat.content);
       onToggleChatEdit(chat.id);
    };
    const handleSaveClick = () => {
       onUpdateChat(chat.id,editChatText);
    };
    const handleDeleteClick = () => {
       onDeleteChat(chat.id)
    };
    const handleCloseClick = () => {
       onToggleChatEdit(chat.id);
    };
    
    return (
        <div  className={classes.editRow}>
          {!chat.isEdit 
           ? (<>
                <EditIcon fontSize="small" onClick={handleEditClick}/>
                <DeleteIcon fontSize="small" onClick={handleDeleteClick}/>
              </>)
           : (<>
                <SaveIcon fontSize="small" onClick={handleSaveClick}/>
                <CloseIcon fontSize="small" onClick={handleCloseClick}/>
              </>)
          }
       </div> 
    );
  };

  const BubbleRow = ({ chat , children }) => { 
    const props = { position: chat.position, color: chat.color };
    const classes = useStyles(props);

    return ( 
      <div className={classes.bubbleRow}> 
        {
       chat.position == 'left' 
            ? (
              <>
                { chat.talkerImg && (
                <div className={classes.talkerImg}>
                  <img src={chat.talkerImg} alt="" />
                </div>
                )}
                <div> 
                  {chat.talker && (<div className={classes.talker}>{chat.talker}</div>)}
                  <div style={{display:'flex'}}> 
                    <div className={classes.bubble}>{children}</div> 
                    <EditRow chat={chat}/>
                  </div>
                </div>
              </>
            )
          : (
            <>
              <div> 
                {chat.talker && (<div className={classes.talker}>{chat.talker}</div>)}
                <div style={{display:'flex'}}> 
                  <EditRow chat={chat}/>
                  <div className={classes.bubble}>{children}</div> 
                </div>
              </div>
              { chat.talkerImg && (
              <div className={classes.talkerImg}>
                <img src={chat.talkerImg} alt="" />
              </div>
              )}
            </>
          )
        }
      </div>
    );
  };

  const ChatRow = ({ chat }) => { 
    const classes = useStyles();  
    const handleChange = (e) => {
       
      setEditChatText(e.target.value);
    };
    
    let content = <>{chat.content}</>;
    if(chat.isEdit){
      content = <input type="text" value={editChatText} onChange={handleChange}/> ;
    } 

    return (
      <>
        {chat.position === 'center' ? (
          <div className={classes.centerRow}>
              <div>{content}</div> 
              <EditRow chat={chat}/>
           </div>
        ) : (
         <BubbleRow chat={chat}>{content}</BubbleRow>
        )}
      </>
    );
  };

  const ChatList = ({ chats , onClick}) => {
    const classes = useStyles();

    const list = chats.map((chat, idx) => (
      <div key={chat.id} className={classes.chatRow}>
        <ChatRow chat={chat}/>
      </div>
    ));
    
    return <div className={classes.chatList} ref={chatListRef}>{list}</div>; 
  };


  const ChapterList = ({ chapters }) => {
    const list = chapters.map((chapter) => <div>{chapter.content}</div>);
    return <div>{list}</div>;
  };
             
  const onChatListScroll = () => {
    chatListRef.current.scrollBy(0, 500);
  };
    
  return (
    <div className={classes.wrap}>
      <ChapterList chapters={chapters}/>
      <Container maxWidth="xs" className={classes.container}>
        <ChatList chats={chats}/>
        {isEdit && 
          <ChatAddForm 
            types={types} 
            talkers={talkers} 
            onInsertChat={onInsertChat} 
            onChangeType={onChangeType} 
            onChangeTalker={onChangeTalker} 
            onChatListScroll={onChatListScroll}
          />
        }
      </Container>            
    </div>
  );
};

export default Chats;
