import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SkillComponent } from './skill/skill.component';
import { NavigationComponent } from './navigation/navigation.component';
import { EducationComponent } from './education/education.component';

const appRoutes: Routes = [
  {path: 'skills', component: SkillComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SkillComponent,
    NavigationComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
