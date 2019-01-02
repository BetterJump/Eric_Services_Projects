import React, { Component } from 'react'
import ProjectView from './display_components/ProjectView.js';
import sampleData from './sample/sampleData.json';
import axios from 'axios';

class Project extends Component {
  constructor(props) { 
    super(props); 
    this.state = {
      projectList: sampleData,
      currentProject: sampleData[1] 
    };
    this.onSelectProjectHandler = this.onSelectProjectHandler.bind(this);
  }

  onSelectProjectHandler(event)  { 

  }
  
  componentDidMount() {
    axios.get('/projects')
      .then((projects) => { 
        this.setState({
          projectList: projects.data
        });
      })
      .catch((error) => { 
        console.log('Error retrieving projects');
      });
  }

  

  render() {
    console.log('AFTER RENDER', this.state.projectList[1]);
    return (
      <div>
        <h1>Project View Services</h1>
        <h2>Testing connection in progress</h2>
        <ProjectView currentProject={this.state.currentProject}/>
      </div>
    )
  }
}

export default Project; 
