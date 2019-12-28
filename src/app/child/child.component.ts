import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() boxColor;
  @Input() placeHoldertext;
  // It is Two Binding. write Here using @Input and use this at
  // a time of Selector of child component.
  // we handle this outside this component.
  // It's very imp.feature
  constructor() { }

  ngOnInit() {
  }

}