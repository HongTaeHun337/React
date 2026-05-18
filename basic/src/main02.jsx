import { createRoot } from 'react-dom/client';
import React from 'react';

//main02.jsx
//- 한줄 태그 vs 여러줄 태그 작성하기

//1. 한줄 태그
// const app = <h2>Hello JSX</h2>;

// const app = <h2>Hello JSX</h2>
//             <p>안녕하세요</p>;

// const app = <h2>Hello JSX</h2><p>안녕하세요</p>;
//*** JSX 식에는 부모 요소가 하나 있어야 합니다.



//2. 여러 줄 태그 작성하기
//- <div></div>: 의도하지 않은 래퍼 <div>

// const app = <div><h2>Hello JSX</h2><p>안녕하세요</p></div>;
// const app = <div>
//                 <h2>Hello JSX</h2>
//                 <p>안녕하세요</p>
//             </div>;



//- <> </>: Fragment, Short Fragment
//- <React.Fragment>: Explicit Fragment
//          - 불필요한 루트 태그를 대신하기 위해 사용
// const app = <>
//                 <h2>Hello JSX</h2>
//                 <p>안녕하세요</p>
//             </>


//- React 공식: "JSX elements must be wrapped in a single parent element"


// const app = 
//     (
//     <h2>Hellow JSX</h2>
//     <ul>
//         <li>Item 1</li>
//         <li>Item 2</li>
//         <li>Item 3</li>
//     </ul>
//     );


//1. div
// const app = 
//     (
//     <div>
//         <h2>Hellow JSX</h2>
//         <ul>
//             <li>Item 1</li>
//             <li>Item 2</li>
//             <li>Item 3</li>
//         </ul>
//     </div>
//     );

//2. <>
//- 대부분 상황에서 추천
//- import 없이 사용이 가능
//- key를 지원하지 않아서 > map()에서 사용 불가능(루프 불가능)
// const app = 
//     (
//     <>
//         <h2>Hellow JSX</h2>
//         <ul>
//             <li>Item 1</li>
//             <li>Item 2</li>
//             <li>Item 3</li>
//         </ul>
//     </>
//     );


//3. <React.Fargment>
//- import 없이 사용이 가능 > import React 필수
// const app = 
//     (
//     <React.Fargment>
//         <h2>Hellow JSX</h2>
//         <ul>
//             <li>Item 1</li>
//             <li>Item 2</li>
//             <li>Item 3</li>
//         </ul>
//     </React.Fargment>
//     );


createRoot(document.getElementById('root')).render(app);
