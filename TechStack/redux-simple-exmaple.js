// 1.create a reducer. reducer is a function that returns data
const reducer = (state = [], action) => {
    if(action.type ==='split_string') {
        return action.payload.split('');
      }
    else if(action.type ==='add_character') {
      //DO NOT DO this, instead create new array

      //state.push(action.payload)
      //return state

      //REMEBER ALWAYS RETURN NEW ARRAY FROM REDUCERS
      return [...state, action.payload]
    }
    return state;
  }
  //2.create a store with the reducer. Store is the container for the reducer and state
  const store = Redux.createStore(reducer);
  
  store.getState();
  //3. create actions(action is a javascrip object) 
  //to use as second argument into the reducer, always first propery of action is type
  const action = { 
        type: 'split_string',
        payload: 'asdf'
  }
  
  
  const action2 = {
      type: 'add_character',
    payload: 'a'
  }
  
  //execute the action from the store the result will be new copy of our state
  store.dispatch(action)
  //see the new state for this action
  store.getState();
  
  store.dispatch(action2)
  store.getState();