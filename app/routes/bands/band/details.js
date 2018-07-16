import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.modelFor('bands.band');
  },
  actions: {
    save() {
      var controller = this.get('controller');
      var band = controller.get('model');
      return band.save();
    },
    willTransition(transition) {
      var controller = this.get('controller'), leave;
      if (controller.get('isEditing')) {
        leave = window.confirm("You have unsaved changes. Are you sure you want to leave?");
        if (leave) {
          controller.set('isEditing', false);
        } else {
          transition.abort();
        }
      }
    }
  }
});
