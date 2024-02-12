import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {

  clickLeftButton() {
    this.dialogRef.close(false);
  }
  clickRighttButton() {
    this.dialogRef.close(true);
  }

  leftButtonLabel='Cancelar';
  rightButtonLabel='OK';
  dialogMsg='Deseja continuar com esta ação?';


    constructor( public dialogRef: MatDialogRef<DialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,){
    if(data.leftButtonLabel !+ null){
      this.leftButtonLabel = data.leftButtonLabel;
    }
    if(data.rightButtonLabel !+ null){
      this.rightButtonLabel = data.rightButtonLabel;
    }
    if(data.dialogMsg !+ null){
      this.dialogMsg = data.dialogMsg;
    }
  }
}
