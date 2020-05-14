import { Component, OnInit, Input } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

  public doAction() {
    console.log('action ok');

  }

}
// bouton qui au click redirige vers une route interne à l'application
// bouton qui au click redirige vers une page externe à l'application
// bouton qui au click lance une action (ouvrir un popup par exemple, affiche un msg, ...)
// dans tous les cas un bouton qui doit pouvoir afficher du texte
