import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getAllHeroes, deleteAHero} from '../store/allHeroesReducer'

class AllHeroes extends Component {
  async componentDidMount() {
    await this.props.gotHeroes()
  }
  render() {
    const heroes = this.props.allHeroes.allHeroes
    console.log('----------', heroes)

    if (!heroes) return 'LOADING'
    else {
      return (
        <div>
          <h1>Our Heroes</h1>
          {heroes.map(hero => {
            return (
              <div key={hero.id} className="child">
                <div className="card">
                  <Link id="black" to={`/heroes/${hero.id}`}>
                    <h1>{hero.heroName}</h1>
                    <img src={hero.imageUrl} width="75%" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      this.props.deleteHero(hero.id)
                    }}
                  >
                    Delete
                  </button>
                </div>

                <br />
              </div>
            )
          })}
        </div>
      )
    }
  }
}

const mapState = state => ({
  allHeroes: state
})

const mapDispatch = dispatch => ({
  gotHeroes: () => dispatch(getAllHeroes()),
  deleteHero: id => dispatch(deleteAHero(id))
})
export default connect(mapState, mapDispatch)(AllHeroes)
