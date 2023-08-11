import './TaskDetail.css'
import img3 from '../assets/imgs/image3.svg'
import img5 from '../assets/imgs/image5.svg'

const TaskDetail = ({ title, description, responsible, deadline, typebg }) => {
    return (
        <div id='task-detail' className={`${typebg === "a-fazer" ? "bg-fazer" : typebg === "fazendo" ? "bg-fazendo" : "bg-feito"}`} >
            <div id='info-title' className={`${typebg === "a-fazer" ? "title-fazer" : "title-padrao"}`}>{title}</div>
            <div id='info-responsible'><img src={img3} className='task-icons'/> {responsible}</div>
            <div id='info-deadline'><img src={img5} className='task-icons' id='icon-deadline'/> {deadline}</div>
            <div id='info-description' className={`${typebg === "a-fazer" ? "description-fazer" : "description-padrao"}`} >{description}</div>
        </div>
    )
}

export default TaskDetail