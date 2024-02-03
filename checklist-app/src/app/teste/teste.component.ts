import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-teste',
  standalone: true,
  imports: [FormsModule, CommonModule],

  templateUrl: './teste.component.html',
  styleUrl: './teste.component.css'
})
export class TesteComponent {
  public showTitle =true;
  public items=[
    {description: 'item 1', id: 1},
    {description: 'item 2', id: 2},
    {description: 'item 3', id: 3},
    {description: 'item 4', id: 4},
  ]

  public changeTitleDisplayStatus(){
    this.showTitle?this.showTitle=false:this.showTitle=true;


}

    // this.showTitle?this.showTitle=false:this.showTitle=true;
// Aula 14
// public stringInterpolation ='Esse é um teste!';
// public isDisabled = false;
// myPropertyBinding: string ='';

// constructor(){}
// ngOnInit():void{
// }

// Aula 14
//  public disableButton() {
//   if(this.isDisabled) this.isDisabled=false;
//   else this.isDisabled=true;
// }
// processClick(input:string) {
//   console.log(`This button was clicked! ${input}`);
// }

//
}
