import { Injectable } from '@angular/core';
import { ContactRest } from '../rest/contact.rest';
import { Contact } from '../model/contact.model';

@Injectable()
export class ContactService {

  constructor(private contactRest: ContactRest) {

  }

  public getAllContacts() {
    return this.contactRest.fetchAll();
  }

  public addContact(contact: Contact) {
    return this.contactRest.saveContact(contact);
  }

  public updateContact(contact: Contact) {
    return this.contactRest.updateContact(contact);
  }

  public deleteContact(contact: Contact) {
    return this.contactRest.deleteContact(contact);
  }

  public getContact(contactId: string) {
    return this.contactRest.fetchContact(contactId);
  }

}
