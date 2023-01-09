import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomePageComponent } from 'src/app/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { AboutMeComponent } from 'src/app/about-me/about-me.component';
import { CodingProjectsComponent } from 'src/app/coding-projects/coding-projects.component';
import { ContactInfoComponent } from 'src/app/contact-info/contact-info.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomePageComponent,
    AboutMeComponent,
    CodingProjectsComponent,
    ContactInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [HomePageComponent],
})
export class AppModule {}
