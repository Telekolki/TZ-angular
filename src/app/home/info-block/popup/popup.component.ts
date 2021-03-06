import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
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
