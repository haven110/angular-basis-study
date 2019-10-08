import { User } from './../models';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users:any[];
  id:number;

  user:User = {
    id:0,
    name:"",
    email:"",
    phone:""
  }

  isEdit:boolean = false;

  
  constructor(public dataService:DataService) { 
  	
    this.dataService.getUsers().subscribe(users=>{
      // console.log(users);
      this.users = users;
    })
  }
  onSubmit(){
      this.dataService.updateUser(this.user).subscribe(user=>{
          console.log(user)
            this.users.unshift(user);
      })
  }
  

  // onSubmit(user){
  //   this.dataService.updateUser(this.user).subscribe(user=>{
  //     this.users.unshift(user);
  //   })
  // }

  // onSubmit(isEdit){

  //   if (isEdit) {
  //     this.dataService.updateUser(this.user).subscribe(user=>{
  //       // 删除当前的
  //       for(let i = 0; i < this.users.length; i++){
  //         if (this.users[i].id == this.user.id) {
  //           this.users.splice(i,1);
  //         }
  //       }
  //       // 添加更新的
  //       this.users.unshift(this.user);
  //     })
  //   }else{
  //     this.dataService.addUser(this.user).subscribe(user=>{
  //       // console.log(user);
  //       this.users.unshift(user);
  //     })
  //   }
  // }

  onDeleteClick(id){
    // console.log(id);
    this.dataService.deleteUser(id).subscribe(res=>{
      for(let i = 0; i < this.users.length; i++){
        if (this.users[i].id == id) {
          this.users.splice(i,1);
        }
      }
    })
  }

  onEditClick(user){
    this.isEdit = true;
    this.user = user;
  }

  ngOnInit() {
  }

}
