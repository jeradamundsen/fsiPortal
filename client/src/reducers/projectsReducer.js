import {FETCH_PROJECTS} from '../actions/types'

export default function( state= null, action){
  console.log(action);

  switch (action.type){
    case FETCH_PROJECTS:
    return action.payload || false
    default:
      return state;
  }
}
