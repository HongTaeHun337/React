import { createRoot } from 'react-dom/client';
import React from 'react';
import './index.css'

//main05.jsx
//- JSX내에서 속성 조작하기
//- JSX > 태그 > 속성

//class > className


//정적
// function My() {
//     return (
//         <>
//             <h2>JSX Attribute</h2>
//             <div className="one">Content</div>
//         </>
//     );
// }

//동적
// function My() {

//     const a = 'one';
//     const title = '풍선 도움말';

//     return (
//         <>
//             <h2>JSX Attribute</h2>
//             <div className={a} title={title}>Content {az}</div>
//         </>
//     );
// }

//이벤트 == HTML 속성
//- 기존의 HTML 이벤트 핸들러: onclick, onmousedown
//- > 캐멀 표기법
// function My() {
//     return (
//         <>
//             <h2>JSX Attribute</h2>
//             <div className="one">Content</div>
//             <input type="button" value="버튼" 
//                     onClick={m1}/>
//             <input type="button" value="버튼" 
//                     onClick={() => {alert('m2');}}/>

//         </>
//     );
// }

// function m1() {
//     alert('m1');
// }


//Falg 타입 속성
// function My() {

//     const result = false;

//     return (
//         <>
//             <h2>JSX Attribute</h2>
//             <input type="button" value="버튼" 
//                 onClick={() => {alert('m2');}} disabled />

//             <input type="button" value="버튼" 
//                 onClick={() => {alert('m2');}} disabled={result} />    
//         </>
//     );
// }

//style 속성
//- 일반 속성처럼 문자열로 css작성을 하면 안된다.
//- 반드시 객체로만 값을 넣을 수 있다.
function My() {

    const myStyle = {
        color: 'blue',
        fontSize: '2em'
    };

    return (
        <>
            <h2>JSX Inline Style</h2>
            <div style={myStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dicta officia odit eaque aperiam labore, atque ut placeat fugiat aliquam in? Molestiae tenetur cum accusantium nisi quod sit vel maiores.</div>
        </>
    );
}

createRoot(document.getElementById('root')).render(<My/>);
