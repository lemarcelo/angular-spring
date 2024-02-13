import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Category } from '../_models/category';
import { CategoryFormComponent } from "../category-form/category-form.component";

@Component({
    selector: 'app-category-edit',
    standalone: true,
    templateUrl: './category-edit.component.html',
    styleUrl: './category-edit.component.css',
    imports: [ CategoryFormComponent]
})
export class CategoryEditComponent {

  public editableCategory!: Category;
  public actionName: string ='Editar';

  constructor(private dialogRef: MatDialogRef<CategoryEditComponent>, @Inject(MAT_DIALOG_DATA)dialogData: any) {
  if(dialogData.editableCategory !=null){
    this.editableCategory = dialogData.editableCategory;
  }
 }
 public closeModalWindow($event:any){
  //TODO: handle action - save/cancel
  if($event) this.dialogRef.close();
 }
}
