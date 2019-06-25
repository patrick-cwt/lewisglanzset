import { Component, OnInit } from '@angular/core';
import { Contact } from '../../model/contact.model';
import { InputValidationMapping } from '../../model/error-message.model';
import { ContactService } from '../../service/contact.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, first } from 'rxjs/operators';

@Component({
  selector: 'app-contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.css']
})
export class ContactDetailsPageComponent implements OnInit {

  public addMode: boolean;
  public updateMode: boolean;
  public contact: Contact;

  private inputValidationMsgsMap: Map<string, InputValidationMapping>;
  private errorMsgMap: Map<string, string>;

  constructor(private contactService: ContactService, private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
    this.inputValidationMsgsMap = new Map();
    this.errorMsgMap = new Map();
    this.handleMode(this.route.snapshot.paramMap.get('mode'), 
      this.route.snapshot.paramMap.get('contactId'));
  }

  private handleMode(mode: string, contactId: string): void {
    this.addMode = false;
    this.updateMode = false;

    if (mode !== 'undfined') {
      if (mode === 'add') {
        this.contact = new Contact('', '', '', '');
        this.addMode = true;
      } else if (mode === 'update' && contactId !== 'undefined') {
        this.updateMode = true;
        this.contactService.getContact(contactId).pipe(first())
          .subscribe(data => {
            this.contact = data;
          }, error => {
            console.log('error: ' + error);
          });
      } else {
        this.router.navigate(['home']);
      }
    } else {
      this.router.navigate(['home']);
    }
  }

  public onSaveAdd(txtName: HTMLInputElement, txtEmail: HTMLInputElement, txtTelephone: HTMLInputElement): void {
    if (this.fieldsValid(txtName, txtEmail, txtTelephone)) {
      const newContact = new Contact('', txtName.value, txtEmail.value, txtTelephone.value);
      this.contactService.addContact(newContact)
        .pipe(first())
        .subscribe(
          data => {
            console.log('add contact: ' + data);
            this.router.navigate(['home']);
          },
          error => {
            console.log('error login');
            this.router.navigate(['home']);
          }
        );
    }
  }

  public onSaveUpdate(txtName: HTMLInputElement, txtEmail: HTMLInputElement, txtTelephone: HTMLInputElement): void {
    if (this.fieldsValid(txtName, txtEmail, txtTelephone)) {
      const newContact = new Contact(this.contact.contactId, txtName.value, txtEmail.value, txtTelephone.value);
      this.contactService.updateContact(newContact)
        .pipe(first())
        .subscribe(
          data => {
            console.log('add contact: ' + data);
            this.router.navigate(['home']);
          },
          error => {
            console.log('error login');
            this.router.navigate(['home']);
          }
        );
    }
  }

  private fieldsValid(txtName: HTMLInputElement, txtEmail: HTMLInputElement, txtTelephone: HTMLInputElement): boolean {
    this.setInputValidationMapping('name', 'Name is required!', txtName);
    this.setInputValidationMapping('email', 'Email is required!', txtEmail);
    this.setInputValidationMapping('telephone', 'Telephone is required!', txtTelephone);
    return this.areRequiredFieldsNotEmpty();
  }

  private setInputValidationMapping(key: string, validationMsg: string, input: HTMLInputElement): void {
    this.inputValidationMsgsMap.set(key, new InputValidationMapping(input, validationMsg));
  }

  private areRequiredFieldsNotEmpty(): boolean {
    let result: boolean = true;

    this.errorMsgMap.clear();
    this.inputValidationMsgsMap.forEach((validationMapping, key) => {
      if (validationMapping.input.value === '' || validationMapping.input.value === 'undefined') {
        this.errorMsgMap.set(key, validationMapping.validationMsg);
        result = false;
      }
    });

    return result;
  }

  public onBackToHome(): void {
    this.router.navigate(['home']);
  }

  public getValidationError(inputName: string): string {
    return this.errorMsgMap.get(inputName);
  }

  public reset(): void {
    this.errorMsgMap.clear();
  }

}
