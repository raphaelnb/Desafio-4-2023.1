import { useState } from 'react'
import './Card.css'
import plus from '../assets/imgs/plus.svg'
import img4 from '../assets/imgs/image4.svg'
import img5 from '../assets/imgs/image5.svg'
import confirm from '../assets/imgs/confirm-icon.svg'
import cancel from '../assets/imgs/cancel-icon.svg'

const Card = ({
    addTask,
    title,
    handleTitle,
    description,
    handleDescription,
    responsible,
    handleResponsible,
    deadline, 
    handleDeadline
}) => {
    const [newCard, setNewCard] = useState(true) // lógica para mostrar o form ou o botão de adicionar

    // lógica para mostrar o form ou o botão de adicionar 
    const toggleCardd = () => {
        setNewCard(!newCard)
        console.log('toggle')
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask()
        toggleCardd()
    }
    
    return (
        <div id="form">
            {newCard ? (
                <div>
                    <button onClick={toggleCardd}><img src={plus}/></button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} id='card-form' >
                    <div id='title-form'>
                        <input id='title-form-text'
                            value={title}
                            onChange={handleTitle}
                        />
                    </div>
                    <div id='responsible-form' className='form-fild'>
                        <img src={img4} alt="" />
                        <input
                            value={responsible}
                            onChange={handleResponsible}
                        />
                    </div>
                    <div id='deadline-form' className='form-fild'>
                        <img src={img5} alt="" id='icon-deadline' />
                        <input
                            value={deadline}
                            onChange={handleDeadline}
                        />
                    </div>
                    <div id='description-form' className='form-fild' >
                        <input
                            value={description}
                            onChange={handleDescription}
                        />
                    </div>
                    <div>
                        <button onClick={toggleCardd}><img src={cancel} id='cancel-btn'  className='button-icons'/></button>
                    </div>
                    <div>
                        <button type="submit"><img src={confirm} id='confirm-btn' className='button-icons'/></button>
                    </div>
            </form>
            )}
            
        </div>
    )
}

export default Card