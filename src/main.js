import React from 'react'
import ReactDOM from 'react-dom'
import FontAwesomeIcon from './components/FontAwesomeIcon'
import PlayingCard from './components/PlayingCard'
import ProgressBar from './components/ProgressBar'
import ToDoList from './components/ToDoList'
import AuthLink from './components/AuthLink'

class Main extends React.Component {
  render() {
    return (
      <div>

        <div className='column row'>
          <FontAwesomeIcon name='twitter' />
          <FontAwesomeIcon name='facebook' />
          <FontAwesomeIcon name='github' />
        </div>

        <div className='column row'>
          <PlayingCard rank='ace' suit='spades' />
          <PlayingCard rank='4' suit='diamonds' />
        </div>

        <div className='column row'>
          <ProgressBar progress='70'/>
        </div>

        <div className='column row'>
          <ToDoList />
        </div>

        <div className='column row'>
          <AuthLink user={{name: "Jon Snow"}} />
        </div>
        <div className='column row'>
          <AuthLink />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('container')
);
