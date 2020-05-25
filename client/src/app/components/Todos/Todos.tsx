import React from 'react';
import Message from '../Message';
import TodoItem from '../TodoItem';
import { ITodosProps } from './Todos.model';

const Todos = (props: ITodosProps) => (
    <div>
        <ul className="list-group">
            {
                props.todos.map((todo: {todo: string, _id: number}) => (
                    <TodoItem key={todo._id} todo={todo} />
                ))
            }
        </ul>
        <br />

        <form onSubmit={props.onSubmit}>
            <label htmlFor="todo">Enter Todo</label>
            <input
                type="text"
                value={props.todo.name}
                onChange={props.onChange}
                className="form-control"
                placeholder="Please Enter Todo" 
            />
            <button
                className="btn btn-lg btn-primary btn-block"
                type="submit"
            >
                Submit
            </button>

            {props.message && <Message message={props.message} />}

        </form>
    </div>
)

export default Todos;