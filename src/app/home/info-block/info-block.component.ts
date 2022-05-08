import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.css']
})
export class InfoBlockComponent implements OnInit {

  @Input() header: string | undefined;
  @Input() content: string | undefined;
  @Output() formSubmitted = new EventEmitter <{}>();
  @Input() formGroup!: FormGroup;

  isOpened: boolean = false;

  constructor() { }

  ngOnInit(): void {}

  onEditButtonClicked() {
    this.isOpened = true;
  }

  onIsClosedEmitted(isClosed: boolean) {
    this.isOpened = !isClosed;
  }

  onSubmit(value: any) {
    console.log(this.formGroup);
    this.formSubmitted.emit(value);
  }

}
