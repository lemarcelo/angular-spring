import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ChecklistItem } from '../_models/checklist_item';
import { ChecklistEditComponent } from '../checklist-edit/checklist-edit.component';
import { DialogComponent } from '../dialog/dialog.component';
import { MaterialModule } from '../material.module';
import { ChecklistService } from '../service/checklist.service';
import { SnackBarService } from '../service/snack-bar.service';


@Component({
  selector: 'app-checklist',
  standalone: true,
  imports: [RouterOutlet, MaterialModule, RouterLink, DatePipe, FormsModule, ReactiveFormsModule],
  templateUrl: './checklist.component.html',
  styleUrl: './checklist.component.css'
})
export class ChecklistComponent {

  public datasource: ChecklistItem[]=[];

  public displayedColumns: string[] = ['id', 'completed', 'description', 'deadline', 'postDate', 'category', 'actions'];

constructor(private dialog: MatDialog, private checklistService: ChecklistService, private snackBarService: SnackBarService) {}

ngOnInit(): void {
  this.checklistService.getAllChecklistItems().subscribe(
    (resp : ChecklistItem[]) =>{
      this.datasource = resp;
    });
}

    updateCompleteStatus(status: boolean) {
    if(status){
      console.log('verdadeiro');
    }else{
      console.log('falso');
    }
    }

    createNewItem() {
      this.dialog.open(ChecklistEditComponent, {
        disableClose: true, data:{actionName: 'Criar'},
      }).afterClosed().subscribe(resp =>{
        console.log('Fechando modal de criação');
        console.log('Fechando modal de edição')
        if(resp){
          this.snackBarService.showSnackBar('Item do checklist criado com sucesso!', 'OK');
        }
      })
    }

    deleteChecklistItem(checklistItem: ChecklistItem) {
      this.dialog.open(DialogComponent, {disableClose: true,
        data: { msg:'Você deseja realmente apagar este item?', leftButton:'Cancelar', rightbutton: 'Ok'}
       }).afterClosed().subscribe(resp =>{
        console.log('Janela modal confirmar apagar fechada');
        if(resp){
          this.snackBarService.showSnackBar('Item do checklist apagado com sucesso!', 'OK');
        }

       })

      }

    updateChecklistItem(checklistItem: ChecklistItem) {
      this.dialog.open(ChecklistEditComponent, {
        disableClose: true, data: {updatableChecklistItem: checklistItem,  actionName: 'Editar'}
      }).afterClosed().subscribe(resp=>{
        console.log('Fechando modal de edição')
        if(resp){
          this.snackBarService.showSnackBar('Item do checklist editado com sucesso!', 'OK');
        }
      })
    }



}
