package com.jpgl.lgs.service;

import java.util.List;

import com.jpgl.lgs.common.model.Contact;

public interface ContactService {
    
    List<Contact> getAllContacts();
    
    boolean insertContact(Contact contact);
    
    boolean updateContact(Contact contact);
    
    boolean deleteContact(String contactId);

    Contact getContact(String contactId);
    
}
