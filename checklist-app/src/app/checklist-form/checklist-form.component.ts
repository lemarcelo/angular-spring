import { CommonModule, registerLocaleData } from '@angular/common';
import * as localePt from '@angular/common/locales/pt';
import { Component, EventEmitter, Input, LOCALE_ID, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Category } from '../_models/category';
import { ChecklistItem } from '../_models/checklist_item';
import { MaterialModule } from '../material.module';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-checklist-form',
  standalone: true,
  imports: [MaterialModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './checklist-form.component.html',
  styleUrl: './checklist-form.component.css',
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}]


})
export class ChecklistFormComponent {
  @Input() public actionName='Editar';
  @Input() checklistItem!: ChecklistItem;
  @Output() public formCloseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();


  @ViewChild(FormGroupDirective) public checklistFormDirective!: FormGroupDirective;

  public categories: Category[] = [];

  public checklistForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private categoryService: CategoryService) {


    registerLocaleData(localePt.default);

  }


  ngOnInit(): void{

    this.categoryService.getAllCategories().subscribe(
      (resp: Category[]) => {
        this.categories = resp;
        this.createForm();
      }
    )

      console.log(''+this.checklistItem.description);
  }

  private createForm(){
    this.checklistForm = this.formBuilder.group(
      {
        completed: [this.checklistItem != null ? this.checklistItem.completed: false, Validators.required],
        description: [this.checklistItem != null ? this.checklistItem.description: '', Validators.required],
        deadline: [this.checklistItem != null ? new Date(this.checklistItem.deadline): new Date(), Validators.required],
        category: [this.checklistItem != null ? this.checklistItem.category: null, Validators.required]

      });
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
