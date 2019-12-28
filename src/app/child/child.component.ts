import { Component, OnInit,Input ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() boxColor;
  @Input() placeHoldertext;
  count:number = 0;
  @Output() inputEvent = new EventEmitter();

  // This is child componet & we want to add item into parent componet from this component.
  // Then we can use EventEmitter to emit some value to parent Component\
  // Input & Output are decorator
  constructor() { }

  ngOnInit() {
  }
  onCreate(inpval)
  {
    if(inpval.value.length>0)
    {      
    this.count=this.count+1;
    alert(inpval.value);
    }   
  }
  
}