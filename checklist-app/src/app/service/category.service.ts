import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Category } from '../_models/category';

export const CATEGORY_DATA =[
  {name: 'Educação', guid: 'aaa-bbb-ccc-ddd'},
  {name: 'Saúde', guid: 'aaa-bbb-ccc-ddd'},
  {name: 'Trabalho', guid: 'aaa-bbb-ccc-ddd'},
  {name: 'Outros', guid: 'aaa-bbb-ccc-ddd'},
];

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  constructor() { }

  public getAllCategories(): Observable<Category[]>{
    return of (CATEGORY_DATA);
  }
}
