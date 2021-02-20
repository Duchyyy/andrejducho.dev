import { NgForm, FormsModule } from '@angular/forms';
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
    this.getProjects();
    this.oneProject = this.projects[id];
  }

  public updateProject(project: Project): void {
    this.oneProject = project;
    this.projectService.updateProject(this.oneProject).subscribe(
      (response: Project) => {
        console.log(response);
        this.getProjects();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);        
      }
    );
  }

  public addProject(project: Project): void {
    this.oneProject = project;
    let lastId: number = this.projects[this.projects.length-1].id+1;    
    this.oneProject.id = lastId;
    this.projectService.addProject(this.oneProject).subscribe(
      (response: Project) => {
        console.log(response);
        this.getProjects();        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );    
  }
  
  public deleteProject(projectId: number): void {
    this.projectService.deleteProject(projectId).subscribe(
      (response: void) => {
        console.log(response);
        this.getProjects();        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public cleanOneProject(): void {
    this.oneProject.id = -1;
    this.oneProject.title = '';
    this.oneProject.description = '';
    this.oneProject.urlLink = '';
  }

}
