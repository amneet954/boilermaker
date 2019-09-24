import Axios from 'axios'

const GET_HERO = 'GET_HERO'

const getHero = hero => ({type: GET_HERO, hero})

export const gettingHero = id => async dispatch => {
  const {data} = await Axios.get(`/api/heroes/${id}`)
  dispatch(getHero(data))
}

export default function(hero = {}, action) {
  switch (action.type) {
    case GET_HERO:
      return action.hero
    default:
      return hero
  }
}
