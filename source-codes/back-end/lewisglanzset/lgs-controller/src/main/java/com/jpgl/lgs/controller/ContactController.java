package com.jpgl.lgs.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jpgl.lgs.common.model.Contact;
import com.jpgl.lgs.common.response.ContactResponse;
import com.jpgl.lgs.service.ContactService;

@RestController
@RequestMapping("/contact")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @GetMapping("/all")
    public ResponseEntity<List<Contact>> getContacts() {
        return new ResponseEntity<>(contactService.getAllContacts(), HttpStatus.OK);
    }

    @GetMapping("/{contact-id}")
    public ResponseEntity<Contact> getContact(@PathVariable("contact-id") String contactId) {
        return new ResponseEntity<>(contactService.getContact(contactId), HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<ContactResponse> putContact(@RequestBody Contact contact) {
        boolean inserted = contactService.insertContact(contact);
        return new ResponseEntity<>(new ContactResponse(inserted), HttpStatus.OK);
    }
    
    @PostMapping("/update")
    public ResponseEntity<ContactResponse> updateContact(@RequestBody Contact contact) {
        boolean inserted = contactService.updateContact(contact);
        return new ResponseEntity<>(new ContactResponse(inserted), HttpStatus.OK);
    }

    @DeleteMapping("/{contact-id}")
    public ResponseEntity<ContactResponse> deleteContact(@PathVariable("contact-id") String contactId) {
        boolean deleted = contactService.deleteContact(contactId);
        return new ResponseEntity<>(new ContactResponse(deleted), HttpStatus.OK);
    }
}
