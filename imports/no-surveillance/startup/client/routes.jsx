import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';
import { mount } from 'react-mounter';

import AppContainer from '../../ui/containers/AppContainer.jsx';
import IndexPage from '../../ui/pages/IndexPage.jsx';

FlowRouter.route('/no-surveillance', {
  name: 'no-surveillance-index',
  action() {
    mount(AppContainer, {
      main: <IndexPage />,
    });
  },
});
