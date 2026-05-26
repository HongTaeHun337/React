import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react'

//main21.jsx
/*

  useEffect + 의존성 배열
  - useEffect(() => {}, [의존성 배열])
  - [의존성 배열] 역할: 이 배열의 값이 변경할 때만 useEffect를 호출해라
    1. []: 빈배열
    2. [값]: 배열

*/

//1. 의존성 배열이 없을 때(main20.jsx 동일)
//- 모든 state에 반응 > useEffect 발생
// function App() {

//   const [count, setCount] = useState(0);
//   const [text, setText] = useState('');

//   useEffect(() => {
//     console.log('렌더링 발생');
//   });

//   return (
//     <>
//       <h2>Hooks <small>useEffect</small></h2>
//       <div>count: {count}</div>
//       <button onClick={() => setCount(count + 1)}>카운트 증가</button>
//       <hr />
//       <input type="text"
//              value={text}
//              onChange={(e) => setText(e.target.value)} />
      
//     </>
//   );
// }



//2. 의존성 배열 사용
//- 빈 배열 사용
//- App() 컴포넌트가 처음 렌더링될때만 실행 > 그 이 후 렌더링에는 실행 안함
//- 생성자 역할, onload 이벤트 역할
//- 초기 설정, 최초 데이터 로딩 등.. 작업

// function App() {

//   const [count, setCount] = useState(0);
//   const [text, setText] = useState('');

//   useEffect(() => {
//     console.log('렌더링 발생');
//   }, []);

//   return (
//     <>
//       <h2>Hooks <small>useEffect</small></h2>
//       <div>count: {count}</div>
//       <button onClick={() => setCount(count + 1)}>카운트 증가</button>
//       <hr />
//       <input type="text"
//              value={text}
//              onChange={(e) => setText(e.target.value)} />
      
//     </>
//   );
// }




//3. 의존성 배열 사용
//- [값]: 이 값이 변경될 때만 useEffect 호출
//- 일반적 형태
function App() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const temp = [];

  function m1() {
    temp.push(text);
  }

  useEffect(() => {
    console.log('렌더링 발생');
  }, temp);

  return (
    <>
      <h2>Hooks <small>useEffect</small></h2>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>카운트 증가</button>
      <hr />
      <input type="text"
             value={text}
             onChange={(e) => setText(e.target.value)} />
      <hr />
      <button onClick={m1}>적용</button>
      
    </>
  );
}



createRoot(document.getElementById('root')).render(<App />);