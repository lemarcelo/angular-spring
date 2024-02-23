import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';


@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.css'
})
export class CategoryFormComponent {

  public actionName="Editar";

  public categoryForm: FormGroup;
  /**
   *
   */
  constructor(private formBuilder: FormBuilder) {
    this.categoryForm = this.formBuilder.group({
      name: 'Aluno'
    });
  }

  cancel() {
    console.log("Cancelare Clicado");
  }

  save() {
    console.log("Save Clicado");
  }

}
