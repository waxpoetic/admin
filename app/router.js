import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('articles');
  this.route('artists', function() {
    this.route('new');
  });
  this.route('releases');
  this.route('tracks', function() {});
  this.route('events');
  this.route('login');
});

export default Router;
