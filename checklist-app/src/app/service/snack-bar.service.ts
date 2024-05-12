import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  private defaulDuration = 3;
  constructor(private _snackBar: MatSnackBar) {}


  public showSnackBar(message: string, action: string, durationParam?: number) {
    this._snackBar.open(message, action, {duration: durationParam != null ? durationParam *1000: this.defaulDuration *1000});
  }
  //this._snackBar.open(message, action, {duration: durationParam * 1000 ?? this.defaulDuration *1000});

}
