import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { AboutComponent } from './about/about.component';
import { ResearchComponent } from './research/research.component';

const appRoutes: Routes = [
  {path: 'experience', component: ExperienceComponent},
  {path: 'education', component: EducationComponent},
  {path: 'previousresearch', component: ResearchComponent},
  {path: 'ots', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    ExperienceComponent,
    AboutComponent,
    ResearchComponent
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
