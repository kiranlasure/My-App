import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  users = [];
  admins = [];
  //  Empty array write karaycha & ji pn value data variable madhun yeil yeil ti 
  // array maddhe push karaycha
  pushUser(data)
  {
      this.users.push(data);
  }
  pushadmins(data)
  {
      this.admins.push(data);
  }
  
}
