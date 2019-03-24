import Component from '@glimmer/component';
import { task } from 'ember-concurrency';
import { action } from '@ember/object'

export default class MyComponent extends Component {
  @task * myTask() {
    console.log('my task');
  }

  @action didInsert() {
    console.log('did insert');
  }
}
