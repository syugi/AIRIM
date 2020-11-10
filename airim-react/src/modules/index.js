import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';
import chats from './chats';

const rootReducer = combineReducers({
  chats,

  //테스트
  counter,
  todos,
});

export default rootReducer;
