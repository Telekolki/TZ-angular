import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserDataService } from '../../userData.service';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  @Output() isClosed = new EventEmitter <boolean>();
  @Input() type: string | undefined;

  occupationsArray: string[] = [];

  userOccupation: string = '';
  
  isNameType: boolean = false;

  constructor(private userDateService: UserDataService) { }

  ngOnInit(): void {
    this.isNameType = this.type==='name';
    this.userDateService.getOccupationsArray().then( (value) => this.occupationsArray = value as string[]);
  }

  public onCloseButtonClicked() {
    this.userOccupation = '';
    this.isClosed.emit(true);
  }
   
  submitName(form: NgForm) {
    this.userDateService.updateUserName(form.value.firstName, form.value.lastName);
    this.isClosed.emit(true);
  }

  submitOccupation(form: NgForm) {
    if (this.userOccupation) {
      this.userDateService.updateUserOccupation(this.userOccupation);
      this.isClosed.emit(true);
    }
  }

  changeOccupation(e: any) {
    this.userOccupation = e.target.value;
  }

}
