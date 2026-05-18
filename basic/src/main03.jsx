import { createRoot } from 'react-dom/client';
import React from 'react';

//main03.jsx
//리액트 컴포넌트, React Component
//- 클래스 or 함수의 형태를 가진다.
//- 컴포넌트 > 리액트 엘리먼트를 생성하는 역할
//- 리액트 엘리먼트(객체)의 클래스 역할

//- props를 전달할 수 있다.
//- 재사용이 가능하다.(import)
//- React가 관리하다.


//리액트 컴포넌트 필수 조건
//1. 형태
//  - 함수형 > 보편적
//  - 클래스명 > 레거시
//2. 이름 > 대문자로 시작(파스칼) > 필수(***)
//3. 내부 구현
//  - JSX(***)
//  - Rect.createElement


// const app = (
//     <>
//         <h2>Hello</h2>
//         <p>React</p>
//     </>
// );




//주석
//- React == JavaScript

//JSX 내부에서의 주석
//- {/* 주석 */}
//- {// 주석}


//리액트 > 함수형 컴포넌트
function My() {

    //JavaScript 영역

    //리액트 엘리먼트 선언(구현)
    return (
        //JSX 영역: <>~</>
        <>
            //주석1
            {/* 주석2 */}
            {/*  //주석3  */}
            <h2>Hello</h2>
            {/* <!-- HTML 주석 --> */}
            <p>React</p>
        </>
    );
}

//const app = My();
//createRoot(document.getElementById('root')).render(app);

//const app = <My></My> //My() 동일하다.

createRoot(document.getElementById('root')).render(<My />);