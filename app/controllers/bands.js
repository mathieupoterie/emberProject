import { empty } from '@ember/object/computed';
import Controller from '@ember/controller';

export default Controller.extend({
  name: '',
  isAddButtonDisabled: empty('name')
});
