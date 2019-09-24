import React, {Component} from 'react'
import {connect} from 'react-redux'
import {gettingHero} from '../store/heroReducer'

class SingleHero extends Component {
  async componentDidMount() {
    let id = this.props.match.params.id
    await this.props.gotHero(id)
  }

  render() {
    const hero = this.props.hero
    if (!hero) return 'LOADING'
    else if (hero.city) {
      return (
        <div>
          <div className="card">
            <h1>{hero.heroName}</h1>
            <img src={hero.imageUrl} width="75%" />
            <h2>{hero.city.name}</h2>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className="card">
            <h1>{hero.heroName}</h1>
            <img src={hero.imageUrl} width="75%" />
          </div>
        </div>
      )
    }
  }
}

const mapState = state => ({hero: state.hero})

const mapDispatch = dispatch => ({
  gotHero: id => dispatch(gettingHero(id))
})

export default connect(mapState, mapDispatch)(SingleHero)
