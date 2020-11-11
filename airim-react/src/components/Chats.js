import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Button, Chip, Avatar } from '@material-ui/core';
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TitleIcon from '@material-ui/icons/Title';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
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
    padding: '0 1em',
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
    textAlign: 'center',
  },
  talker: {
    margin: '0 5px',
    textAlign: (props) => props.position,
  },

  talkerImg: {
    '& img': {
      height: '45px',
      width: '45px',
      borderRadius: '50%',
    },
  },

  bubble: {
    //font-size: $regularFontSize;
    // max-width: 300px;
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

const BubbleRow = ({ chat }) => {
  const props = { position: chat.position, color: chat.color };
  const classes = useStyles(props);

  return (
    <div className={classes.bubbleRow}> 
      {
        <>
         <div style={{order: props.position === 'right' ? 1 : 2}}> 
          {chat.talker && (<div className={classes.talker}>{chat.talker}</div>)}
            <div className={classes.bubble}>{chat.content}</div> 
          </div> 
          {chat.talkerImg && (
          <div style={{order: props.position === 'right' ? 2 : 1}} className={classes.talkerImg}>
            <img src={chat.talkerImg} alt="" />
          </div>
          )}
        </>
      }
    </div>
  );
};

const ChatRow = ({ chat, idx }) => {
  const classes = useStyles();
  return (
    <>
      {chat.position === 'center' ? (
        <div className={classes.centerRow}>{chat.content}</div>
      ) : (
        <BubbleRow chat={chat} />
      )}
      <div style={{float:'right'}}>
        <EditIcon/> 
        <DeleteIcon/> 
      </div>
    </>
  );
};

const ChatList = ({ chats, isEdit }) => {
  const classes = useStyles();

  const list = chats.map((chat, idx) => (
    <div key={chat.id} className={classes.chatRow}>
      <ChatRow chat={chat} />
    </div>
  ));

  return <div className={classes.chatList}>{list}</div>; 
};


const ChapterList = ({ chapters }) => {
  const list = chapters.map((chapter) => <div>{chapter.content}</div>);
  return <div>{list}</div>;
};

const Chats = ({ isEdit, chats, types, talkers, onCreate , onChangeType , onChangeTalker}) => {
  const classes = useStyles();

  const chapters = chats.filter((chat) => chat.type === 'chapter');

  return (
    <div className={classes.wrap}>
      <ChapterList chapters={chapters} isEdit={isEdit} />
      <Container maxWidth="xs" className={classes.container}>
        <ChatList chats={chats} isEdit={isEdit} />
        {isEdit && <ChatAddForm types={types} talkers={talkers} onCreate={onCreate} onChangeType={onChangeType} onChangeTalker={onChangeTalker}/>}
      </Container>
    </div>
  );
};

export default Chats;
