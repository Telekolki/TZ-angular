import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(private userDateService: UserDataService) {
    this.nameForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required, this.checkForRusLetters.bind(this)]),
      lastName: new FormControl(null, [Validators.required, this.checkForRusLetters.bind(this)]),
    })
    this.occupationForm = new FormGroup({
      occupation: new FormControl(null, Validators.required),
    })
  }

  ngOnInit(): void {
    this.user = this.userDateService.getUserObject();
    this.userDateService.getOccupationsArray().then( (value) => this.occupationsArray = value as string[]);
  }

  onSubmit(value: any) {
    if (this.nameForm.touched && this.nameForm.valid) {
      this.userDateService.updateUserName(value.firstName, value.lastName);
      this.nameForm.reset();
    } else if(this.occupationForm.touched && this.occupationForm.valid) {
      this.userDateService.updateUserOccupation(value.occupation);
      this.occupationForm.reset();
    }
  }

  checkForRusLetters(control: FormControl): {[s: string]: boolean} | null {
    if (!(/^[а-яА-Я-]*$/.test(control.value))) {
      return {nameIsInvalid: true}
    } else {
      return null;
    }
  }
  
}
