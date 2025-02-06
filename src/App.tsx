import React from 'react'
import './App.scss'
import Form from './components/form/Form'
import Progress from './components/progres/Progress'
import Task from './components/task/Task'

function App() {
  return (
    <div className="App">
      <Form />
      <section className="App__task-progress">
        <Progress />
        <Task />
      </section>
    </div>
  )
}

export default App
