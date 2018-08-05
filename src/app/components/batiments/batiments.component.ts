import { Component, OnInit } from '@angular/core';
import { FormControl } from '../../../../node_modules/@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Etage } from '../../models/etage.model';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { BatimentService } from '../../services/batimentService/batiment.service';
import { DialogueComponent } from '../../services/shareService/dialogue/dialogue.component';

@Component({
  selector: 'app-batiments',
  templateUrl: './batiments.component.html',
  styleUrls: ['./batiments.component.css']
})
export class BatimentsComponent implements OnInit {

  constructionId: number;
  public projectId: number;
  public etages: Etage[] = [];
  selected = new FormControl(0);
  dialogRef: MatDialogRef<DialogueComponent>;

  constructor(private route: ActivatedRoute, private batimentService: BatimentService, private dialog: MatDialog) {

    this.constructionId = this.route.snapshot.params.id;
    this.projectId = this.route.snapshot.parent.params.projectId;
    console.log(this.constructionId)
  }

  ngOnInit() {


    this.etages = this.batimentService.getEtageByBatiment(this.constructionId)

  }

  addTab() {

    this.openAddFileDialog();
    this.dialogRef
      .afterClosed()
      .subscribe(dialReturn => {

        console.log(dialReturn)
        let newEtage =
          new Etage(
            new Date().getTime(),
            this.constructionId,
            dialReturn.tabName,
          );
        this.batimentService.addEtage(newEtage);

        this.etages = this.batimentService.getEtageByBatiment(this.constructionId);
        console.log(this.etages);
        this.selected.setValue(this.etages.length);
      });


  }
  openAddFileDialog() {
    this.dialogRef = this.dialog.open(DialogueComponent);
  }
  removeTab(index: number) {
    this.batimentService.removeEtage(index)
    this.etages = this.batimentService.getEtageByBatiment(this.constructionId);
  }

}
