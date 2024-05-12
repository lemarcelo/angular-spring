import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { Category } from '../_models/category';
import { CategoryEditComponent } from '../category-edit/category-edit.component';
import { MaterialModule } from '../material.module';
import { CategoryService } from '../service/category.service';
import { SnackBarService } from '../service/snack-bar.service';
import { DialogComponent } from './../dialog/dialog.component';


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [MaterialModule, RouterModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  constructor(private dialog: MatDialog, private categoryService: CategoryService, private snackBarService: SnackBarService){}

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(
      (resp: Category[]) =>{
        this.dataSource = resp;
      }
    )
  }

  displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource: Category[]=[];

  public editCategory(inputCategory: Category) {
    this.dialog.open(CategoryEditComponent, {disableClose: true, data: {
      editableCategory: inputCategory
    }}).afterClosed().subscribe(resp => {
          console.log('Modal editar fechada');
          if(resp){
            this.snackBarService.showSnackBar('Categoria editada com sucesso!', 'Ok');
          }
        });
  }

  public deleteCategory(category: Category) {

    this.dialog.open(DialogComponent, {disableClose: true, data: {
      msg:'Você tem certeza que gostaria de apagar a categoria?', leftButtonLabel:'Cancelar', rightButtonLabel:'Ok'
    }}).afterClosed().subscribe(resp => {

      console.log('Categoria não apagada!');
      if(resp){
        this.snackBarService.showSnackBar('Categoria apagada com sucesso!', 'Ok');
      }
    })
  }



  createNewCategory() {
    this.dialog.open(CategoryEditComponent, {disableClose: true, data: {
      actionName: "Criar"
    }}).afterClosed().subscribe(resp => {
          console.log('Modal criar fechada');

          if(resp){
            this.snackBarService.showSnackBar('Categoria criada com sucesso!', 'Ok');
          }
        });  }
}
