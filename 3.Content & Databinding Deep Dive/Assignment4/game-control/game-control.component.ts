import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
fired= new EventEmitter<number>();
  interval;
  ngOnInit(){
  
}
onStart(){
this.interval = setInterval (() => {

}, 1000);
}
onEnd(){}
}
