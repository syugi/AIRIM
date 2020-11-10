import React, { useState , useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import MainLayout from 'components/MainLayout';
import Chats from 'components/Chats';
// import reset from 'styles/chat.scss';
import { addChat } from 'modules/chats';


const ChatContainer = () => {
  
  const chats= useSelector(state => state.chats);  
  
  const dispatch = useDispatch();

  const onCreate = text => dispatch(addChat(text));
 // const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch]); // 최적화를 위해 useCallback 사용

  
  // const [chats, setChats] = useState(chatsArr);
  const [inputText, setInputText] = useState('');
  const [selectType, setSelectType] = useState(['msg']);

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
        onCreate={onCreate}
      />
    </MainLayout>
  );
};

export default ChatContainer;
