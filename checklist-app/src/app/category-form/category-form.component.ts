import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Category } from '../_models/category';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [ReactiveFormsModule, MaterialModule],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.css'
})
export class CategoryFormComponent implements OnInit{

  @Input() public actionName ='Editar';

  public categoryForm!: FormGroup;

  @Output() closeModelEventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>;

  @Input() public editableCategory!: Category;

  public isFormReady = false;

  constructor(private formBuilder: FormBuilder) {

  }
  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      name: [this.editableCategory!=null ? this.editableCategory.name:'', Validators.required]
    });
    this.isFormReady=true;
  }

  cancel() {
    console.log('Cancelar clicado');
    this.closeModelEventEmitter.emit(false);
  }
  save() {
    console.log('Salvar clicado');
    this.closeModelEventEmitter.emit(true);
  }

}
