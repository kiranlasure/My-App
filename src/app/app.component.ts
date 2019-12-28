import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  users = [];
  pushUser(data)
  {
      this.users.push(data);
  }
  onRemoveUsers(item)
  {
    this.users.splice(item,1);
  }

  admins = [];
  pushadmins(data)
  {
      this.admins.push(data);
  }
  onRemoveAdmin(item)
  {
    this.admins.splice(item,1);
  }
  // here we get 1 item and delete it using splice method. 
  // It takes number of items item and delete it from the array6
}
