import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Category } from '../_models/category';
import { MaterialModule } from '../material.module';


@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.css'
})
export class CategoryFormComponent {

  @Input() public actionName="Editar";

  public categoryForm: FormGroup;

  @Output() public closeModalEventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() public editableCategory!: Category;

  constructor(private formBuilder: FormBuilder) {
    this.categoryForm = this.formBuilder.group({
      name: 'Aluno'
    });
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
