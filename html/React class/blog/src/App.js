/* eslint-disable */ /*오류경고문 제거*/
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let title='리액트 공부1';
  let [t,b] = useState(['리액트 공부1','리액트 공부2','리액트 공부3','리액트 공부4','리액트 공부5']);
  let [num1,num2]= useState(0);
  let [ct1,ct2] = useState(t[3])

  function change_title(){
    var new_title=[...t];
    new_title[4]="array변수 복사";
    b(new_title);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div><img src={ logo }/>개발 Blog</div>
      </div>
      <h6>리액트 장점: 리액트에서 데이터 바인딩이 쉽다.</h6>
      <h6>데이터 바인딩: 서버에서 가져온 데이터를 html에 사용</h6>
      <h6>ex&#41; document.getElementById().innerHTML</h6>
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
        <h3>{t[2]} <span onClick= {()=>{ num2(num1+1) }}> 👍</span>
         <span onClick={()=>{num2(num1-1)}}> 👎</span> {num1} </h3>
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
        <p>5/22(수정)</p>
        <hr/>
      </div>

      <div className="list">
        <h3>{t[4]}</h3>
        <button onClick={change_title}>버튼</button>
        <p>function 함수를 사용해 버튼을 클릭시 "리액트 공부5"가 "array변수 복사"로 변경됩니다.
          Array,Object state 데이터를 수정하때 해당 파일을 직접 수정하지 말고 파일을 복사 해서 사용해야함
          <br/>
          ex&#41;<br/>
          var data2 = data1; (X)<br/>
          var data2 = [...data1]; (O)<br/>
          <br/>
          첫번째 처럼 파일을 복사할경우 해당 변수의 값만 복사가 된다.=(변수 값 공유)<br/>
          하지만 두번째 코드처럼 복사하는 경우 deep copy를 해줘서 복사하려는 파일 자체가 복사가 됨
        </p>
        <p>5/22</p>
        <hr/>
      </div>

      <div className="modal">
        <h2>modal1</h2>
        <p>Component문법: HTML을 <strong>한 단어로 줄여서</strong> 사용할 수 있음<br/>
        사용법: 원하는 함수를 만들고 거기안에 축약을 원하는 HTML을 담으면 Component을 만들수 있다.<br/>
        유의사항 1.이름은 대괄호 2. return()안에 있는건 태그 하나로 묶어야함</p>
        <p>5/28</p>
        <hr/>
      </div>

      <Modal></Modal>
    </div>
  );
}

function Modal(){
  return(
    <div className="modal">
        <h2>modal2</h2>
        <p>해당 글은 Component을 사용해 만든 글 입니다.</p>
        <p>5/28</p>
        <hr/>
      </div>
  )
}
export default App;
