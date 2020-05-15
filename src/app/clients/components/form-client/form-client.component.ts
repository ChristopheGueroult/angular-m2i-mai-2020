import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {
  public states = Object.values(StateClient);
  public form: FormGroup;
  @Input() init = new Client();
  @Output() formSubmited: EventEmitter<Client> = new EventEmitter();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [this.init.id],
      name: [this.init.name],
      ca: [this.init.ca],
      state: [this.init.state]
    });
  }

  public onSubmit() {
    this.formSubmited.emit(this.form.value);
  }

}
