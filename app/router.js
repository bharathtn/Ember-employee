import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('employee');
  this.route('department');
  this.route('nav-header');
  this.route('create-employee');
  this.route('new-employee');
  this.route('new-department');
});

export default Router;
