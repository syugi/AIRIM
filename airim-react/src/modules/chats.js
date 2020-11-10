import {createAction , handleActions} from 'redux-actions'

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

/* 액션 타입 선언 */
const ADD_CHAT = 'chats/ADD_CHAT';
const EDIT_CHAT = 'chats/EDIT_CHAT';
const DEL_CHAT = 'chats/DEL_CHAT';

// export const setDiff = createAction(SET_DIFF, diff => diff); //파라미터 전달  
// export const increase = createAction(INCREASE); 

/* 액션 생성함수 선언 */
let nextId = 1; // chat 데이터에서 사용 할 고유 id
// export const addChat = createAction(ADD_CHAT, text => ({
//     id: nextId++, // 새 항목을 추가하고 nextId 값에 1을 더해줍니다.
//     talker: '',
//     type: 'msg', //msg, img, youtube, notice, chapter
//     position: 'left',
//     content: text,
//     talkerImg:'',
//   })); //파라미터 전달  
  
export const addChat = text => ({
  type: ADD_CHAT, 
  chat: {
    id: nextId++, // 새 항목을 추가하고 nextId 값에 1을 더해줍니다.
    talker: '',
    type: 'msg', //msg, img, youtube, notice, chapter
    position: 'left',
    content: text,
    talkerImg:'',
  }
});

/* 초기 상태 선언 */
// 리듀서의 초기 상태는 꼭 객체타입일 필요 없습니다.
// 배열이여도 되고, 원시 타입 (숫자, 문자열, 불리언 이여도 상관 없습니다.
// const initialState = [
//   {
//     id: 1,
//     talker: '',
//     type: 'msg', //msg, img, youtube, notice, chapter
//     position: 'left',
//     content: '메세지!',
//     talkerImg:'',
//   }
// ];

const initialState = chatsArr;


// const chats = handleActions(
//   {
//     [ADD_CHAT]: (state, action) => state.concat(action.text),
//   },
//   initialState
// );


export default function chats(state = initialState, action) {
  switch (action.type) {
    case ADD_CHAT:
      return state.concat(action.chat);
    // case EDIT_CHAT:
    //   return state.map(
    //     chat =>
    //       chat.id === action.id // id 가 일치하면
    //         ? { ...todo, done: !todo.done } // done 값을 반전시키고
    //         : todo // 아니라면 그대로 둠
    //   );
    default:
      return state;
  }
}