import {Component} from 'react'
import './index.css'
import HistoryItem from '../HistoryItem'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class History extends Component {
  state = {searchKeyword: '', HistoryList: initialHistoryList}

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
    const filteredList = HistoryList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchKeyword.toLowerCase()),
    )
    let text
    if (
      (HistoryList.length === 0 && searchKeyword.length !== 0) ||
      filteredList.length === 0
    ) {
      text = <p className="noHistory">There is no history to show</p>
    }

    return (
      <div className="app-container">
        <div className="nav-bar">
          <img
            className="app-logo"
            alt="app logo"
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
        <div className="noHistory-container">{text}</div>
      </div>
    )
  }
}

export default History
