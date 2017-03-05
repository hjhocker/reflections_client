import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ReflectionsClient} from 'reflections-client';

@Component({
  selector: 'main',
  directives: [ReflectionsClient],
  template: `
    <harrison-reflections-client></harrison-reflections-client>
  `
})

class Main {

}

bootstrap(Main);
