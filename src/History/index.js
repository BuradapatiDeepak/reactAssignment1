import {Component} from 'react'
import './index.css'
import HistoryItem from '../HistoryItem'

class History extends Component {
  state = {searchKeyword: '', HistoryList: this.props}

  searchFiltering = event => {
    this.setState({searchKeyword: event.target.value})
  }

  deleteListItem = value => {
    const {HistoryList} = this.state
    const filteredHistory = HistoryList.filter(
      eachItem => eachItem.id !== value,
    )
    console.log(filteredHistory)
    this.setState({
      HistoryList: filteredHistory,
    })
  }

  render() {
    const {searchKeyword, HistoryList} = this.state
    console.log(HistoryList)
    const filteredList = HistoryList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchKeyword.toLowerCase()),
    )
    return (
      <div className="app-container">
        <div className="nav-bar">
          <img
            className="app-logo"
            alt="app-logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          />

          <div className="input-container">
            <div className="search-container">
              <img
                className="search"
                alt="search"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              />
            </div>
            <input
              className="inputElement"
              type="search"
              placeholder="Search history"
              onChange={this.searchFiltering}
            />
          </div>
        </div>
        <div className="container">
          <div className="inner-container">
            <ul>
              {filteredList.map(eachItem => (
                <HistoryItem
                  deleteListItem={this.deleteListItem}
                  key={eachItem.id}
                  historyDetails={eachItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default History
