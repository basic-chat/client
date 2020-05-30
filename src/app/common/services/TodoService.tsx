export default {
    getTodos : () => {
        return fetch('/api/user/todos').then(response => {
            if(response.status !== 401) {
                return response.json().then(data => data);
            }
            else {
                return {message: {msgBody: "unAuthorized", msgError: true}}
            }
        })
    },
    postTodo : (todo: any) => {
        return fetch('/api/user/todo', {
            method: "post",
            body: JSON.stringify(todo),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if(response.status !== 401) {
                return response.json().then(data => data)
            }
            else {
                return {message: {msgBody: "unAuthorized", msgError: true}}
            }
        })
    }
}