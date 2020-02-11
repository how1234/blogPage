# React Hooks

>Hooks let you use state and other React features without writing a class


In the previous version, the stateless function usually refer to function component. However, the function component now can have state as so called stateful(class) component.


- Hard to reuse the code in class(we can use HOC and properties rendering to reuse the code, but it can cause layer redundancy)
- Some logic inside life cycle is too complicated.
- **this** pointing problems.

Advantages of Hooks:

- There has no **this** problems.
- More convinent on reusing code.
- side effect(not related to rendering view)





## State Hooks
We have this class component:

```React
class App extends Component{
  state = {
    count:0
  }
  render() {
    const {count} = this.state
    return(

      <div>
        <button
        onClick={ () =>this.setState({count:count+1})}>
          Click ({count})
        </button>
      </div>
    ) 
  }
}

```

And we can use hooks to implement the equal function component like above component.


```React
function App() {
const [count,setCount] = useState(0) //Set the default value of the count to 0
  
  return (
    <div>
      <button onClick={ ()=> {setCount(count+1)}}>
        Click ({count})
      </button>

    </div>
  );
}


```
You can pass a function to delay initialization of the state
```React
const [count,setCount] = useState( ()=>{
	return props.defaultCount || 0;
})
```

You can only call hook in the top of the function. And there is a tool called eslint-plugin-react-hooks can help to check this.

```terminal
sudo npm i eslint-plugin-react-hooks -g
```


## Effect Hooks

### Side effect
- Event Binding
- Network Request
- DOM access


### Timing

-After mount
-After update
-Before unmount

Now we use one function to instead the life cycle function in the previous version of React

```React
class App extends Component{
  state = {
    count:0,
    size:{
      width:document.documentElement.clientWidth,
      height:document.documentElement.clientHeight
    }
  }

  onResize=()=>{
    this.setState({
      size:{
        width:document.documentElement.clientWidth,
        height:document.documentElement.clientHeight
      }
    })
  }

  componentDidMount(){
    document.title=this.state.count

    window.addEventListener('resize',this.onResize,false)

  }
  componentWillUnmount(){

  }
  componentDidUpdate(){
    document.title=this.state.count
  }
  render() {
    const {count,size} = this.state
    return(

      <div>
        <button
        onClick={ () =>this.setState({count:count+1})}>
          Click ({count})
          size: {size.width} x {size.height}
        </button>
      </div>
    ) 
  }
}


```


Hooks:

```React
function App() {
  const [count,setCount] = useState(0) //Set the default value of the count to 0
  const [size,setSize] = useState({
    width:document.documentElement.clientWidth,
    height:document.documentElement.height
  })

  const onResize = () =>{
    setSize({
      width:document.documentElement.clientWidth,
      height:document.documentElement.height
    })
  }

  useEffect( ()=> {
    document.title = count
  })

  useEffect( ()=> {
    window.addEventListener('resize',onResize,false)
    
    //cleanup function.For example when a component using that effect is unmounting
    return ()=>{
      window.removeEventListener('resize',onResize,false)
    }
  },[])
  //The useEffect() will be triggered only after the second parameter changed. 
  //So [] means this function only be called only after the first render.(because [] never changed)
  


  return (
    <div>
      <button onClick={ ()=> {setCount(count+1)}}>
        Click ({count})
        size: {size.width} x {size.height}
      </button>

    </div>
  );
}



```

Two parts we need to clarify. 
- cleanup function. 
	
- Second parameter



The useEffect() will be triggered only after the second parameter changed. So [] means this function only be called only after the first render.(because [] never changed)
  

## Context Hooks(useContext)

There are several ways can apply context
- Provider and Consumer
- Static ContextType

```javascript

const CountContext = createContext()

//1
<CountContext.Consumer>
	<Component/>
</CountContext.Consumer>

//2
static contextType = CountContext;

//3
const count = useContext(CountContext)


```


## useMemo
useEffect always run after rendering. useMemo( () => {},[]) is executing while rendering.The second parameter has the same effect as useEffect(). 

``` react

const double = useMemo( ()=> {
	return count * 2
},[count===3]);

```

The **double** only be reinitialized value when [count===3] changed.  So the double will be 6 and 8. 


## useCallback

if useMemo() return a function like code following ```const onClick = useMemo( () => fn, [])```

It will equals to ```const onClick = useCallback(fn,[])```


The goal of useMemo() and useCallback() is to optimize the
performance.

## Ref Cooks

useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component. 

```javascript
const fn = useRef(fn)

useEffect( () => {
	fn.current = setInterval( ()=> {
		setCount(count => count+1)
	},1000)
},[])

useEffect( () => {
	if(count>=10){
		clearInterval(it.current)
	}
})

```

## Customize Hooks

```javascript
function useCount(defaultValue){
	const [count,setCount] = useState(defaultValue)
	
	//logic
	
	return [count,setCount]
}

```

## Hooks Rules

Refers to [React](https://ru.react.js.org/docs/hooks-rules.html)

>Only Call Hooks at the Top Level
>
Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function. By following this rule, you ensure that Hooks are called in the same order each time a component renders. That’s what allows React to correctly preserve the state of Hooks between multiple useState and useEffect calls. (If you’re curious, we’ll explain this in depth below.)

>Only Call Hooks from React Functions
>
>Don’t call Hooks from regular JavaScript functions. Instead, you can:

>✅ Call Hooks from React function components.
>
>✅ Call Hooks from custom Hooks (we’ll learn about them on the next page).

## 