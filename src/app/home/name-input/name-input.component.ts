import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.scss']
})
export class NameInputComponent implements OnInit {

  @Input() id: string | any;
  @Input() name: string | any;
  @Input() parentForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
