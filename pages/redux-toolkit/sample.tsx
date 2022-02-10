import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TodoState, todoActions } from 'store/redux-toolkit/modules/todo';

const sample = () => {
  const { todoList } = useSelector<any>(state => state.todo) as TodoState;
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(todoActions.addTodoList('test'))}>add</button>
      <button onClick={() => dispatch(todoActions.removeTodoList())}>delete</button>
      <ul>
        { todoList.map((todo, index) => <li key={index}>{todo}</li>)}
      </ul>
    </div>
  )
}

export default sample