import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { SkillComponent } from './skill/skill.component';
import { BrowserModule } from '@angular/platform-browser';

const appRoutes: Routes = [
  { path: 'experience', component: ExperienceComponent },
  { path: 'skills', component: SkillComponent }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
  AppComponent,
  ExperienceComponent,
  SkillComponent,
],
bootstrap: [ AppComponent ]
})
export class AppComponent {
  title = 'app works!';

  clicked(event) {
    console.log("clicked on about this site");
  }

}
