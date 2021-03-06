import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.scss']
})
export class InfoBlockComponent implements OnInit {

  @Input() header: string | undefined;
  @Input() content: string | undefined;
  @Input() formGroup!: FormGroup;
  @Output() formSubmitted = new EventEmitter <{}>();
  @Output() editClicked = new EventEmitter <FormGroup>();

  isOpened: boolean = false;

  constructor() { }

  ngOnInit(): void {}

  onEditButtonClicked() {
    this.editClicked.emit(this.formGroup);
    this.isOpened = true;
  }

  onIsClosedEmitted(isClosed: boolean) {
    this.isOpened = !isClosed;
    this.formGroup.reset();
    this.resetFormControls();
  }

  onSubmit(value: any) {
    this.formSubmitted.emit(value);
    this.formGroup.reset();
    this.resetFormControls();
  }

  resetFormControls() {
    for (let key in this.formGroup.controls) {
      this.formGroup.controls[key].setValue('');
    }
  }


}
