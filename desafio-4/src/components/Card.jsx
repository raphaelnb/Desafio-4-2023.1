import './Card.css'

const Card = ({
    addTask,
    title,
    handleTitle,
    description,
    handleDescription,
    responsible,
    handleResponsible,
    deadline, 
    handleDeadline,
}) => {
    return (
        <div id="form">
            <form onSubmit={addTask} >
                <div>
                    <input
                        value={title}
                        onChange={handleTitle}
                    />
                </div>
                <div>
                    <input
                        value={responsible}
                        onChange={handleResponsible}
                    />
                </div>
                <div>
                    <input
                        value={deadline}
                        onChange={handleDeadline}
                    />
                </div>
                <div>
                    <input
                        value={description}
                        onChange={handleDescription}
                    />
                </div>
                <div>
                    <button type="submit">v</button>
                </div>
                <div>
                    <button>x</button>
                </div>
            </form>
        </div>
    )

}

export default Card