import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { HttpService } from './services/HttpService';
import { CapitalizePipe } from './pipes/CapitalizePipe';

import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { AboutComponent } from './about/about.component';
import { ResearchComponent } from './research/research.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path: 'work-experience', component: ExperienceComponent},
  {path: '',   redirectTo: '/work-experience', pathMatch: 'full'},
  {path: 'education', component: EducationComponent},
  {path: 'previous-research', component: ResearchComponent},
  {path: 'ots', component: AboutComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    ExperienceComponent,
    AboutComponent,
    ResearchComponent,
    PageNotFoundComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})

export class AppModule { }
