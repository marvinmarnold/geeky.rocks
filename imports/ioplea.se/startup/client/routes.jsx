import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import AppContainer from '../../ui/containers/AppContainer.jsx';
import IndexPage from '../../ui/pages/IndexPage.jsx';
import SubmitPage from '../../ui/pages/SubmitPage.jsx';

FlowRouter.route('/ioplease', {
  name: 'ioplease',
  action() {
    mount(AppContainer, {
      main: <IndexPage />,
    });
  },
});

FlowRouter.route('/ioplease-submit', {
  name: 'ioplease-submit',
  action() {
    mount(AppContainer, {
      main: <SubmitPage />,
    });
  },
});
