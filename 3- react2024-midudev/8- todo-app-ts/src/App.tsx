import { useState } from "react"
import Todos from "./components/Todos"
import { type TodoId, type Todo as TodoType } from "./types"

export const mockTodos = [
  {
    completed: true,
    id: '7b6d5f38-e510-4409-aeb0-1f6f6422384e',
    title: 'Ver el stream de midu'
  },
  {
    completed: true,
    id: 'efad0afc-7d2e-4020-8ef4-14fd0b832de8',
    title: 'Aprender React con el curso de midu'
  },
  {
    completed: false,
    id: '6a3d0d0f-d2d6-4d2a-9b08-5a5d8a5e0c1d',
    title: 'Mover las manitas'
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })

    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Todos
        onToggleCompleteTodo={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={todos}
      />
    </div>
  )
}

export default App

