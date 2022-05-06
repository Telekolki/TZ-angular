import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.css']
})
export class InfoBlockComponent implements OnInit {

  @Input() header: string | undefined;
  @Input() content: string | undefined;
  @Input() type: string | undefined;

  isOpened: boolean;

  constructor() { 
    this.isOpened = false;
  }

  ngOnInit(): void {
    
  }

  onEditButtonClicked() {
    this.isOpened = true;
  }

  onIsClosedEmitted(isClosed: boolean) {
    this.isOpened = !isClosed;
  }

}
