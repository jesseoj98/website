import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CodingProjectsComponent } from '../coding-projects/coding-projects.component';
import { ContactInfoComponent } from '../contact-info/contact-info.component';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openCodingProjects(): void {
    this.dialog.closeAll();
    this.dialog.open(CodingProjectsComponent);
  }

  openContactInfo(): void {
    this.dialog.closeAll();
    this.dialog.open(ContactInfoComponent);
  }
}
