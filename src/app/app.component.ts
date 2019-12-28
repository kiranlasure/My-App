import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  user = [];
  //  Empty array write karaycha & ji pn value data variable madhun yeil yeil ti 
  // array maddhe push karaycha
  pushUser(data)
  {
      this.user.push(data);
  }
}
