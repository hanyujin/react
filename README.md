
## React란 무엇인가?
UI 컴포넌트 라이브러리 
순수한 자바스크립트를 이용해서 만든다. 
여러 컴포넌트로 UI를 구성하는 방식은 React의 *핵심철학!*  
React UI 컴포넌트는 매우 독립적이며 특정 관심사에 집중된 기능 블록이다.
컴포넌트 기반 아키텍처(Component-based architecture,CBA) 
일반적으로 일체형 UI에 비해 재사용과 유지보수 확장이 용이하다.  

## React의 장점

**1. 단순한 앱 개발**   React는 순수 자바스크립트로 만든 컴포넌트 기반 아키텍처다.  
선언형 스타일이며 개발자 친화적인 DOM 추상화를 제공한다.   
**2. 빠른 UI**   
React는 뛰어난 성능을 제공한다.   
가상 DOM 채택과  DOM의 변경사항을 비교할 때 사용하는 훌륭한 알고리즘 덕분이다.  
또한, 이런 이유로 헤드리스 브라우저를 사용하지 않고도 테스트를 수행할 수 있다.  
헤드리스 브라우저: GUI 없이 실행할 수 있는 브라우저. 대표적으로 PhantomJS 최근에는 Chrome과 Firefox가 헤드리스모드   
**3. 코드량감소**  
수많은 라이브러리와 컴포넌트를 접할 수 있다.
  
## 간결성
- 명령형 프로그래밍 , 코드의 복잡도가 높음
```
var arr=[1,2,3,4,5];
arr2 = [];
for(var i=0;i<arr.length;i++){
  arr2[i] = arr[i]*2;
}
console.log('a',arr2);

a[2,4,6,8,10]  
```  

- 선언형 프로그래밍 => 결과값에 더 집중함, 지역변수가 줄어들고 논리도 더 단순해짐
```
var arr= [1,2,3,4,5];
arr2 = arr.map(function(v,i){return v*2})
console.log('b',arr2);

b[2,4,6,8,10];
```  
React는 내부적으로 가상DOM을 사용하여 브라우저에 이미 반영된 뷰와 새로운 뷰의 차이점을 찾아낸다.  
이 과정을 DOM 비교 또는 상태와 뷰의 보정이라고 부른다.  
상태를 갱신하면 이에 따라 자동으로 갱신된다.  
jQuery사용시 갱신과정을 명령어로 작성해야함.   
AngularJS같은 프레임워크는 자동으로 뷰를 갱신한다. 그리고 양방향 데이터 바인딩을 이용한다.  
이것은 말 그래도 뷰와 모델이 양방향으로 데이터를 통신하고 동기화 한다는 것을 의미한다.  

## 자바스크립트를 이용한 컴포넌트 기반 아키텍처  
컴포넌트 기반 아키텍처는 React 이전에도 있었다. 관심사 분리, 느슨한 결합, 코드 재사용은 이방식의 핵심!으로 이점이 많다.  
코드 재사용이 쉬워서 코드를 줄일 수 있다는 것이 가장 대표적인 장점이다.  
React는 순수한 자바스크립트 이므로 새로운 언어를 배울 필요가 없다. 
```
account.map(function(account){ //배열의 각 요소에 대해 실행되는 콜백함수를 매개변수로 하는 배열 메서드 map
return React.createElement('div',null,account.name) //계정이름을 입력한 <div>를 반환하는 콜백함수
})
```
  
```
account.map(function(account,index){// 배열의 요소값과 array.map()이 제공하는 인덱스를 사용한다.
return React.createElement('div',{key:index},account.name) //인덱스를 key속성으로 하고 account.name을 텍스트로 가진 React 엘리먼트 <div>를반환한다.
})
```  

#강력한 추상화  
강력한 문서 모델 추상화를 제공한다. 내부의 인터페이스는 숨기고 대신에 정규화 과정을 거친 합성 메서드와 속성을 제공한다. 예를 들어 react에서 onclick이벤트가 발생하면 이벤트 핸들러는 브라우저의 원본 이벤트 객체 대신 이 원본 객체를 감싼 합성 이벤트 객체를 전달받는다.  
브라우저 종류와 상관없이 항상 같은 이벤트 객체를 전달받는 것이다. 또한 터치 이벤트에 대해서도 합성 이벤트를 제공하므로 모바일 기기를 대응한 웹 앱을 만들 때 매우 유용하다.  

