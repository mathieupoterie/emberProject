import Controller from '@ember/controller';

// app/controllers/bands/band/details.js
export default Controller.extend({
  isEditing: false,
  actions: {
    edit() {
      this.set('isEditing', true);
    },
    save() {
      this.set('isEditing', false);
    }
  }
});
