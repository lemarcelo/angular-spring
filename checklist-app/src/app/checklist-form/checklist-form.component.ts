import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Category } from '../_models/category';
import { ChecklistItem } from '../_models/checklist_item';
import { CATEGORY_DATA } from '../category/category.component';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-checklist-form',
  standalone: true,
  imports: [MaterialModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './checklist-form.component.html',
  styleUrl: './checklist-form.component.css'
})
export class ChecklistFormComponent {
  @Input() public actionName='Editar';
  @Input() checklistItem!: ChecklistItem;
  @Output() public formCloseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();


  @ViewChild(FormGroupDirective) public checklistFormDirective!: FormGroupDirective;

  public categories: Category[] = CATEGORY_DATA;

  public checklistForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {


  }


  ngOnInit(): void{
    this.checklistForm = this.formBuilder.group(
      {
        completed: [this.checklistItem != null ? this.checklistItem.completed: false, Validators.required],
        description: [this.checklistItem != null ? this.checklistItem.description: '', Validators.required],
        deadline: [this.checklistItem != null ? new Date(this.checklistItem.deadline): new Date(), Validators.required],
        category: [this.checklistItem != null ? this.checklistItem.category: null, Validators.required]


      });
      console.log(''+this.checklistItem.description);

  }

  private clearForm(){
    this.checklistForm.reset();
  }

  save() {
    this.formCloseEvent.emit(true);

  }
  cancel() {
    this.formCloseEvent.emit(false);
  }

}
