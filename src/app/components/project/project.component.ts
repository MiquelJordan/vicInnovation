import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Construction } from '../../models/construction.model';
import { Router } from '@angular/router';
import { ConstructionService } from '../../services/constructionService/construction.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  constructionCreated: Construction[];
  constructionForm: FormGroup;
  projectId: number;

  constructor(private formBuilder: FormBuilder, private router: Router, private constructionService: ConstructionService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.projectId = this.route.snapshot.params.projectId;

    this.constructionForm = this.formBuilder.group({
      constructionName: '',
      constructionDescription: '',
      constructionType: '',
    });
    this.constructionCreated = this.constructionService.getConstructionByProject(this.projectId)
  }
  onSubmitForm() {
    const formValue = this.constructionForm.value;
    const constructionType = formValue['constructionType'];
    console.log(constructionType)
    const constructionId = new Date().getTime();
    const projectId = this.route.snapshot.params.id;
    console.log(projectId)
    const newConstruction = new Construction(
      formValue['constructionName'],
      formValue['constructionDescription'],
      formValue['constructionType'],
      this.projectId,
      constructionId,
    );

    this.constructionService.addConstruction(newConstruction)

    this.constructionCreated = this.constructionService.getConstructionByProject(this.projectId)
    console.log(this.constructionCreated, 'laaaaaaaa')
    this.router.navigate(["/app/project", this.projectId, constructionType, constructionId])




  }


}
