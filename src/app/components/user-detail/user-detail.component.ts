import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  id:number;
  user:object = {};
  constructor(
  		public dataService:DataService,
  		private route: ActivatedRoute,
  		private router: Router
  	) { 

  		this.route.params.subscribe((params:Params)=>{
  			// console.log(params.id);
  			this.id = params.id;
  		})

  }

  ngOnInit() {
  	 this.dataService.getSingleUser(this.id).subscribe((user)=>{
  	 	// console.log(user);
  	 	this.user = user;
  	 })
  }

}
