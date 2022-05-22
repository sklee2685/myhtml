/* eslint-disable */ /*오류경고문 제거*/
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let title='리액트 공부1';
  let [t,b] = useState(['리액트 공부1','리액트 공부2','리액트 공부3','리액트 공부4']);
  let [num1,num2]= useState(0);
  let [ct1,ct2] = useState(t[3])

  return (
    <div className="App">
      <div className="black-nav">
        <div><img src={ logo }/>개발 Blog</div>
      </div>
      <h6>리액트 장점: 리액트에서 데이터 바인딩이 쉽다.</h6>
      <h6>데이터 바인딩: 서버에서 가져온 데이터를 html에 사용</h6>
      <h6>ex: document.getElementById().innerHTML</h6>
      <h6>하지만 리액트에선 &#123; 변수명 &#125; 이렇게 함으로써 데이터 바인딩을 할 수 있음</h6>

      <div className="list">
        <h3>{t[0]}</h3>
        <p>5/21</p>
        <hr/>
      </div>

      <div className="list">
        <h3>{t[1]}</h3>
        <p>state &#61;&gt; 변수 대신 쓰는 데이터 저장공간으로 useState()를 이용해 만들어야함
          <br/>사용 이유: 웹이 app처럼 동작하게 만들고 싶기 때문인데 state에 데이터를 저장해 두면
          state내용이 변경되면 HTML이 자동으로 재렌더링이 됨
        </p>
        <p>5/21</p>
        <hr/>
      </div>

      <div className="list">
        <h3>{t[2]} <span onClick= {()=>{ num2(num1+1) }}>👍</span>
         <span onClick={()=>{num2(num1-1)}}>👎</span> {num1} </h3>
        <p>👍를 누르면 옆에 있는 숫자가 올라가고 👎를 누르면 내려감</p>
        <p>5/21</p>
        <hr/>
      </div>

      <div className="list">
        <h3>{ct1} <span onClick= {()=>{ ct2("아직까지 공부중입니다.")}}>✔</span>
        <span onClick= {()=>{ ct2(t[3]) }}>✖</span></h3>
        <p>✔를 클릭하면 "리액트 공부4"가 "아직까지 공부중입니다." 로 변하고,
        ✖를 클릭하면 원상 복구됩니다.
        </p>
        <p>5/21</p>
        <hr/>
      </div>

    </div>
  );
}

export default App;
