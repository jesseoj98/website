import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Framework, frameworks } from 'src/models/frameworks';
import { Language, languages } from 'src/models/languages';
import { Platform, platforms } from 'src/models/platforms';
import { Software, softwares } from 'src/models/softwares';
import { Technology, technologies } from 'src/models/technologies';
import { Tool, tools } from 'src/models/tools';
import { CodingProjectsComponent } from '../coding-projects/coding-projects.component';
import { ContactInfoComponent } from '../contact-info/contact-info.component';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  languages: Language[];
  frameworks: Framework[];
  tools: Tool[];
  technologies: Technology[];
  softwares: Software[];
  platforms: Platform[];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.languages = languages;
    this.frameworks = frameworks;
    this.tools = tools;
    this.technologies = technologies;
    this.softwares = softwares;
    this.platforms = platforms;
  }

  openCodingProjects(): void {
    this.dialog.closeAll();
    this.dialog.open(CodingProjectsComponent);
  }

  openContactInfo(): void {
    this.dialog.closeAll();
    this.dialog.open(ContactInfoComponent);
  }
}
