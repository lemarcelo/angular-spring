import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Category } from '../_models/category';
import { MaterialModule } from '../material.module';

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

  displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource: Category[]=CATEGORY_DATA;

  public editCategory(category: Category) {

    console.log('Edit new category clicked')
  }
  public deleteCategory(category: Category) {
    console.log('Delete new category clicked')}

  createNewCategory() {
    console.log('create new category clicked')
    }
}
