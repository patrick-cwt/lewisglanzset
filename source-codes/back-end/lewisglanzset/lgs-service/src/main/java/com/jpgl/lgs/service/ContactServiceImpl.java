package com.jpgl.lgs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.common.collect.Lists;
import com.jpgl.lgs.common.model.Contact;
import com.jpgl.lgs.repository.ContactRepository;

@Service
public class ContactServiceImpl implements ContactService {

    @Autowired
    private ContactRepository contactRepository;

    @Override
    public List<Contact> getAllContacts() {
        Iterable<Contact> contacts = contactRepository.findAll();
        List<Contact> contactList = Lists.newArrayList(contacts);
        return contactList;
    }

    @Override
    public Contact getContact(String contactId) {
        return contactRepository.findByContactId(contactId);
    }

    @Override
    public boolean insertContact(Contact contact) {
        String contactId = String.format("%05x", System.currentTimeMillis());
        contact.setContactId(contactId);
        Contact savedContact = contactRepository.save(contact);
        return savedContact != null;
    }

    @Override
    public boolean updateContact(Contact contact) {
        contactRepository.deleteByContactId(contact.getContactId());
        Contact updatedContact = contactRepository.save(contact);
        return updatedContact != null;
    }

    @Override
    public boolean deleteContact(String contactId) {
        contactRepository.deleteByContactId(contactId);
        return true;
    }

}
