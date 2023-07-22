import './TaskDetail.css'

const TaskDetail = ({ title, description, responsible, deadline, done }) => {
    return (
        <div id='task-detail'>
            <h3>{title}</h3>
            <div id='task-info'>
                <h4 id='info-responsible'>{responsible}</h4>
                <h4 id='info-deadline'>{deadline}</h4>
                <h4 id='info-description'>{description}</h4>
                {done}
            </div>
        </div>
    )
}

export default TaskDetail