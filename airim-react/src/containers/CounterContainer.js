import React , {useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease, setDiff } from '../modules/counter';

function CounterContainer() {
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook입니다.
  // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일합니다.
// useSelector를 사용하여 Redux의 상태를 조회하는 경우 최적화 작업이 자동으로 이루어지지 않으므로 React.memo를 이용하는 것이 좋다.
//   React.memo를 사용해야 하는 경우는 다음과 같은 경우다.
// 1. 순수 함수 컴포넌트
// 2. 자주 렌더링을 해야하는 함수
// 3. 같은 props로 자주 리 렌더링 되는 함수
// 4. 컴포넌트가 props 비교를 필요로 하는 많은 UI 요소를 가지고 있는 경우
  const { number, diff } = useSelector(({counter}) => ({
    number: counter.number,
    diff: counter.diff
  }));

  // useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook 입니다.
  const dispatch = useDispatch(); 
  // 각 액션들을 디스패치하는 함수들을 만드세요 
  const onIncrease = useCallback(() => dispatch(increase()),[dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()));
  const onSetDiff = useCallback(diff => dispatch(setDiff(diff)));

  return (
    <Counter
      // 상태와
      number={number}
      diff={diff}
      // 액션을 디스패치 하는 함수들을 props로 넣어줍니다.
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;