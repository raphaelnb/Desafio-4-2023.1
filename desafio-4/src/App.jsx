import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Tasks from './components/Tasks'

const App = () => {
    const [tasks, setTasks] = useState([])
    const [title, setTitle] = useState('Fazer')
    const [description, setDescription] = useState('Descrição')
    const [responsible, setResponsible] = useState('Responsável')
    const [deadline, setDeadline] = useState('dd/mm/YYYY')

    // Adiciona a tarefa ao Array tasks
    const addTask = (type) => {
      const taskObject = {
        title: title,
        description: description,
        responsible: responsible,
        deadline: deadline,
        type: type
      }
      
      setTasks(tasks.concat(taskObject))
      console.log(`added on ${type}`)
      setTitle('Fazer')
      setDescription('Descrição')
      setResponsible('Responsável')
      setDeadline('dd/mm/YYYY')
    }

    // Funções handle para acompanhar o onChange dos imputs do Card

    const handleTitle = (e) => {
      console.log(e.target.value)
      setTitle(e.target.value)
    }

    const handleDescription = (e) => {
      console.log(e.target.value)
      setDescription(e.target.value)
    }

    const handleResponsible = (e) => {
      console.log(e.target.value)
      setResponsible(e.target.value)
    }

    const handleDeadline = (e) => {
      console.log(e.target.value)
      setDeadline(e.target.value)
    }

  return (
    <div id='container'>
      <div id='a-fazer' className='column-task' >
        <h2>A Fazer</h2>
        <Tasks tasks={tasks} type='a-fazer' />
          <Card 
            addTask={() => addTask('a-fazer')}
            title={title}
            handleTitle={handleTitle}
            description={description}
            handleDescription={handleDescription}
            responsible={responsible}
            handleResponsible={handleResponsible}
            deadline={deadline}
            handleDeadline={handleDeadline}
          />   
      </div>
      <div id='fazendo' className='column-task'>
        <h2>Fazendo</h2>
        <Tasks tasks={tasks} type='fazendo' />
            <Card 
              addTask={() => addTask('fazendo')}
              title={title}
              handleTitle={handleTitle}
              description={description}
              handleDescription={handleDescription}
              responsible={responsible}
              handleResponsible={handleResponsible}
              deadline={deadline}
              handleDeadline={handleDeadline}
            />
      </div>
      <div id='feito' className='column-task'>
        <h2>Feito</h2>
          <Tasks tasks={tasks} type='feito'/>
          <Card 
                addTask={() => addTask('feito')}
                title={title}
                handleTitle={handleTitle}
                description={description}
                handleDescription={handleDescription}
                responsible={responsible}
                handleResponsible={handleResponsible}
                deadline={deadline}
                handleDeadline={handleDeadline}
          />
      </div>
    </div>
  )
}

export default App