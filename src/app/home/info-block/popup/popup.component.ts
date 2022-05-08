import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserDataService } from '../../userData.service';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit, AfterViewInit {
  @Input() formGroup!: FormGroup;
  @Output() formSubmitted = new EventEmitter <{}>();
  @Output() isClosed = new EventEmitter <boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {}

  onSubmit() {
    this.formSubmitted.emit(this.formGroup.value);
    this.isClosed.emit(true);
  }

  public onCloseButtonClicked() {
    this.isClosed.emit(true);
  }
   
  onSaveButtonClicked() {
    this.isClosed.emit(true);
  }
}
