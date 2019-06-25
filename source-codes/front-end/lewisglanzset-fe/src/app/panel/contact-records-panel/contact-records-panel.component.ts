import { Component, OnInit } from '@angular/core';
import { Contact } from '../../model/contact.model';
import { ContactService } from '../../service/contact.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-records-panel',
  templateUrl: './contact-records-panel.component.html',
  styleUrls: ['./contact-records-panel.component.css']
})
export class ContactRecordsPanelComponent implements OnInit {

  public contacts: Contact[];

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData(): void {
    this.contactService.getAllContacts()
      .pipe(first())
      .subscribe(
        data => {
          this.contacts = data;    
        },
        error => {
          console.log('error login');
        }
      );
  }

  onAddContact(): void {
    this.router.navigate(['contact-details/add']);
  }

  onEdit(contact: Contact): void {
    this.router.navigate(['contact-details/update/' + contact.contactId]);
  }

  onDelete(contact: Contact): void {
    this.contactService.deleteContact(contact).pipe(first())
      .subscribe(data => {
        this.loadData();
      }, error => {
        console.log('error: ' + error);
      });
  }

}
