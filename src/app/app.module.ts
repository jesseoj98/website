import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AboutMeComponent } from 'src/app/about-me/about-me.component';
import { CodingProjectsComponent } from 'src/app/coding-projects/coding-projects.component';
import { ContactInfoComponent } from 'src/app/contact-info/contact-info.component';
import { RouterModule } from '@angular/router';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { CardGridComponent } from './card-grid/card-grid.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    AboutMeComponent,
    CodingProjectsComponent,
    ContactInfoComponent,
    NavigationBarComponent,
    CardGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    NgbModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [HomePageComponent],
})
export class AppModule {}
