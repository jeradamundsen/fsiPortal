import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'

class Projects extends Component{
  render(){
    return(
      <div className="">
        My Projects
      </div>
    )
  }
}
export default connect(null, actions)(Projects)
