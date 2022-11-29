export type Todo = {
  id: number
  todo: string
  completed: boolean
  userId: number
}

export interface Todos {
  todos: Todo[]
  total: number
  skip: number
  limit: number
}

export type Control = string | null | undefined

export type SingUp = {
    login: Control
    name: Control
    email: Control
    pass: Control
    repeatPassword: Control
    phone: Control
}