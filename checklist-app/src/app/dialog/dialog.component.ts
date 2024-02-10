import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
clickRighttButton() {
throw new Error('Method not implemented.');
}
clickLeftButton() {
throw new Error('Method not implemented.');
}

dialogMsg='Deseja continuar com esta ação?';
leftButtonLabel='Cancelar';
rightButtonLabel='OK';

}
