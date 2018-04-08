import React from 'react'

class Awesome extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      likeCounts : 0
    }
    this.onLike = this.onLike.bind(this)
  }

  onLike() {
    let newLikeCount = this.state.likeCounts + 1
    this.setState({
      likeCounts : newLikeCount
    })
  }

  render() {
    return (
      <div>
        Likes : <span>{ this.state.likeCounts }</span>
        <div>
          <button onClick = { this.onLike }>Like Me</button>
        </div>
      </div>
    )
  }
}

export default Awesome
