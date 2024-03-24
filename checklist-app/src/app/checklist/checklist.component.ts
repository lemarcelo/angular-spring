import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ChecklistItem } from '../_models/checklist_item';
import { CATEGORY_DATA } from '../category/category.component';
import { DialogComponent } from '../dialog/dialog.component';
import { MaterialModule } from '../material.module';

export const CHECKLIST_DATA=[
  {
    guid: 'aaa-bbb-ccc-ddd', completed: false, description: 'Ir ao oftalmologista', deadLine: Date.now(), postDate: Date.now(),
    category: CATEGORY_DATA.find(x => x.name =='Saúde')
  },
  {
    guid: 'aaa-bbb-ccc-eee', completed: true, description: 'Reunião com o gerente gerional', deadLine: Date.now(), postDate: Date.now(),
    category: CATEGORY_DATA.find(x => x.name =='Trabalho')
  }
]
@Component({
  selector: 'app-checklist',
  standalone: true,
  imports: [RouterOutlet, MaterialModule, RouterLink, DatePipe],
  templateUrl: './checklist.component.html',
  styleUrl: './checklist.component.css'
})
export class ChecklistComponent {

  public datasource= CHECKLIST_DATA;

  public displayedColumns: string[] = ['id', 'completed', 'description', 'deadLine', 'postDate', 'category', 'actions'];

  constructor(private dialog: MatDialog){}

  public createNewItem() {
    console.log('Criar novo item do checklist clicado!');
  }


  public updateCompleteStatus(status: boolean) {
    if(status){
      console.log('verdadeiro');
    }else{
      console.log('falso');
    }
    }

    updateChecklistItem(checklist: ChecklistItem) {
      console.log('Editando')
      }

    deleteChecklistItem(checklist: ChecklistItem) {
      this.dialog.open(DialogComponent, {disableClose: true,
        data: { msg:'Você deseja realmente apagar este item?', leftButtonLabel:'Cancelar', rightbuttonLabel: 'Ok'}
       }).afterClosed().subscribe(resp =>{
        console.log('Janela modal confirmar apagar fechada');
       })

      }





}
