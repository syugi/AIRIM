import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Button, Chip, Avatar } from '@material-ui/core';
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TitleIcon from '@material-ui/icons/Title';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import AddIcon from '@material-ui/icons/Add';
import ChatList from 'components/ChatList';

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
  chatInputForm: {
    backgroundColor: '#fff',
  },
  talkerList: {
    display: 'flex',
  },
  talker: {
    margin: '0.5em',
  },
  avatar: {
    // border:'4px blue solid',
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
});

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

const TalkerList = () => {
  const classes = useStyles();
  const [talkers, setTalkers] = useState([
    {
      id: 1,
      name: '선생님',
      imgPath:
        'https://images.unsplash.com/photo-1429117257281-73c32df3dcdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80',
      active: true,
    },
    {
      id: 2,
      name: '학생',
      imgPath:
        'https://images.unsplash.com/photo-1429117257281-73c32df3dcdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80',
      active: false,
    },
  ]);

  return (
    <div className={classes.talkerList}>
      {talkers.map((data) => (
        <div className={classes.talker}>
          <Avatar className={classes.avatar} onClick={() => alert('a')}>
            A
          </Avatar>
          <Typography variant="caption" display="block" align="center">
            {data.name}
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

const ChatAddForm = ({
  types,
  selectType,
  onTypeClick,
  onAddChat,
  inputText,
  onTextChange,
}) => {
  const classes = useStyles();

  return (
    <form onSubmit={onAddChat} className={classes.chatInputForm}>
      <TalkerList />
      <TypeList types={types} onClick={onTypeClick} />
      <div className={classes.chatInput}>
        <input
          type="text"
          onChange={onTextChange}
          // onChange={(e) =>
          //     this.setState({
          //         txtValue: e.target.value
          //     })
          // }
          value={inputText}
        />
        <Button variant="contained" color="primary" onClick={onAddChat}>
          전송
        </Button>
      </div>
    </form>
  );
};

const ChatBlock = ({ chats, isEdit, onAddChat, inputText, onTextChange }) => {
  const classes = useStyles();

  const [types, setTypes] = useState([
    { name: '챕터', code: 'chapter', active: false },
    { name: '메세지', code: 'msg', active: true },
    { name: '텍스트', code: 'text', active: false },
    { name: '이미지', code: 'img', active: false },
    { name: '유튜브', code: 'youtube', active: false },
  ]);

  const onTypeClick = (typeCode) => {
    setTypes(
      types.map((type) =>
        type.code === typeCode
          ? { ...type, active: true }
          : { ...type, active: false },
      ),
    );
  };

  return (
    <Container maxWidth="xs" className={classes.container}>
      <ChatList chats={chats} isEdit={isEdit} />
      {isEdit && (
        <ChatAddForm
          types={types}
          onTypeClick={onTypeClick}
          onAddChat={onAddChat}
          inputText={inputText}
          onTextChange={onTextChange}
        />
      )}
    </Container>
  );
};

const ChapterList = ({ chapters }) => {
  const list = chapters.map((chapter) => <div>{chapter.content}</div>);
  return <div>{list}</div>;
};

const CourseChat = ({ chats, isEdit, onAddChat, inputText, onTextChange }) => {
  const classes = useStyles();

  const chapters = chats.filter((chat) => chat.type === 'chapter');

  return (
    <div className={classes.wrap}>
      <ChapterList chapters={chapters} isEdit={isEdit} />
      <ChatBlock
        chats={chats}
        isEdit={isEdit}
        onAddChat={onAddChat}
        inputText={inputText}
        onTextChange={onTextChange}
      />
    </div>
  );
};

export default CourseChat;
