import React, { useState , useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Button, Chip, Avatar } from '@material-ui/core';
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TitleIcon from '@material-ui/icons/Title';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  chatInputForm: {
    backgroundColor: '#fff',
  },
  talkerList: {
    display: 'flex',
  },
  talker: {
    margin: '0.5em',
    cursor: 'pointer',
  },
  activeTalker: {
    border:'4px blue solid', 
  },
  typeList: {
    '& > *': {
      margin: '0.3em',
    },
  },

  chatInput: {
    display: 'flex',
    backgroundColor: '#fff',
    // borderRadius: '5px',
    // position:'absolute',
    // bottom: 0,
    // left: 0;

    '& input': {
      width: '100%',
      // height:'100%',
      padding: '0 5px',
      border: 0,
      outline: 'none',
      backgroundColor: '#fff',
    },
    '& button': {
      borderRadius: 0,
      // width:'100%',
      // float: 'right',
    },
  },
}));

const TypeList = ({ types, onClick }) => {
  const classes = useStyles();
  return (
    <div className={classes.typeList}>
      {types.map((data) => {
        let icon;
        if (data.code === 'img') {
          icon = <PhotoIcon />;
        } else if (data.code === 'msg') {
          icon = <ChatBubbleIcon />;
        } else if (data.code === 'text') {
          icon = <TextFormatIcon />;
        } else if (data.code === 'youtube') {
          icon = <YouTubeIcon />;
        } else if (data.code === 'chapter') {
          icon = <TitleIcon />;
        }

        return (
          <Chip
            size="small"
            icon={icon}
            label={data.name}
            //className={classes.chip}
            onClick={() => onClick(data.code)}
            color={data.active ? 'primary' : ''}
          />
        );
      })}
    </div>
  );
};

const TalkerList = ({talkers, onClick}) => {
  const classes = useStyles();

  return (
    <div className={classes.talkerList}>
      {talkers.map((talker) => ( 
        <div className={classes.talker} onClick={() => onClick(talker.id)}>  
          <Avatar className={talker.active && classes.activeTalker} src={talker.imgPath}/>
          <Typography variant="caption" display="block" align="center">
            {talker.name}
          </Typography>
        </div>
      ))}
      <div className={classes.talker}>
        <Avatar className={classes.avatar}>
          <AddIcon />
        </Avatar>
      </div>
    </div>
  );
};

const ChatAddForm = ({ types, talkers, onInsertChat , onChangeType , onChangeTalker, onChatListScroll}) => {
  const classes = useStyles();

  const getActiveType = () => { 
    return types.find(type=> type.active);
  } 
  
  const getActiveTalker = () => {
    return talkers.find(talker=> talker.active);
  } 
  
  const chatInputRef = useRef();
  const [text, setText] = useState('');
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지
    if(!text) return; 
    const type = getActiveType(); 
    const talker = !type.isNoTalker && getActiveTalker();
    onInsertChat(text,type,talker); 
    setText(''); // 인풋 초기화 
    onChatListScroll();    
    chatInputRef.current.focus(); 
  };

  return (
    <form onSubmit={handleSubmit} className={classes.chatInputForm}>
      <TalkerList talkers={talkers} onClick={onChangeTalker}/>
      <TypeList types={types} onClick={onChangeType} />
      <div className={classes.chatInput}>
        <input type="text" value={text} onChange={handleChange} ref={chatInputRef}/>
        <Button type="submit" variant="contained" color="primary">
          전송
        </Button>
      </div>
      <button onClick={onChatListScroll}>test</button>
    </form>
  );
};

export default ChatAddForm;
