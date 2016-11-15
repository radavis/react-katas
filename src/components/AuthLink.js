import React from 'react'

class AuthLink extends React.Component {
  render() {
    let result
    if (this.props.user) {
      result = <a href="#">Signed In as {this.props.user.name}</a>
    } else {
      result = <a href="#">Sign Up</a>
    }
    return result
  }
}

export default AuthLink
