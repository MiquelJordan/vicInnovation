import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {
  dialogueForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogueComponent>
  ) { }

  ngOnInit() {
    this.dialogueForm = this.formBuilder.group({
      tabName: ''
    })
  }

  submit(form) {
    this.dialogRef.close(this.dialogueForm.value);
  }

}
