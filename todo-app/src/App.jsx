import { useRef, useState } from 'react';
import Task from "./components/Task"
import styles from './App.module.css';

function App() {
  const inputRef = useRef(null)
  const [tasks, setTasks] = useState([])

  function handleAddTask() {
    const newTask = {
      id: tasks.length + 1,
      title: inputRef.current.value,
      isCompleted: false
    }

    setTasks([...tasks, newTask])
    inputRef.current.value = ''
  }

  function handleCompleteTask(id) {
    const taskIndex = tasks.findIndex(item => item.id === id)

    if (taskIndex < 0) return

    const newTasks = [...tasks];
    newTasks[taskIndex].isCompleted = true

    setTasks(newTasks)
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Todo App</h1>

      <div className={styles.inputGroup}>
        <input type="text" className={styles.input} ref={inputRef} placeholder='Task name' />
        <button className={styles.button} onClick={handleAddTask}>Add</button>
      </div>

      <div className={styles.tasks}>
        {tasks.map(item => (
          <Task key={item.id} task={item} btAction={handleCompleteTask} />
        ))}

        {!tasks.length && <p>No tasks yet... </p>}
      </div>
    </main>
  )
}

export default App
