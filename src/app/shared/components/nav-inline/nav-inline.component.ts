import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../../interfaces/link';

@Component({
  selector: 'app-nav-inline',
  templateUrl: './nav-inline.component.html',
  styleUrls: ['./nav-inline.component.scss']
})
export class NavInlineComponent implements OnInit {
  @Input() links: Link[];
  constructor() { }

  ngOnInit(): void {
  }

}
