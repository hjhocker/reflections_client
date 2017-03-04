import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ReflectionsClient} from 'reflections-client';

@Component({
  selector: 'main'
})

@View({
  directives: [ReflectionsClient],
  template: `
    <reflections-client></reflections-client>
  `
})

class Main {

}

bootstrap(Main);
