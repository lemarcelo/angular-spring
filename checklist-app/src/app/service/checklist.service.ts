import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChecklistItem } from '../_models/checklist_item';

export const CHECKLIST_DATA=[
  {
    guid: 'aaa-bbb-ccc-ddd', completed: false, description: 'Ir ao oftalmologista', deadline: new Date(), postDate: new Date(),
    category: {guid: 'aaa-bbb-ccc-ddd', name: 'Saúde'}
  },
  {
    guid: 'aaa-bbb-ccc-eee', completed: true, description: 'Reunião com o gerente gerional', deadline: new Date(), postDate: new Date(),
    category: {guid: 'aaa-bbb-ccc-ddd', name: 'Trabalho'}
  }
]

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {


  constructor() { }

  public getAllChecklistItems(): Observable<ChecklistItem[]>{
    return of (CHECKLIST_DATA);
  }
}
