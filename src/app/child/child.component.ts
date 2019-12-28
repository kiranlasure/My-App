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

  constructor() { }

  ngOnInit() {
  }
  onCreate(inpval)
  {
    if(inpval.value.length>0)
    {      
    this.count=this.count+1;
    this.inputEvent.emit(inpval.value);
    }   
  }
  
}