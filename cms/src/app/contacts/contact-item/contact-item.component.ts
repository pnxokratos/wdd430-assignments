import { Component, OnInit, Input } from '@angular/core';

import {Contact} from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'cms-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit{
 @Input() contact: Contact;
//  @Output() contactSelected = new EventEmitter<void>(); //not needed since we will use the service now

 constructor( private contactService: ContactService){}

 ngOnInit(){}

 onSelected(){
  // this.contactSelected.emit(); //part of the output EventEmitter
  this.contactService.contactSelectedEvent.next(this.contact);

 }

}