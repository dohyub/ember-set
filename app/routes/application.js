import Route from '@ember/routing/route';
import { action } from 'ember-decorators/object';
import config from 'reflex/config/environment';
import { service } from 'ember-decorators/service';

export default Route.extend({
  @action didTransition() {
    window.r = this;
    window.c = config
  }
});
