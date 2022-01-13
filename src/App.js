/* eslint-disable */

import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {

  let posts1 = '데이터 바인딩하기';
  let posts = '블로그 제목 설정하기';
  let data1 = '데이터 바인딩은 className안에도 넣을수 있음 ';
  let style1 = {color : 'white', fontSize : '20px' }
  
  let [글제목,글제목변경] = useState(['강아지 간식 추천','강아지 동물병원','은별이는 귀여워']);
  let [하트, 하트변경] = useState(0);
  let [누른제목, 누른제목변경] = useState(0);

  let [modal, modal변경] = useState(false);

  let [입력값, 입력값변경] = useState('');

  var 어레이 = [1,2,3];

  var 뉴어레이 = 어레이.map(function(a){
    return a * 2
  });

  
  function 제목바꾸기(){
    var newArray = [...글제목];
    newArray[0] = '글제목에 있던 0번째 데이터를 이걸로 바꿈';
    글제목변경(newArray);
  }

  function 함수 (){
    return 100
  }

  return (
    <div className="App">
      <div className="nav-bar"> 
        <div style={ style1 }>Test Blog</div>
      </div>
        {/* <h4> {posts1 } </h4>
        <h4>{ 함수() }</h4>
        <div className={ data1 }>클래스명 확인해보기</div>
      <hr /> */}
      {/* <div className="list"> 
        <h3> { 글제목[0] } <span onClick={ ()=>{ 하트변경(하트+1) } }>❤️</span> { 하트 } </h3>
        <p> 12월 13일 발행</p>  <button onClick={ 제목바꾸기 }>변경</button>
        <hr/>
      </div>
      <div className="list"> 
        <h3> { 글제목[1] }</h3>
        <p> 12월 13일 발행</p>
        <hr/>
      </div>
      <div className="list"> 
        <h3 onClick={ ()=>{ modal변경(true) } }> { 글제목[2] }</h3>
        <p> 12월 13일 발행</p>
        <hr/>
      </div> */}

      {
        글제목.map(function(글, i){
          return (
          <div className="list" key={i}> 
            <h3 onClick={ ()=>{ 누른제목변경(i) } }> { 글 } <span onClick={ ()=>{ 하트변경(하트+1) } }>❤️</span> { 하트 } </h3>
            <p> 12월 13일 발행</p>
            <hr/>
          </div>
          )
        })
      }

      {/* <button onClick={ ()=>{ 누른제목변경(0) } }>버튼1</button>
      <button onClick={ ()=>{ 누른제목변경(1) } }>버튼2</button>
      <button onClick={ ()=>{ 누른제목변경(2) } }>버튼3</button> */}


      {/* {입력값}
      <br />
      <input onChange={ (e)=>{ 입력값변경(e.target.value) } }/> */}


      <div className="publish">
        <input onChange={(e)=>{입력값변경(e.target.value)}}/>
        <button onClick={ ()=>{ 
          var arrayCopy = [...글제목];
          arrayCopy.unshift(입력값);
          글제목변경( arrayCopy );
        } }>저장</button>
      </div>


        <Progile />

      <button onClick={ ()=> {modal변경(!modal)}} >열기 닫기</button>


    {
      modal === true
      ? <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
      : null
    }


    </div>

  );
}

function Modal(props){
  return(
    <div className="modal">
      <h2>{ props.글제목[props.누른제목 ]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>

  )
}


    //예전 리액트 문법
    class Progile extends React.Component {
      constructor(){
        super();
        this.state = { name : 'Kim', age : 30 }
      }

      changeName(){
        this.setState({ name: 'Yang'})

      }

      render(){
        return(
          <div>
            <h3>옛날 방식</h3>
            <p> 저는 { this.state.name } 입니다. </p>
            <button onClick={ ()=>{ this.setState({ name: 'Yang' }) } }>바꾸기</button>
            <button onClick={ this.changeName.bind(this) }>바꾸기2</button>
          </div>
    

        )
      }
    }




export default App;