import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import * as action from './store/actions';
import { initiateStore } from './store/store';

const store = initiateStore();



const App = () => {

  const [state, setState] = useState(store.getState());

  const completeTask = (taskId) => {
    store.dispatch(action.taskCompleted(taskId));
  }

  const changeTitle = (taskId) => {
    store.dispatch(action.titleChanged(taskId));
  }

  const removeTask = (taskId) => {
    store.dispatch(action.taskRemoved(taskId));
  }

  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState());
      console.log(store.getState());
    });
  }, []);
  
 
  return (<>
  <h1>App</h1>
  <ul>
    {state.map(el => (
    <li key={el.id}>
      <h3>{el.title}</h3>
      <p>{`Completed: ${el.completed}`}</p>
      <button onClick={() => { completeTask(el.id) }}>Completed</button>
      <button onClick={() => { changeTitle(el.id) }}>Change Title</button>
      <button onClick={() => { removeTask(el.id) }} style={{color: "#fff", backgroundColor: "#ff0000"}}>Delete</button>
      <hr />
    </li>
    ))}
  </ul>
  </>)
}

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);
