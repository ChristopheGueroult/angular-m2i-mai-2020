import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() route: string;
  @Input() href: string;
  @Input() action: boolean;
  @Output() clicked: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  public doAction() {
    this.clicked.emit();
  }

}

