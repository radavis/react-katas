import React from 'react'

class ProgressBar extends React.Component {
  render() {
    return(
      <div className='success progress'>
        <div className='progress-meter' style={{width: `${this.props.progress}%`}}>
          <p className='progress-meter-text'>
            { this.props.progress }%
          </p>
        </div>
      </div>
    )
  }
}

export default ProgressBar
