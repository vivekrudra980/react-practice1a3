import './index.css'

const PlayListItem = props => {
  const {details, deleteItem} = props
  const {id, name, duration, genre, imageUrl} = details

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="list-item">
      <div className="img-container">
        <img className="image" src={imageUrl} alt="track" />
        <div className="name-container">
          <p>{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="delete-container">
        <p>{duration}</p>
        <button
          type="button"
          data-testid="delete"
          className="button"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </li>
  )
}
export default PlayListItem
