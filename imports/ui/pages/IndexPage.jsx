import React, { Component } from 'react';

export default class GeekyIndexPage extends Component {
  getProjects() {
    return [
      {
        _id: "1",
        name: "robofy.it",
        description: "Share and explore",
        url: "/robofy.it"
      },
			{
        _id: "2",
        name: "Integridad Ecosistema",
        description: "How about the environment?",
        url: "/ie"
      },
			{
				_id: "3",
				name: "NO Surveillance",
				description: "https://www.facebook.com/events/1937273746500366/",
				url: "/no-surveillance"
			},
    ];
  }

  renderProjects() {
    return this.getProjects().map((project) => (
      <div key={project._id} className="mt-1 col-xs-12 col-md-6 col-lg-4 col-xl-6">
        <a href={project.url} target="_blank">
          <div className="card card-block">
            <h4 className="card-title">{project.name}</h4>
            <p className="card-text mt-1">{project.description}</p>
            <span className="card-link mt-2">Learn More</span>
          </div>
        </a>
      </div>
    ));
  }

  render() {
    return (
      <div id="geeky-rocks-container">
        <div className="container text-xs-center">
          <h1 className="mt-2">Projects</h1>
          <h3 className="mt-1 mb-2"><strong>If you were looking for the old site,</strong> sorry but I'm in the middle of a redesign. Please be patient.</h3>
        </div>

        <div className="container-fluid">
          <div className="row pb-3">
            {this.renderProjects()}
          </div>
        </div>
      </div>
    );
  }
}
