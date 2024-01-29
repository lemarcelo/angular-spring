import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-teste',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.css'
})
export class TesteComponent {

public stringInterpolation ='Esse é um teste!';

public isDisabled = false;
myPropertyBinding: string ='';

// constructor(){}
// ngOnInit():void{
// }

 public disableButton() {
  if(this.isDisabled) this.isDisabled=false;
  else this.isDisabled=true;
}
processClick(input:string) {
  console.log(`This button was clicked! ${input}`);
}

}
