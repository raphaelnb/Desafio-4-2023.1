// Componente para filtrar as Tasks de acordo com o type

import TaskDetail from "./TaskDetail"

const Tasks = ({ tasks, type }) => {
    const typeTask = tasks.filter((task) => task.type === type)
    return (
        <div id="tasks">
            {typeTask.map(task => {
                return (
                    <TaskDetail
                        key={task.title}
                        title={task.title}
                        description={task.description}
                        responsible={task.responsible}                            
                        deadline={task.deadline}
                        typebg={task.type}
                    />
                )
            })}
        </div>
    )
}

export default Tasks