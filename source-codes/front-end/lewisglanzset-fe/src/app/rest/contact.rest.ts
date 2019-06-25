import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestApiConfig } from '../config/rest-api.config';
import { User } from '../model/user.model';
import { Contact } from '../model/contact.model';

@Injectable()
export class ContactRest {

    constructor(private restApiConfig: RestApiConfig, private http: HttpClient) { }

    fetchAll() {
        return this.http.get<Contact[]>(this.restApiConfig.getApiPath() + '/contact/all');
    }

    fetchContact(contactId: string) {
        return this.http.get<Contact>(this.restApiConfig.getApiPath() + '/contact/' + contactId);
    }

    saveContact(contact: Contact) {
        return this.http.put<any>(this.restApiConfig.getApiPath() + '/contact', JSON.stringify(contact));
    }

    updateContact(contact: Contact) {
        return this.http.post<any>(this.restApiConfig.getApiPath() + '/contact/update', JSON.stringify(contact));
    }

    deleteContact(contact: Contact) {
        return this.http.delete<any>(this.restApiConfig.getApiPath() + '/contact/' + contact.contactId);
    }
}
