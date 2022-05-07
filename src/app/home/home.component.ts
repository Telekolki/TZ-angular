import { Component, OnInit } from '@angular/core';
import { UserDataService, UserModel } from './userData.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  user: UserModel = {
      firstName:  '',
      lastName: '',
      occupation: '',
    };

  constructor(private userDateService: UserDataService) { }

  ngOnInit(): void {
    this.user = this.userDateService.getUserObject();
  }
}
