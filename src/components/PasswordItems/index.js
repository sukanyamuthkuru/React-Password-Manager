import './index.css'

const PasswordItems = props => {
  const {details, showPassword, onDelete} = props
  const {id, website, userName, password} = details
  const onClickDelete = () => {
    onDelete(id)
  }
  return (
    <li className="list-item-container">
      <div className="profile-container">
        <h1 className="profile-heading">{website[0]}</h1>
      </div>
      <div className="details-container">
        <p className="website-name">{website}</p>
        <p className="website-name">{userName}</p>
        {showPassword ? (
          <p className="website-name">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars"
          />
        )}
      </div>
      <button
        type="button"
        className="button-delete"
        onClick={onClickDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItems
