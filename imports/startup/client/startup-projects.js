import startupRobofy from '../../robofy.it/startup/client/startup.js';
import startupIE from '../../ie/startup/client/startup.js';
import startNoSurveillance from '../../no-surveillance/client/startup.js';

const startupProjects = () => {
  startupRobofy();
  startupIE();
	startNoSurveillance();
}

export default startupProjects;
