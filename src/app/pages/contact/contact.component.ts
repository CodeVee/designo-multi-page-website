import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  nameCtrl = new FormControl('', Validators.required);
  emailCtrl = new FormControl('', [Validators.required, Validators.email]);
  phoneCtrl = new FormControl('', Validators.required);
  messageCtrl = new FormControl('', Validators.required);
  contactForm!: FormGroup
  constructor(private fb: FormBuilder, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Contact');
    this.contactForm = this.fb.group({
      name: this.nameCtrl,
      email: this.emailCtrl,
      phone: this.phoneCtrl,
      message: this.messageCtrl
    })
  }

}
