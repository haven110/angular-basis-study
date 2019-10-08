import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';

import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { DataService } from './services/data.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

const appRoutes:Routes = [
  {path:"",component:HomeComponent},
  {path:"user",component:UserComponent},
  {path:"user/:id",component:UserDetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    NavbarComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
