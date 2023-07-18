import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
showMessage= false;
log= [];
  displayMessage(){
    this.showMessage= true;
    this.log.push(this.log.length + 1);
  }
}
