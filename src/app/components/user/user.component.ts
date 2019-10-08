import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;
  isEdit:boolean = false;
  users:string[];

  constructor(public dataService:DataService) { 
  	console.log("constructor ran ....");
    // Observable
    // this.users = this.dataService.getUsers();
  }

  ngOnInit() {
  	console.log("ngOnInit ran ....");
  	this.name = "Hemiah";
  	this.age = 30;
  	this.email = "test@test.com";
  	this.address = {
  		street:"定泗路",
  		city:"北京",
  		state:"昌平区"
  	};
  	this.hobbies = ["写代码","看电影","听音乐"];
  }

  onClick(hobby){
  	console.log(123);
  	// this.name = "Mr.Wu";
    // this.hobbies.push("New Hobby");
    this.hobbies.unshift(hobby);
    
  }

  addHobby(hobby){
  	// console.log(hobby);
  	this.hobbies.unshift(hobby);
  	// return false;
  }

  deleteHobby(i){
  	this.hobbies.splice(i,1);
  }

  toggleEdit(){
  	this.isEdit = !this.isEdit;
  }


}

interface Address{
  	street:string,
  	city:string,
  	state:string
}


