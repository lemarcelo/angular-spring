import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { Category } from '../_models/category';
import { MaterialModule } from '../material.module';
import { DialogComponent } from './../dialog/dialog.component';

const CATEGORY_DATA =[
  {name: 'Educação', guid: 'aaa-bbb-ccc-ddd'},
  {name: 'Saúde', guid: 'aaa-bbb-ccc-ddd'},
  {name: 'Trabalho', guid: 'aaa-bbb-ccc-ddd'},
  {name: 'Outros', guid: 'aaa-bbb-ccc-ddd'},
];
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [MaterialModule, RouterModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  constructor(private dialog: MatDialog){}

  displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource: Category[]=CATEGORY_DATA;

  public editCategory(category: Category) {
    console.log('Edit new category clicked')
  }

  public deleteCategory(category: Category) {

    this.dialog.open(DialogComponent, {disableClose: true,
      data: {dialogMsg:'Você tem certeza que gostaria de apagar a categoria?', leftButtonLabel:'Cancelar', rightButtonLabel:'Sim'}}).afterClosed().subscribe(
      resp => {
        if(resp){
          console.log('Categoria apagada com sucesso!');
      }else{
          console.log('Categoria não apagada!');
        }
      }
    )

  }



  createNewCategory() {
    console.log('create new category clicked')
  }
}
