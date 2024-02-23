import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoryFormComponent } from "../category-form/category-form.component";

@Component({
    selector: 'app-category-edit',
    standalone: true,
    templateUrl: './category-edit.component.html',
    styleUrl: './category-edit.component.css',
    imports: [CategoryFormComponent]
})
export class CategoryEditComponent {

constructor(private dialogRef: MatDialogRef<CategoryEditComponent>, @Inject(MAT_DIALOG_DATA) dialogData: any) { }
}
