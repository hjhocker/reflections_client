import {Component, View} from 'angular2/core';

@Component({
  selector: 'reflections-client'
})

@View({
  templateUrl: 'reflections-client.html'
})

export class ReflectionsClient {

  constructor() {
    console.info('ReflectionsClient Component Mounted Successfully');
  }

}
