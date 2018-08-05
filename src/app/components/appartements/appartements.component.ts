import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControl } from '../../../../node_modules/@angular/forms';
import { Appartement } from '../../models/appartement.model';
import { AppartementService } from '../../services/appartementService/appartement.service';

@Component({
  selector: 'app-appartements',
  templateUrl: './appartements.component.html',
  styleUrls: ['./appartements.component.css']
})
export class AppartementsComponent implements OnInit {
  @Input() etageId: any;
  public appartements: Appartement[] = [];

  selected = new FormControl(0);

  constructor(private appartementService: AppartementService) { }

  ngOnInit() {
    this.appartements = this.appartementService.getAppartementByEtage(this.etageId)

  }

  addTab() {

    let newAppartement =
      new Appartement(
        new Date().getTime(),
        this.etageId
      );

    this.appartementService.addAppartement(newAppartement)
    console.log(this.appartements)
    this.appartements = this.appartementService.getAppartementByEtage(this.etageId)

    this.selected.setValue(this.appartements.length);

  }

  removeTab(index: number) {
    this.appartementService.removeAppartement(index)
    this.appartements = this.appartementService.getAppartementByEtage(this.etageId)
  }

}
