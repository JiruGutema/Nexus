import './Task.css'

function Task(props){
    return <div className='Task'>
        <p className="title">{props.title}</p>
        <p className="description">{props.description}</p>
        <p className="date">{props.date}</p>
    </div>
}
export default Task