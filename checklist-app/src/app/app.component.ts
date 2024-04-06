import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CategoryComponent } from "./category/category.component";
import { ChecklistComponent } from './checklist/checklist.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from "./header/header.component";
import { MaterialModule } from './material.module';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CategoryComponent, HeaderComponent, FooterComponent, MaterialModule, RouterLink, ChecklistComponent]
})
export class AppComponent {

  public events: string[] = [];
  public opened=false;

}
