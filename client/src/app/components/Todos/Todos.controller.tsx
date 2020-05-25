import React, {useState, useContext, useEffect} from 'react';
import TodoService from '../../common/services/TodoService';
import { AuthContext } from '../../common/context/AuthContext';
import Todos from './Todos';
import { IAuthContext } from './Todos.model';

const TodosController = () => {
    const [todo, setTodo] = useState({name: ""});
    const [todos, setTodos] = useState([]);
    const [message, setMessage] = useState(null);
    const authContext: IAuthContext = useContext(AuthContext);

    useEffect(() => {
        TodoService.getTodos().then(data => {
            setTodos(data.todos);
        })
    },[])

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        TodoService.postTodo(todo).then(data => {
            const {message} = data;
            resetForm();
            
            if(!message.msgError) {
                TodoService.getTodos().then(getData => {
                    setTodos(getData.todos);
                    setMessage(message);
                })
            }
            else if(message.msgBody === "UnAuthorized"){
                setMessage(message);
                authContext.setUser({username: "", role: ""});
                authContext.setIsAuthenticated(false);
            }
            else {
                setMessage(message);
            }
        })
    } 

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLTextAreaElement;
        setTodo({name: target.value});
    }

    const resetForm = () => {
        setTodo({name: ""})
    }

    return  (
        <Todos 
            todos={todos}
            todo={todo}
            message={message}
            onSubmit={onSubmit}
            onChange={onChange}
        />
    )
}

export default TodosController;