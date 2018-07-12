import { Meteor } from 'meteor/meteor'
import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'

const App = (props) => (
  <div id="no-surveillance">
    {React.cloneElement(props.main)}
  </div>
);

export default AppContainer = createContainer(params => {

  return {
  };
}, App);
