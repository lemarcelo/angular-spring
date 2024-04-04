import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Category } from '../_models/category';
import { MaterialModule } from '../material.module';


@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [MaterialModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.css'
})
export class CategoryFormComponent implements OnInit{

  @Input() public actionName="Editar";

  public categoryForm!: FormGroup;

  @Output() public closeModalEventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() public editableCategory!: Category;

  public isFormReady= false;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void{
    this.categoryForm = this.formBuilder.group({
      name: [this.editableCategory != null?this.editableCategory.name: '', Validators.required]
    });
    this.isFormReady=true;
  }

  cancel() {
    console.log("Cancelar Clicado");
    this.closeModalEventEmitter.emit(false);
  }

  save() {
    console.log("Save Clicado");
    this.closeModalEventEmitter.emit(true);
  }

}
