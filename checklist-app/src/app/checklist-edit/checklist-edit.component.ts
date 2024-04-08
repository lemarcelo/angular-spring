import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ChecklistFormComponent } from "../checklist-form/checklist-form.component";
import { ChecklistItem } from './../_models/checklist_item';

@Component({
    selector: 'app-checklist-edit',
    standalone: true,
    templateUrl: './checklist-edit.component.html',
    styleUrl: './checklist-edit.component.css',
    imports: [ChecklistFormComponent]
})
export class ChecklistEditComponent {
  public actionName='Editar';
  public checklistItem!: ChecklistItem;


  constructor(public dialogRef: MatDialogRef<ChecklistEditComponent>, @Inject(MAT_DIALOG_DATA) public data: any){
    if(data.updatableChecklistItem != null){
      this.checklistItem = data.updatableChecklistItem;
      console.log('Veio com dados!');
    }
    if(data.actionName !=null){
      this.actionName = data.actionName ;
    }
   }

  public onFormClose($event: any){
  this.dialogRef.close();
  }
}
