import { Meteor } from 'meteor/meteor'
import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import Navbar from '../components/sections/NavbarSection.jsx'
import Footer from '../components/sections/FooterSection.jsx';


const App = (props) => (
  <div id="robofy-it">
    <Navbar routeName={props.routeName} user={props.user} />
    {React.cloneElement(props.main, {token: props.token})}
    <Footer />
  </div>
);

export default AppContainer = createContainer(params => {
  let routeName = null;

  Tracker.autorun(function() {
    FlowRouter.watchPathChange();
    routeName = FlowRouter.current().route.name;
  });

  return {
    routeName,
    user: Meteor.user(),
    token: FlowRouter.getQueryParam("token")
  };
}, App);
