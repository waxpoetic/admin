import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.resource('articles');
  this.resource('artists');
  this.resource('releases');
  this.resource('tracks');
  this.resource('images');
  this.resource('events');
  this.route('articles');
  this.route('artists');
  this.route('releases');
  this.route('tracks');
  this.route('events');
});

export default Router;
