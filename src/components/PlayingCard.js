import React from 'react'

class PlayingCard extends React.Component {
  render() {
    let filename = `/vendor/cards/${this.props.rank}_of_${this.props.suit}.svg`
    let description = `${this.props.rank} of ${this.props.suit}`
    return <img src={filename} alt={description} />
  }
}

export default PlayingCard
