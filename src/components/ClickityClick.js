import React from 'react'

  class ClickityClick extends React.Component {
    constructor() {
      super()
      this.state = {
        hasBeenClicked: false,
        currentTheme: 'blue'
      }
    }

    handleClick = () => {
      this.setState({
        hasBeenClicked: !this.state.hasBeenClicked},
        () => console.log(this.state.hasBeenClicked))

    }

    render() {
      return (
        <div>
          <p>I have {this.state.hasBeenClicked ? null : 'not'} been clickesdsged</p>
          <button onClick={this.handleClick}>Click me</button>
        </div>
      )
    }
  }

export default ClickityClick;
