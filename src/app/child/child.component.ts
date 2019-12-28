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
  onCreate(inpval)
  {
    this.count=this.count+1;
    alert(inpval.val);
    // It will show the input box value........
  }
  // It means whenever Function call the value of the count will be increses by one.

}