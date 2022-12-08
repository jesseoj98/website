import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AboutMeComponent } from './about-me/about-me.component';
import { CodingProjectsComponent } from './coding-projects/coding-projects.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { BlogComponent } from './blog/blog.component';
import { ResumeComponent } from './resume/resume.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    HomePageComponent,
    AboutMeComponent,
    CodingProjectsComponent,
    ContactInfoComponent,
    BlogComponent,
    ResumeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      { path: 'home', component: HomePageComponent },
      { path: 'about', component: AboutMeComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'coding', component: CodingProjectsComponent },
      { path: 'contact', component: ContactInfoComponent },
      { path: 'resume', component: ResumeComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent },
    ]),
  ],
  providers: [],
  bootstrap: [HomePageComponent],
})
export class AppModule {}
