import Questions from '../../common/collections/questions.js';

Meteor.publish("questions.active", function() {
	return Questions.find({isActive: true});
});
