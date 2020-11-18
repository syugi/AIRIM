import React from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import useAsync from 'lib/useAsync';

// useAsync 에서는 Promise 의 결과를 바로 data 에 담기 때문에,
// 요청을 한 이후 response 에서 data 추출하여 반환하는 함수를 따로 만들었습니다.
async function getWebttonList() {
  const apiUrl = 'dummy/webtoon_list.json';
  const response = await axios.get(apiUrl);
  return response.data;
}

function Webtoon() {
  const [state, refetch] = useAsync(getWebttonList, []); 

  const { loading, data: webttonList, error } = state; // state.data 를 users 키워드로 조회

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!webttonList) return null;
  return (
    <>
      <ul>
      {
        webttonList.map((webtoon,index) => (
          <li key={index}>
              <Link to="/" className="link_webtoon">
                  <img src={webtoon.thumbnail} className="img_webtoon" alt={webtoon.title} />
                  <div className="info_webtoon">
                      <strong className="tit_webtoon">
                          {webtoon.title}
                      </strong>
                      {webtoon.artist}
                  </div>
              </Link>
          </li>
        ))
      }
      </ul>
      <button onClick={refetch}>다시 불러오기</button>
    </>
  );
}

export default Webtoon;