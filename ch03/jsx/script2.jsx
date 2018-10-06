/*

#3.3 jsx를 이용해서 생성한 helloworld 클래스
class HelloWorld extends React.Component{
	render(){
		return(
			<div>
				<h1>1. Hello </h1>
				<h1>2. Hello </h1>
			</div>
		)
	}
}
ReactDOM.render(
	<HelloWorld/>,
	document.getElementById('content')
)


class HelloWorld extends React.Component {
  render() {
    return <h1 {...this.props}>Hello {this.props.frameworkName} world!!!</h1>
  }
}

ReactDOM.render(
  <div>
    <HelloWorld
      id='ember'
      frameworkName='file1.js'
      title='A framework for creating ambitious web applications.'/>
    <HelloWorld
      id='backbone'
      frameworkName='file2.js'
      title='Backbone.js gives structure to web applications...'/>
    <HelloWorld
      id='angular'
      frameworkName='file333.js'
      title='Superheroic JavaScript MVW Framework'/>
  </div>,
  document.getElementById('content')
)

#3.4 jsx에서 변수 출력하기
let hellowordReactElement =<h1>helloworld</h1>

class HelloWorld extends React.Component{
	render(){
		return(
			<div>
				{hellowordReactElement}{hellowordReactElement}
			</div>
		)
	}
}
ReactDOM.render(
	<HelloWorld/>,
	document.getElementById('content')
)

#3.5 속성다루기 

class Helloworld extends React.Component{
	render(){
		return <h1 {...this.props}>Hello {this.props.frameworkName} world!!!!</h1>
	}
}

ReactDOM.render(
	<div> 
		<Helloworld id = 'ember' frameworkName='Ember.js' title='a framework for...applications'/>,
		<Helloworld id = 'backbone' frameworkName='Backbone.js' title='a strcture for...applications'/>,
		<Helloworld id = 'angular' frameworkName='Angular.js' title='a superheroic for...applications'/>,
	</div>,
	document.getElementById('content')
	
)

#3.6 컴포넌트 메서드 호출하여 url 가져오기
class Content extends React.Component{
	getUrl(){
		return 'https://www.naver.com/'
	}
	render(){
		return (<div><p>your rest url <a href={this.getUrl()}>{this.getUrl()}</a></p></div>)
	}
}
ReactDOM.render(
	<Content />,
	document.getElementById('content')
)
*/
