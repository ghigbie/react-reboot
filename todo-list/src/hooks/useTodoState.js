import useLocalStorageState from './useLocaStorageState';
import uuid from 'uuid/v4';

export default initialTodos => {
    const [todos, setTodos] = useLocalStorageState(initialTodos)

    const addTodo = newTodoText => {
        setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
    };
    const removeTodo = todoId => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodos);
    };
    const toggleTodo = todoId => {
        const updatedTodos = todos.map(todo =>
            todo.id === todoId ? { ...todo, completed: !todo.completed } : todo);
        setTodos(updatedTodos);
    };
    const editTodo = (todoId, newTask) => {
        const updatedTodos = todos.map(todo =>
            todo.id === todoId ? { ...todo, task: newTask } : todo
        );
        setTodos(updatedTodos);
    }

    return {
        todos,
        addTodo,
        removeTodo,
        toggleTodo,
        editTodo
    }
};