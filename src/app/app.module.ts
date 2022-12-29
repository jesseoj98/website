import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomePageComponent } from 'src/app/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { AboutMeComponent } from 'src/app/about-me/about-me.component';
import { CodingProjectsComponent } from 'src/app/coding-projects/coding-projects.component';
import { ContactInfoComponent } from 'src/app/contact-info/contact-info.component';
import { BlogComponent } from 'src/app/blog/blog.component';
import { ResumeComponent } from 'src/app/resume/resume.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';

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
    MatDialogModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [HomePageComponent],
})
export class AppModule {}
