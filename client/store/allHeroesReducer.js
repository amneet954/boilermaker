import Axios from 'axios'

const ALL_HEROES = 'ALL_HEROES'
const DELETE_HERO = 'DELETE_HERO'

const getHeroes = heroes => ({type: ALL_HEROES, heroes})
const deleteHero = id => ({type: DELETE_HERO, id})

export const getAllHeroes = () => async dispatch => {
  const {data} = await Axios.get('/api/heroes')
  dispatch(getHeroes(data))
}

export const deleteAHero = id => async dispatch => {
  await Axios.delete(`/api/heroes/${id}`)
  dispatch(deleteHero(id))
}

export default function(heroes = [], action) {
  switch (action.type) {
    case ALL_HEROES:
      return action.heroes
    case DELETE_HERO:
      const heroId = action.id
      let change = heroes.filter(hero => hero.id !== heroId)
      return change
    default:
      return heroes
  }
}
