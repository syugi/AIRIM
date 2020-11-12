import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import MainLayout from 'components/MainLayout';
import Chats from 'components/Chats';
// import reset from 'styles/chat.scss';
import { insertChat ,updateChat,deleteChat, toggleChatEdit, changeType , changeTalker } from 'modules/chats';

const ChatContainer = () => {
  const { chats , talkers , types} = useSelector(({ chats }) => ({
    chats: chats.chats,
    talkers: chats.talkers,
    types: chats.types,
  }));

  const dispatch = useDispatch(); 
 
  const onInsertChat = (talker,type,position,text) => dispatch(insertChat(talker,type,position,text));
  const onUpdateChat = useCallback((id,text) => dispatch(updateChat(id,text)), [dispatch]);
  const onDeleteChat = useCallback(id => dispatch(deleteChat(id)), [dispatch]);
  const onToggleChatEdit = useCallback(id => dispatch(toggleChatEdit(id)), [dispatch]);
  const onChangeType = useCallback(id => dispatch(changeType(id)), [dispatch]);
  const onChangeTalker = useCallback(id => dispatch(changeTalker(id)), [dispatch]);
  

  // const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch]); // 최적화를 위해 useCallback 사용
 
  // const [chats, setChats] = useState(chatsArr);
  // const [inputText, setInputText] = useState('');
  // const [selectType, setSelectType] = useState(['msg']);

  const query = new URLSearchParams(useLocation().search);
  const isEdit = query.get('edit') === 'true';

  // const onAddChat = (e) => {
  //   // e.preventDefault();
  //   if (inputText) {
  //     const id = chats[chats.length - 1].id + 1;
  //     const newChat = {
  //       id,
  //       talker: '테스트',
  //       type: selectType,
  //       position: 'right',
  //       content: inputText,
  //     };

  //     setChats(chats.concat([newChat]));
  //     setInputText('');

  //   // this.setState({
  //   //     chatMessageLists: chatMessageLists.concat([newMessage]),
  //   //     txtValue: ""
  //   // },
  //   //     () => this.chatMessageListRef.current.scrollBy(0, 500)
  //   // );
  //   }
  // };

  return (
    <MainLayout header={{ title: 'course title' }}>
      <Chats 
        isEdit={isEdit} 
        chats={chats} 
        types={types} 
        talkers={talkers} 
        onInsertChat={onInsertChat} 
        onUpdateChat={onUpdateChat} 
        onDeleteChat={onDeleteChat} 
        onToggleChatEdit={onToggleChatEdit} 
        onChangeType={onChangeType} 
        onChangeTalker={onChangeTalker}/>
    </MainLayout>
  );
};

export default ChatContainer;
