import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';


@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.scss'],
  animations: [
    trigger('nameLabel', [
      state('normal', style({
        transform: 'translateY(30px)',
        color: 'gray'
      })),
      state('floatedUp', style({
        transform: 'translateY(7px)',
        color: '#8d53d7', // sass helper compenent needed to get viriables
        fontSize: '0.8rem',
        backgroundColor: 'white'
      })),
      transition('normal <=> floatedUp', animate(300))
    ])
  ]
})
export class NameInputComponent implements OnInit {

  nameLabelState = 'normal';

  @Input() id: string | any;
  @Input() name: string | any;
  @Input() parentForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.parentForm.controls[this.id].valueChanges.subscribe(value => {
      if (value == '' && this.nameLabelState === 'floatedUp' && !this.parentForm.controls[this.id].dirty) { 
        this.nameLabelState = 'normal';
      } 
    });
  }

  onFocus() {
    this.nameLabelState = 'floatedUp';
  }

  onBlur() {
    this.parentForm.controls[this.id].value ? this.nameLabelState = 'floatedUp' : this.nameLabelState = 'normal';
  }

}
