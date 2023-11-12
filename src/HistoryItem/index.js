import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteListItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails
  const deleteItem = () => {
    deleteListItem(id)
  }
  return (
    <li className="item-container">
      <p className="time">{timeAccessed}</p>
      <div className="card">
        <div className="history-item">
          <img alt={title} src={logoUrl} className="image" />
          <p className="name">{title}</p>
          <p className="url">{domainUrl}</p>
        </div>
        <img
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="image"
          onClick={deleteItem}
        />
      </div>
    </li>
  )
}

export default HistoryItem
