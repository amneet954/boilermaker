import React, {Component} from 'react'
import axios from 'axios'

export default class AddHero extends Component {
  constructor() {
    super()
    this.state = {
      heroName: '',
      imageUrl: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  async handleSubmit() {
    event.preventDefault()
    await axios.post('/api/heroes/addHero', this.state)
    this.setState({
      heroName: '',
      imageUrl: ''
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Add a Hero</h1>
        <label htmlFor="heroName">Hero Name:</label>
        <input
          type="text"
          name="heroName"
          value={this.state.heroName}
          onChange={this.handleChange}
          required
        />
        <label htmlFor="imageUrl">Image Link:</label>
        <input
          type="text"
          name="imageUrl"
          value={this.state.imageUrl}
          onChange={this.handleChange}
          required
        />
        <input type="submit" />
      </form>
    )
  }
}
