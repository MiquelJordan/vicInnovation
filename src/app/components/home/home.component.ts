import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Project } from '../../models/project.models'
import { Router } from '@angular/router';
import { ProjectService } from '../../services/projectService/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projectsCreated: Project[]
  projectForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.projectForm = this.formBuilder.group({
      projectName: '',
      projectDescription: '',
    });
    this.projectsCreated = this.projectService.projects
  }
  onSubmitForm() {
    const formValue = this.projectForm.value;
    const projectId = new Date().getTime()
    console.log(projectId)
    const newProject = new Project(
      formValue['projectName'],
      formValue['projectDescription'],
      projectId,
    );

    this.projectService.addProject(newProject)
    this.projectsCreated = this.projectService.projects
    this.router.navigate([`/app/project/${projectId}`])






  }

}
