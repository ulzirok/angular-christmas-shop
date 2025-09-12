import { Component } from '@angular/core';
import { ContactForm } from './contact-form/contact-form';

@Component({
  selector: 'app-contacts',
  imports: [ContactForm],
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss'
})
export class Contacts {

}
