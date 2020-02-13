# Redux

## What's Redux

>A Predictable State Container for JS Apps


If we want to understand why we need Redux, there have two rules we should know.

- The web application is a state machine, each state related to a specific view.
- Every state is stored in one object.

## Why we need Redux

First, you need to familiar with React. There have two fundamental concepts in React. The first one is **props**, and the second one is **state**. Moreover, the children's state can't pass up to their parent components. The only universal way to change the state of the parent component is by calling the callback function, which passed as **props**.


There is a considerable limitation, which is the data always be transformed from top to bottom. Therefore, Redux appears to solve this problem, which uses **Provider** to store all states in the top, then components in different layers can fetch its related states or change it.

However, the component can't directly change the global state object, and they only dispatch an action(consisted of type and payload) to call the provider to change it.

### Store

The store is where used to store data. There only has had one store in one application.

```javascript
import { createStore } from 'redux';
const store = createStore(fn);

```

### State

State can be obtained by **store.getState()**. And every state related to a View, which means you can get View from state and vice verse.


```javascript
import { createStore } from 'redux';
const store = createStore(fn);

const state = store.getState();

```


### Action

Users can only access View, and View will dispatch an action to state.

```javasript

const action = {
  type: 'ADD_TODO',
  payload: 'Learn Redux'
};

```

### Action creator

```javascript


function addTodo(text) {
  return {
    type: "ADD_TODO",
    text
  }
}

const action = addTodo('Learn Redux');

```


### store.dispatch()

```javascript

import { createStore } from 'redux';
const store = createStore(fn);

store.dispatch({
  type: 'ADD_TODO',
  payload: 'Learn Redux'
});

//Other way
store.dispatch(addTodo('Learn Redux'));

```


### reducer()

When the store receives an action, it must give a new state because the state trigger is rendering the View. The calculation process of the state is called a reducer. Reducer is a pure function, and its parameters are action and current state, then return a new state.


```javascript

const reducer = function (state, action) {
  // ...
  return new_state;
};


 
const defaultState = 0;
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD':
      return state + action.payload;
    default: 
      return state;
  }
};

const state = reducer(1, {
  type: 'ADD',
  payload: 2
});

```

### store.subscribe()
Every time when state change, execute this function.

```javascript
import { createStore } from 'redux';
const store = createStore(reducer);

store.subscribe(listener);


let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

unsubscribe();
```

Execute the return function of the subscribe() function will unsubscribe.

