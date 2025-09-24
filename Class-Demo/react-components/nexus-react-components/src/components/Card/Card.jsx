import './Card.css'

function Card(props){
    return <div className='card'>
        <p className="title">{props.title}</p>
        <p className="description">{props.description}</p>
        <p className="date">{props.date}</p>
    </div>
}
export default Card