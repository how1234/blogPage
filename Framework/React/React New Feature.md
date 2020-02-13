# React New Feature


## Context
Context offers a way can let data not transfer layer by layer, it's like a global variable. The major function is to transfer the data over layers.


<Provider>


<Consumer>

### API

createContext(defaultValue)


```React
import React,{Component,createContext} from 'react'
const ExampleContext = createContext() 
const OnLineContext = createContext()

class Leaf extends Component{
	render() {
		<ExampleContext.Consumer>
			{
				contextValue => (
					<onLineContext.Consumer>
					{
					 onLine => <h1> value:{contextValue}, onLine:{String(onLine)} </h1>
					}
					</onLineContext.Consumer>
				) 
				//100
			}
		</ExampleContext.Consumer>
	}
}

class Middle extends Component{
	render(){
		return <Leaf/>
	}
}

class App extends Component{
	state = { 
		value:100,
		onLine:false
	}
	render(){
		const {value,onLine} = this.state
		return (
		<ExampleContext.Provider value={value}>
			<OnLineContext.Provider value={onLine}>
				<Middle/>
			</OnLineContext.Provider>
		</ExampleContext.Provider>
		)
	}
	

}
```
If a **Consumer** can't find out its corresponding **Provider**, it won't popup, but use the value passed in the createContext() function.

## Context Type
If there only one context, we can use contextType to instead context Consumer.. 

``` react
import React,{Component,createContext} from 'react'
const ExampleContext = createContext() 
const OnLineContext = createContext()

class Leaf extends Component{
	static contextType = ExampleContext
	render() { 
		const contextValue = this.context
			return (
			<h1>Value:{contextValue}</h1>
			) 
		

	}
}

class Middle extends Component{
	render(){
		return <Leaf/>
	}
}

class App extends Component{
	state = { 
		value:100,
		onLine:false
	}
	render(){
		const {value,onLine} = this.state
		return (
		<ExampleContext.Provider value={value}>
			<OnLineContext.Provider value={onLine}>
				<Middle/>
			</OnLineContext.Provider>
		</ExampleContext.Provider>
		)
	}
	

}
```



## Lazy and Suspense
Lazy loading

Webpack - Code Splitting

import('./details.js').then(...)


```React
import React, {Component,lazy,Suspense} from 'React'

const About = lazy(() => import ('./About.jsx'));


class App extends Component{
	render(){
		
		return (
			<div>	
				<Suspense fallback={<div>loading</div>}
					<About></About>
				</Suspense>
			</div>
		)
	}
	

}
```

However, when error happened, the error cannot be catch. Therefore, we can use **componentDidCatch()** or a state method **getDerivedStateFromError()** to catch the error.

```React
import React, {Component,lazy,Suspense} from 'React'
import Loading from './Loading.js'
const About = lazy(() => import ('./About.jsx'));


class App extends Component{
	state = {
		hasError:false
	}
	
	/** componentDidCatch(){
		this.setState({
			hasError:true
		});
	}
	*/
	
	static getDerivedStateFromError(){
		return{
			hasError:true
		}
	}
	
	
	
	render(){
		if(this.state.hasError){
			return <div>error</div>
		}
		return (
			<div>	
				<Suspense fallback={<Loading/>}
					<About></About>
				</Suspense>
			</div>
		)
	}
	

}
```

## Memo



if **shouldComponentUpdate(nextProps,nextState)** return true, this component will render again. Otherwise it will not render again.

**PureComponent** already contains a simple check like shouldComponentUpdate(). However, it won't check the data in deeper layer like {person:{person.age}}. If you change the person.person.age, the PureComponent won't render it again.


**Memo** is like PureComponent, but it only apply on stateless component(function component)

```React

const Foo = memo(function Foo(props)){
	return <div>{props.person.age}</div>

}


```

Didn't finished: how Memo implement the checking and has it side effect or not?

