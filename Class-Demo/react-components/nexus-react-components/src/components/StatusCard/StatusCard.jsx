import './StatusCard.css'

function StatusCard(props){
    return <div className='status-card'>
        <p className="title">{props.title}</p>
        <p className="number">{props.number}</p>
        <p className="description">{props.description}</p>
    </div>
}
export default StatusCard