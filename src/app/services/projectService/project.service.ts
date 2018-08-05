import { Injectable } from '@angular/core';
import { Project } from '../../models/project.models';

@Injectable()
export class ProjectService {
    public projects = new Array(

    )


    addProject(newProject: Project) {

        this.projects.push(newProject)
        console.log(this.projects)
    }


}