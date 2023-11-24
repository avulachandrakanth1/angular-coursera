import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FullStackJavaAngularCoursera';
  listShow:boolean = false;
  search:any=''
  usersList= [
    {
      name:"Chandrakanth",
      mobile:"9876543210",
      email:"chandrakantavula@gmail.com"
    },
    {
      name:"Raju",
      mobile:"9876543210",
      email:"raju@gmail.com"
    },
    {
      name:"Ramesh",
      mobile:"9876543210",
      email:"ramesh@gmail.com"
    },
    {
      name:"Ayush",
      mobile:"9876543210",
      email:"ayush@gmail.com"
    },
    {
      name:"Gova",
      mobile:"9876543210",
      email:"gova@gmail.com"
    },
    {
      name:"Ramanji",
      mobile:"9876543210",
      email:"ramanji@gmail.com"
    },
    {
      name:"Kalyan",
      mobile:"9876543210",
      email:"kalyan@gmail.com"
    }
  ]
  getProducts(){
    this.listShow = true;
  }
  home(){
    this.listShow = false;
  }
  filter(){
    this.usersList = this.usersList.filter(obj =>
      obj.name.includes(this.search) ||
      obj.email.includes(this.search) ||
      obj.mobile.includes(this.search)
    );
  }

}
