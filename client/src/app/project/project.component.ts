import { Project } from './../model/project.model';
import { AuthService } from './../auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ProjectService } from '../service/project.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  public projects: Project[] = [];
  public oneProject : Project = {} as Project;
  
  constructor(private projectService: ProjectService, public authService: AuthService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  public getProjects(): void {
    this.projectService.getProjects().subscribe(
      (response: Project[]) => {
        this.projects = response;
        console.log(this.projects);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );    
  }

  public getProject(id: number): void {
    this.oneProject = this.projects[id];
  }

  public updateProject(): void {
    this.projectService.updateProject(this.oneProject).subscribe(
      (response: Project) => {
        this.oneProject = response;
        console.log(this.oneProject);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);        
      }
    );
  }

  public addProject(): void {
    this.projectService.addProject(this.oneProject).subscribe(
      (response: Project) => {
        this.oneProject = response;
        console.log(this.oneProject);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
