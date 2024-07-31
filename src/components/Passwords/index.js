import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItems'
import './index.css'

class Passwords extends Component {
  state = {
    passwordsList: [],
    websiteInput: '',
    userName: '',
    password: '',
    count: 0,
    showPassword: false,
    searchInput: '',
  }

  onChangeWebsite = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onAdd = event => {
    event.preventDefault()

    const {userName, websiteInput, password} = this.state
    const newPassword = {
      id: uuidv4(),
      website: websiteInput,
      userName,
      password,
    }
    this.setState(pre => ({
      passwordsList: [...pre.passwordsList, newPassword],
      websiteInput: '',
      userName: '',
      password: '',
      count: pre.count + 1,
    }))
  }

  onDelete = id => {
    const {passwordsList} = this.state
    const filteredItems = passwordsList.filter(each => each.id !== id)
    this.setState(pre => ({
      passwordsList: filteredItems,
      count: pre.count - 1,
    }))
  }

  onChangeShowPassword = () => {
    this.setState(pre => ({
      showPassword: !pre.showPassword,
    }))
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {
      passwordsList,
      websiteInput,
      userName,
      password,
      count,
      showPassword,
      searchInput,
    } = this.state

    const filteredList = passwordsList.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    let noPasswords

    if (passwordsList.length === 0 || filteredList.length === 0) {
      noPasswords = (
        <>
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
            className="nopasswords-image"
          />
          <p className="noPassword">No Passwords</p>
        </>
      )
    } else {
      noPasswords = (
        <ul className="list-container">
          {filteredList.map(each => (
            <PasswordItem
              key={each.id}
              details={each}
              onDelete={this.onDelete}
              showPassword={showPassword}
            />
          ))}
        </ul>
      )
    }
    return (
      <div className="app-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
        </div>
        <div className="part-1-container">
          <div className="add-new-password-container">
            <h1 className="add-newpassword-heading">Add New Password</h1>

            <div className="enter-website-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                alt="website"
                className="website-image"
              />
              <vr className="vertical-ruler" />
              <input
                type="text"
                placeholder="Enter Website"
                className="input"
                onChange={this.onChangeWebsite}
                value={websiteInput}
              />
            </div>
            <div className="enter-website-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="website-image"
              />
              <vr className="vertical-ruler" />
              <input
                type="text"
                placeholder="Enter Username"
                className="input"
                onChange={this.onChangeUsername}
                value={userName}
              />
            </div>
            <div className="enter-website-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="website-image"
              />
              <vr className="vertical-ruler" />
              <input
                type="password"
                placeholder="Enter Password"
                className="input"
                onChange={this.onChangePassword}
                value={password}
              />
            </div>
            <form onSubmit={this.onAdd} className="formElement">
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
            alt="password manager"
            className="password-manager-image"
          />
        </div>
        <div className="part-2-container">
          <div className="count-search-container">
            <div className="count-container">
              <h1 className="your-passwords">Your Passwords</h1>
              <p className="password-count">{count}</p>
            </div>
            <div className="search-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                alt="search"
                className="search-icon"
              />
              <vr className="vertical-ruler" />
              <input
                type="search"
                className="search-input"
                placeholder="Search"
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
          <div className="show-password-container">
            <input
              type="checkbox"
              className="checkBox"
              onChange={this.onChangeShowPassword}
              id="label"
            />
            <label className="label" htmlFor="label">
              Show Passwords
            </label>
          </div>
          {noPasswords}
        </div>
      </div>
    )
  }
}

export default Passwords
