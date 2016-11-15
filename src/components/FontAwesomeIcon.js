import React from 'react'

class FontAwesomeIcon extends React.Component {
  render() {
    return <i className={`fa fa-${this.props.name}`} />
  }
}

export default FontAwesomeIcon
