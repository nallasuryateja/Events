// Write your code here
import './index.css'

const EventItem = props => {
  const {eachDetails, onGlickk} = props
  const {imageUrl, name, location, registrationStatus} = eachDetails
  const onClickCard = () => {
    console.log('clicked')
    onGlickk(registrationStatus)
  }
  return (
    <li className="card" onClick={onClickCard}>
      <img src={imageUrl} alt={name} />
      <h1>{name}</h1>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
