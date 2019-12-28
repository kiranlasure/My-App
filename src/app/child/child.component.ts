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
    if(inpval.value.length>0)
    {      
    this.count=this.count+1;
    alert(inpval.value);
    }
    // iNPUT vARIable maddhe kahi asel trch alrt karayach & Count chi value vadhvayachi nahitr nahi
   
  }
  
}