package com.jpgl.lgs.common.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

public class Contact {
    @Id
    private ObjectId id;
    private String contactId;
    private String name;
    private String email;
    private String telephone;

    public Contact() {
        this("", "", "");
    }

    public Contact(String name, String email, String telephone) {
        this.name = name;
        this.email = email;
        this.telephone = telephone;
    }
    
    public String getContactId() {
        return contactId;
    }
    
    public void setContactId(String contactId) {
        this.contactId = contactId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }
}
