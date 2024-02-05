import { Component } from '@angular/core';
import { MaterialModule } from '../header/material.module';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
copywrite = 'Desenvolvido por Marcelo Santos';

}
