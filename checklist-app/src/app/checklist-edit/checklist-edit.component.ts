import { Component } from '@angular/core';
import { ChecklistItem } from '../_models/checklist_item';
import { ChecklistFormComponent } from "../checklist-form/checklist-form.component";

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

  public onFormClose($event: any){
  }
}
