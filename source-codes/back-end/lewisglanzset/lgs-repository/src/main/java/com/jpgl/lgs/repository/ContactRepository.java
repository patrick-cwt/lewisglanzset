package com.jpgl.lgs.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.DeleteQuery;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.jpgl.lgs.common.model.Contact;

@Repository
public interface ContactRepository extends CrudRepository<Contact, ObjectId> {
    
    @Query("{contactId: ?0}")
    Contact findByContactId(String contactId);
    
    @DeleteQuery("{contactId: ?0}")
    long deleteByContactId(String contactId);

}
