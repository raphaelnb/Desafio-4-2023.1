import TaskDetail from "./TaskDetail"

const Tasks = ({ tasks, type }) => {
    return (
        <div>
            {tasks.map(task => {
                return (
                    <TaskDetail
                        key={task.title}
                        done={type}
                        title={task.title}
                        description={task.description}
                        responsible={task.responsible}                            
                        deadline={task.deadline}
                    />
                )
            })}
        </div>
    )
}

export default Tasks