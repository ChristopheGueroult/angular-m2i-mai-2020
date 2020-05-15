import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


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
      name: [
        this.init.name,
        Validators.required
      ],
      ca: [
        this.init.ca,
        Validators.compose([Validators.required, Validators.min(1), Validators.max(100000)])
      ],
      state: [this.init.state],
      comment: [this.init.comment]
    });
  }

  public onSubmit() {
    this.formSubmited.emit(this.form.value);
  }

}
