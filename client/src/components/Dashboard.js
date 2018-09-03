import React, {Component} from 'react'
import {connect} from 'react-redux'
import Projects from './Projects';

class Dashboard extends Component{
  constructor(props) {
      super(props)
      this.state={ opportunities: null}
  }
  componentDidMount() {

  }
  renderContent(){
    switch(this.props.projects){
      case null:
      return;
      case false:
        return <li>  Ivan we are not tracking any projects for you.</li>;
      default:
        return <li><a href="/api/projects">{this.props.projects}</a></li>;
    }
  }
  render(){
    return(
      <div className="">
        <ul className="center">
          {this.renderContent()}
        </ul>
        <div className="">
          <h3>Total Projects: <Projects/></h3>
        </div>
      </div>
    )
  }
}

function mapStateToProps({auth}){
  return {auth}
}
export default connect(mapStateToProps)(Dashboard)
