import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() boxColor;
  @Input() placeHoldertext;
  count:number = 0;
  constructor() { }

  ngOnInit() {
  }
  onCreate()
  {
    this.count=this.count+1;
  }
  // It means whenever Function call the value of the count will be increses by one.

}