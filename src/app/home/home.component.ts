import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
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
  occupationsArray: string[] = [];

  nameForm: FormGroup;
  occupationForm: FormGroup;

  constructor(private userDateService: UserDataService, fb: FormBuilder) {
    this.nameForm = fb.group({
      firstName: [''],
      lastName: ['']
    })
    this.occupationForm = fb.group({
      occupation: ['']
    })
  }

  ngOnInit(): void {
    this.user = this.userDateService.getUserObject();
    this.userDateService.getOccupationsArray().then( (value) => this.occupationsArray = value as string[]);
  }

  submitName(form: NgForm) {
    this.userDateService.updateUserName(form.value.firstName, form.value.lastName);
  }

  onSubmit(value: any) {
    if (value.firstName && value.lastName) {
      this.userDateService.updateUserName(value.firstName, value.lastName);
    } else if(value.occupation) {
      this.userDateService.updateUserOccupation(value.occupation);
    }
  }
  
}