## 속도와 테스트 용이성  
꼭 필요한 부분만 갱신하여 내부 상태와 뷰를 같게만든다.  
*innerHTML* 요소 전체 또는 서버측 렌더링처럼 전체 페이지를 다시 렌더링하는 것에 비하면 성능이 뛰어남  


## React 컴포넌트의 상태객체
상태객체는 컴포넌트의 멤버 변수로 this를 통해 접근할 수 있다. this.state.name 

# 초기값 설정
React.component를 사용하는 ES6 클래스의 생성자에서 선언
```
class Clock extends React.Component{
constrctor(props){
  super(props);
  this.state = {currentTime:new Date().toLocalString();}
}}

```
# 상태 갱신하기 
this.setState(data,callback) -> 비동기로 작동하기 때문에 새로운 상태에 의존하는 경우 콜백함수를 사용해야 새로운 상태가 적용된 후에 필요한 작업을 수행할 수 있다. 
setState() 가 render() 를 실행시킨다. (다시 랜더링하려면 this.forceUpdate() 호출)
일반적으로 이벤트 핸들러나 데이터 수신 또는 갱신을 처리하는 콜백함수에서 호출된다. 
``` 
constructor(props){
  super(props);
  this.state = {
    userName: 'hanyujin',
    userEmail: 'h@naver.com',
    userId: 'jin'
  }
}
updateValue(){
  this.setState({userName:'hanjihyun'}); //userName만 변경
}
```
 
 # 상태비저장 컴포넌트 
 - 상태 객체가 없는 것 
 - React 라이프사이클 이벤트, 메서드를 갖지않는것 
 - 오직 뷰를 렌더링 
 - 예측할 수 있고 유지보수 디버깅이 편리하다 
  
  ``` 
  class HelloWorld extends React.Componet{
    render(){
      return <h1 {...this.props}>Hello {this.props.frameworkName} word!!!</h1>
    }
  }
 ``` 
 ```
  const Helloworld  = function(props){
      return <h1 {...this.props}>Hello {this.props.frameworkName} word!!!</h1>
  }
  ``` 
  ``` 
  function Link(props){
    return <a href={props.href} target="_blank" className = "btn_primary">{props.text}</a>
  }
  reactDOM.render(<Link text = 'Buy react quickly' href='https://..'>,document.getElementById('content'));
  ``` 
  ``` 
  const Link = props=><a href= {props.href} target="_blank" className = "btn-primary">{props.text}</a>
  ``` 
  ``` 
  const Link( props )=>{
  return (<a href= {props.href} target="_blank" className = "btn-primary">{props.text}</a>)};
  ```  
  ```
  function Link = (props)=>{
  return (<a href= {props.href} target="_blank" className = "btn-primary">{props.text}</a>)}; 
  ```


## 상태비저장 컴포넌트와 상태저장 컴포넌트의 비교 
- 상태비저장 컴포넌트 
HTML렌더링을 처리하는 것으로 충분한 경우 별도의 인스턴스를 생성하거나 라이프사이클 메서드를 사용하지 않아도 될때사용한다 
 상태비저장 컴퓨넌트가 반드시 정적은 아니다 
 ``` 
render(){
  return <div><DigitalDisplay time = {this.states.currentTime} /></div>
}
const DigitalDisplay = function(props){
  return <div>{props.time}</div>
} 
``` 

//안티패턴 
``` 
const DigitalDisplay = function(props){
  return <div>{DigitalDisplay.locale(props.time)}</div>
} 
DigitalDisplay.locale = (time)=>{
  return (new Date(time)).toLocaleString('EU');
} 
``` 
//좋은 패턴 
``` 
const DigitalDisplay = function(props){
  const locale = time=>(new Date(time)).toLocalString('EU'); 
  return <div>{local(props.time)}</div> 
}
