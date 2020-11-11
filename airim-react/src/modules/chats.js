import { createAction, handleActions } from 'redux-actions';

const chatsArr = [
  {
    id: 0,
    talker: '',
    type: 'chapter',
    position: 'center',
    content: '1.소개',
    talkerImg:
      'https://images.unsplash.com/photo-1429117257281-73c32df3dcdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80',
  },
  {
    id: 1,
    talker: '선생님',
    type: 'msg',
    position: 'left',
    content: '안녕하세요,',
    talkerImg:
      'https://images.unsplash.com/photo-1429117257281-73c32df3dcdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80',
  },
  {
    id: 2,
    talker: '선생님',
    type: 'msg',
    position: 'left',
    content: '여기 오신것을 환영합니다',
    talkerImg:
      'https://images.unsplash.com/photo-1429117257281-73c32df3dcdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80',
  },
  {
    id: 3,
    talker: '학생',
    type: 'msg',
    position: 'right',
    color: 'yellow',
    content: '잘부탁드립니다',
    talkerImg:
      'https://images.unsplash.com/photo-1429117257281-73c32df3dcdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80',
  },
  {
    id: 4,
    talker: '',
    type: 'notice',
    position: 'center',
    content: '이제시작합니다!',
    talkerImg:
      'https://images.unsplash.com/photo-1429117257281-73c32df3dcdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80',
  },
  {
    id: 5,
    talker: '',
    type: 'chapter',
    position: 'center',
    content: '2.강의',
    talkerImg:
      'https://images.unsplash.com/photo-1429117257281-73c32df3dcdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80',
  },
];

const talkerArr = [
    {
      id: 1,
      name: '선생님',
      position:'left',
      imgPath:
        'https://images.unsplash.com/photo-1429117257281-73c32df3dcdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80',
      active: true,
    },
    {
      id: 2,
      name: '학생',
      position:'right',
      imgPath:
        'https://images.unsplash.com/photo-1429117257281-73c32df3dcdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80',
      active: false,
    },
  ];
  
const typeArr = [
    { name: '챕터' , code: 'chapter', isNoTalker: true, active: false },
    { name: '텍스트', code: 'notice',isNoTalker: true,  active: false },
    { name: '메세지', code: 'msg', isNoTalker: false, active: true },
    { name: '이미지', code: 'img', isNoTalker: false, active: false },
    { name: '유튜브', code: 'youtube', isNoTalker: false, active: false },
  ];


/* 액션 타입 선언 */
const INSERT_CHAT = 'chats/INSERT_CHAT';
const UPDATE_CHAT = 'chats/UPDATE_CHAT';
const DELETE_CHAT = 'chats/DELETE_CHAT';
const CHANGE_TALKER = 'chats/CHANGE_TALKER';
const CHANGE_TYPE = 'chats/CHANGE_TYPE';

// export const setDiff = createAction(SET_DIFF, diff => diff); //파라미터 전달
// export const increase = createAction(INCREASE);

/* 액션 생성함수 선언 */
let nextId = 1; // chat 데이터에서 사용 할 고유 id
export const insertChat = createAction(INSERT_CHAT, (text,type,talker) => ({
  id: nextId++, // 새 항목을 추가하고 nextId 값에 1을 더해줍니다.
  type: type.code, //msg, img, youtube, notice, chapter
  content: text,  
  talker: talker.name,
  position: talker ? talker.position : 'center', 
  talkerImg: talker.imgPath,
})); //파라미터 전달

export const changeTalker = createAction(CHANGE_TALKER, id => id);
export const changeType = createAction(CHANGE_TYPE, id => id);


/* 초기 상태 선언 */
// 리듀서의 초기 상태는 꼭 객체타입일 필요 없습니다.
// 배열이여도 되고, 원시 타입 (숫자, 문자열, 불리언 이여도 상관 없습니다.
const initialState = {
  chats: chatsArr,
  talkers: talkerArr,
  types: typeArr,
};

//const initialState = chatsArr;

 //   types.map((type) =>
    //     type.code === typeCode
    //       ? { ...type, active: true }
    //       : { ...type, active: false },
    //   ),

const chats = handleActions(
  {
    [INSERT_CHAT]: (state, { payload: chat }) => ({
      ...state,
      chats: state.chats.concat(chat),
    }),
    
    // [CHANGE_TALKER]: (state, {payload: talkerId}) => {
    //   alert(JSON.stringify(state.talkers));
    // }, 
    
    [CHANGE_TALKER]: (state, {payload: talkerId}) => ({
      ...state,
      talkers: state.talkers.map((talker) =>
        talker.id === talkerId
         ? {...talker, active: true}  
         : {...talker, active:false}) 
    }),
      
    [CHANGE_TYPE]: (state, {payload: typeCode}) => ({
      ...state,
      types: state.types.map((type) =>
        type.code === typeCode
         ? {...type, active: true} 
         : {...type, active:false})
    }),
  },
  initialState,
);
export default chats;
