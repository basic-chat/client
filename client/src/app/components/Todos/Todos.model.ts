export interface ITodosProps {
    todos: {
        todo: string,
        _id: number
    }[],
    todo: {name: string},
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    onChange: (e: React.FormEvent<HTMLInputElement>) => void,
    message: string | null
}

export type SetUser = {
    username: any,
    role: string,
}

export interface IAuthContext {
    setUser: (value: SetUser) => void,
    setIsAuthenticated: (value: boolean) => void,
}