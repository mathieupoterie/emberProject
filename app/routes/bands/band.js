import Route from '@ember/routing/route';
import { isEmpty } from '@ember/utils';

export default Route.extend({
  model(params) {
    return this.store.findRecord('band', params.id);
  },
  actions: {
    didTransition() {
      document.title = 'Bands - Rock & Roll';
    }
  },
  afterModel(band) {
    var description = band.get('description');
    if (isEmpty(description)) {
      this.transitionTo('bands.band.songs');
    } else {
      this.transitionTo('bands.band.details');
    }
}
});
